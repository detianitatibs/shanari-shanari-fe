import { getServerSideSitemap } from "next-sitemap";

import FetchContentConfs from "@/libs/fetch_data/FetchContentConfs";
import FetchCardConfs from "@/libs/fetch_data/FetchCardConfs";

export async function GET(request: Request) {
  // カードを取得する
  const array_obj_contents = await FetchContentConfs("public/");
  const array_cards = await FetchCardConfs(
    "public/",
    array_obj_contents,
    Number(process.env.TOPCUT_TOP)
  );

  // URLを指定
  const sitemap = [
    {
      loc: "https://" + process.env.DOMAIN,
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];
  // カードのURLを取得する
  array_cards.map((content) => {
    return content.cards.map((card) => {
      sitemap.push({
        loc: "https://" + process.env.DOMAIN + card.url,
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      });
    });
  });

  return getServerSideSitemap(sitemap);
}
