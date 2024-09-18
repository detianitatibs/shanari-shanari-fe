import Top from "@/components/templates/top/Top";
import FetchContentConfs from "@/libs/fetch_data/FetchContentConfs";
import FetchCardConfs from "@/libs/fetch_data/FetchCardConfs";
import logger from "@/libs/util/logger";

const Page = async () => {
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
