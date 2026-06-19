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

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} | Home Care & Behavioral Support`,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    "Compassionate home care and behavioral support for families across every county. Personal care, companion care, respite, 24-hour care, and behavioral support delivered with warmth and dignity.",
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
