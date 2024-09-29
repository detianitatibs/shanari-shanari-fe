import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
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
  title: "どらんぴあ",
  description:
    "ブログを書いたりプログラミングを利用したポケモンツールの公開をします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 広告要素
  const slot = process.env.AD_SLOT || "";
  // GA
  const ga_id = process.env.GA_ID || "";

  return (
    <html lang="ja">
      {/* GTM(Google Tag Manager)の設定を追加 */}
      <GoogleTagManager gtmId={ga_id} />
      <AdScript></AdScript>
      <body className={`${inter.variable} ${noto.variable}`}>
        <Header></Header>
        {/* モバイルでないときはレイアウトを5分割して1:3:1の比率で利用する */}
        <div className="md:flex flex-row">
          {/* Ad左 */}
          <div className="basis-1/5">
            <AdSense slot={slot}></AdSense>
          </div>
          {/* メインコンテンツ */}
          <div className="basis-3/5">{children}</div>
          {/* Ad右 */}
          <div className="basis-1/5">
            <AdSense slot={slot}></AdSense>
          </div>
        </div>
      </body>
    </html>
  );
}
