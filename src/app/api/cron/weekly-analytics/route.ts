import nodemailer from "nodemailer";

type CountryMetric = {
  country?: string;
  pageviews: number;
  visitors: number;
};

type AnalyticsResponse = {
  data: CountryMetric[];
};

function getPreviousWeek() {
  const until = new Date();
  until.setUTCHours(0, 0, 0, 0);

  const since = new Date(until);
  since.setUTCDate(since.getUTCDate() - 7);

  return {
    since: since.toISOString().slice(0, 10),
    until: until.toISOString().slice(0, 10),
  };
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const url = new URL(request.url);
  const berlinHour = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    hourCycle: "h23",
  }).format(new Date());

  if (url.searchParams.get("force") !== "1" && berlinHour !== "09") {
    return Response.json({ ok: true, skipped: true, reason: "Not 09:00 in Berlin." });
  }

  const accessToken = process.env.VERCEL_ACCESS_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!accessToken || !projectId || !gmailUser || !gmailAppPassword) {
    return Response.json({ error: "Analytics report is not configured." }, { status: 500 });
  }

  const { since, until } = getPreviousWeek();
  const params = new URLSearchParams({
    projectId,
    since,
    until,
    by: "country",
    limit: "20",
  });

  const analyticsResponse = await fetch(
    `https://api.vercel.com/v1/query/web-analytics/visits/aggregate?${params}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    }
  );

  if (!analyticsResponse.ok) {
    const details = await analyticsResponse.text();
    console.error("Vercel Analytics API error:", analyticsResponse.status, details);
    return Response.json({ error: "Failed to retrieve analytics." }, { status: 502 });
  }

  const { data } = (await analyticsResponse.json()) as AnalyticsResponse;
  const totals = data.reduce(
    (result, item) => ({
      pageviews: result.pageviews + item.pageviews,
      visitors: result.visitors + item.visitors,
    }),
    { pageviews: 0, visitors: 0 }
  );
  const countryRows = data
    .map(
      ({ country = "Unknown", visitors, pageviews }) =>
        `<tr><td>${country}</td><td>${visitors}</td><td>${pageviews}</td></tr>`
    )
    .join("");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  await transporter.sendMail({
    from: `"Portfolio Analytics" <${gmailUser}>`,
    to: gmailUser,
    subject: `Portfolio analytics: ${since} to ${until}`,
    text: [
      `Portfolio analytics for ${since} to ${until}`,
      `Visitors: ${totals.visitors}`,
      `Page views: ${totals.pageviews}`,
      "",
      ...data.map(
        ({ country = "Unknown", visitors, pageviews }) =>
          `${country}: ${visitors} visitors, ${pageviews} page views`
      ),
    ].join("\n"),
    html: `
      <h2>Portfolio analytics</h2>
      <p>${since} to ${until}</p>
      <p><strong>Visitors:</strong> ${totals.visitors}<br />
      <strong>Page views:</strong> ${totals.pageviews}</p>
      <h3>Top countries</h3>
      <table cellpadding="8" cellspacing="0" border="1">
        <thead><tr><th>Country</th><th>Visitors</th><th>Page views</th></tr></thead>
        <tbody>${countryRows || "<tr><td colspan=\"3\">No visits this week</td></tr>"}</tbody>
      </table>
    `,
  });

  return Response.json({ ok: true, since, until, ...totals });
}
