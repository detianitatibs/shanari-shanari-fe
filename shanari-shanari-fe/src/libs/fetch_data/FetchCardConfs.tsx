import fs from "fs/promises";
import path from "path";

import glob from "fast-glob";
import yaml from "js-yaml";

import logger from "../util/logger";
import ContentConfDetail from "@/types/ContentConfDetail";
import ContentsListProps from "@/types/ContentsListProps";
import CardProps from "@/types/CardProps";

interface CardConf {
  CardConf: CardProps;
}

const FetchCardConfs = async (
  directory_path: string,
  array_contents: ContentConfDetail[],
  topcut_number: number = 6
): Promise<ContentsListProps[]> => {
  const contents_list: ContentsListProps[] = [];

  // priority順で配列を入れ替える
  array_contents.sort((a, b) => a.priority - b.priority);
  logger.debug(array_contents);

  // コンテンツごとに実施
  const contents_path = path.join(directory_path, "contents");
  for (const content of array_contents) {
    // ディレクトリ一覧を取得する
    const card_conf_full_paths = await glob.async([
      path.join(contents_path, content.abbreviation_name, "**/CardConf.yaml"),
    ]);
    logger.debug("Globed directories:" + card_conf_full_paths);

    // ディレクトリ一覧に抽出した日付と通し番号の情報を付与する
    const translated_card_conf_full_paths = card_conf_full_paths.map((path) => {
      // 日付の箇所を抽出する
      const str_date = path.split("/").slice(-5, -2).join("-");
      // 通し番号を抽出する
      const str_serial_number = path.split("/").slice(-2, -1);
      return {
        card_conf_full_path: path,
        date: new Date(str_date),
        serial_number: Number(str_serial_number),
      };
    });
    logger.debug("Translated Card Conf Full Paths");
    logger.debug({ msg: translated_card_conf_full_paths });

    // 日付順に並び替える
    translated_card_conf_full_paths.sort((a, b) => {
      if (a.date.getTime() === b.date.getTime()) {
        return b.serial_number - a.serial_number;
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    });
    logger.debug("Sorted Card Conf Full Paths:");
    logger.debug({ msg: translated_card_conf_full_paths });

    // 上位topcut_number分取得
    const topcut_card_conf_full_paths = translated_card_conf_full_paths.slice(
      0,
      topcut_number
    );
    logger.debug("TopCut Card Conf Full Paths:");
    logger.debug({ msg: topcut_card_conf_full_paths });

    // TopCutした要素とtopcut_numberが同じ値の場合はis_button要素を有効にする
    const is_button = topcut_card_conf_full_paths.length === topcut_number;

    // CardConf.yamlを読み込む
    const array_card: CardProps[] = [];
    for (const card_conf_full_path of topcut_card_conf_full_paths) {
      const obj_card = yaml.load(
        await fs.readFile(card_conf_full_path.card_conf_full_path, "utf-8")
      ) as CardConf;
      // image_pathに指定がない場合はデフォルトの画像(icon.png)を指定する
      array_card.push({
        image_path:
          obj_card.CardConf.image_path ?? path.join(directory_path, "icon.png"),
        title: obj_card.CardConf.title,
        category: obj_card.CardConf.category,
        date: new Date(obj_card.CardConf.date),
      });
    }
    contents_list.push({
      subject_name: content.subject_name,
      abbreviation_name: content.abbreviation_name,
      cards: array_card,
      is_button: is_button,
    });
  }
  return contents_list;
};

export default FetchCardConfs;
