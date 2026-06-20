import type { Metadata } from "next";
import { Newsreader, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import TawkTo from "@/components/TawkTo";
import { siteConfig } from "@/lib/siteConfig";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const defaultTitle = `${siteConfig.brand} | Home Care & Behavioral Support`;
const defaultDescription =
  "Compassionate home care and behavioral support for families across every county. Personal care, companion care, respite, 24-hour care, and behavioral support delivered with warmth and dignity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.brand}`,
  },
  description: defaultDescription,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    siteName: siteConfig.brand,
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TawkTo />
      </body>
    </html>
  );
}
