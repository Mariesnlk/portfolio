import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavbarEmpty from "./NavbarEmpty";
import FooterEmpty from "./FooterEmpty";

export default function ContainerBlockEmpty({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Mariia Synelnyk - ...",
    description: `I am a full stack blockchain developer, passionate about building a decentralized and potentially more inclusive future.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mariia Synelnyk" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <NavbarEmpty />
        <div>{children}</div>
        <FooterEmpty />
      </main>
    </div>
  );
}
