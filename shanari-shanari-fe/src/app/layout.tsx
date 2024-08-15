import type { Metadata } from "next";
// Google Font
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { AdScript } from "@/components/atoms/ad-sense/AdScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const noto = Noto_Sans_JP({
  preload: false,
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "DORAMPIA",
  description: "This is a page that provides blog and tools for Pokémon VGC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <AdScript></AdScript>
      <body className={`${inter.variable} ${noto.variable}`}>{children}</body>
    </html>
  );
}
