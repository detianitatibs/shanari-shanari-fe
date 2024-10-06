import Top from "@/components/templates/top/Top";
import FetchContentConfs from "@/libs/fetch_data/FetchContentConfs";
import FetchCardConfs from "@/libs/fetch_data/FetchCardConfs";
import logger from "@/libs/util/logger";
import { headers } from "next/headers";

const Page = async () => {
  // 調査用ログ
  const platform = headers().get("sec-ch-ua-platform");
  console.log(`sec-ch-ua-platform: ${platform}`);

  // コンテンツ一覧を取得
  const array_obj_contents = await FetchContentConfs("public/");
  logger.info("Got array_obj_contents");
  logger.info({ msg: array_obj_contents });

  // カード一覧を取得
  const array_cards = await FetchCardConfs(
    "public/",
    array_obj_contents,
    Number(process.env.TOPCUT_TOP)
  );

  return (
    <main>
      <Top contents={array_cards}></Top>
    </main>
  );
};

// SSRを強制する
export const dynamic = "force-dynamic";
export default Page;
