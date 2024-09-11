import type { Metadata } from "next";
// Google Font
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { AdScript } from "@/components/atoms/ad-sense/AdScript";
import Header from "@/components/organisms/header/Header";
import AdSense from "@/components/atoms/ad-sense/AdSense";

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
  // 広告要素
  const slot = process.env.AD_SLOT || "";

  return (
    <html lang="ja">
      <AdScript></AdScript>
      <body className={`${inter.variable} ${noto.variable}`}>
        <Header></Header>
        {/* レイアウトを5分割して1:3:1の比率で利用する */}
        <div className="grid grid-cols-5 gap-4">
          {/* Ad左 */}
          <div className="...">
            <AdSense slot={slot}></AdSense>
          </div>
          {/* メインコンテンツ */}
          <div className="col-span-3">{children}</div>
          {/* Ad右 */}
          <div className="...">
            <AdSense slot={slot}></AdSense>
          </div>
        </div>
      </body>
    </html>
  );
}
