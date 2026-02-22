import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Provider from "@/components/Providers/Provider";
import Navbar from "@/components/Home/Navbar/Navbar";
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synelnyk Portfolio",
  description: "Portfolio website of Mariia Synelnyk using next js 16",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
