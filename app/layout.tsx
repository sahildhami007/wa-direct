import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WhatsApp Direct - Send Messages Without Saving Contacts",
  description: "Send WhatsApp messages without adding contacts to your phone. No login required, privacy-friendly service.",
  keywords: "whatsapp, direct message, send whatsapp without contact, whatsapp web, message without saving contact"
};

const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark:bg-gray-900">
      <head>
        <link rel="icon" href="/whatsapp-logo.svg" type="image/svg+xml" />
        {/* Google AdSense */}
        {adsenseClientId ? (
          <Script
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900`}
      >
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
