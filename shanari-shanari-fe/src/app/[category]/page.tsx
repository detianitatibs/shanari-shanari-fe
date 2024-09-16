import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";

import logger from "@/libs/util/logger";
import Details from "@/components/templates/details/Details";
import DetailProps from "@/types/DetailProps";
import ContentConf from "@/types/ContentConf";
import FetchCardConfs from "@/libs/fetch_data/FetchCardConfs";

interface Props {
  params: { category: string };
  searchParams: { page: string };
}

const Page = async ({ ...props }: Props) => {
  // ContentConfを読み込む
  const content_conf = yaml.load(
    await fs.readFile(
      path.join("public/contents", props.params.category, "ContentConf.yaml"),
      "utf-8"
    )
  ) as ContentConf;

  // カード一覧を取得
  const array_cards = await FetchCardConfs(
    "public/",
    [content_conf.ContentConf],
    Number(process.env.TOPCUT_DETAIL)
  );

  // ページネーションの情報を取得する
  const current_page = Number(props.searchParams.page ?? "1");
  const per_page = Number(process.env.TOPCUT_DETAIL ?? "10");
  const total_cards = array_cards[0].cards.length;
  const total_pages = Math.ceil(total_cards / per_page);

  const content_list: DetailProps = {
    content: array_cards[0],
    current_page: current_page,
    total_pages: total_pages,
    per_page: per_page,
  };
  logger.info(content_list);

  if (["tech", "blog"].includes(props.params.category)) {
    return <Details {...content_list}></Details>;
  } else {
    return <div>Not Contents.</div>;
  }
};

export default Page;
