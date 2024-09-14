import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";

import logger from "@/libs/util/logger";
import ContentConfDetail from "@/types/ContentConfDetail";
import ContentConf from "@/types/ContentConf";

const FetchContentConfs = async (
  directory_path: string
): Promise<ContentConfDetail[]> => {
  logger.debug(`directory_path: ${directory_path}`);

  // コンテンツのパスを取得する
  const contents_path = path.join(directory_path, "contents");
  const array_contents = await fs.readdir(contents_path);
  logger.debug(`Got Contents: ${array_contents}`);

  // コンテンツごとにContentConf.yamlを読み込む
  const array_obj_contents: ContentConfDetail[] = [];

  // ループの中でawaitを使いたいので、forEachではなくforを使う
  for (const content of array_contents) {
    // ContentConf.yamlまでのパスを作る
    const content_conf_path = path.join(
      contents_path,
      content,
      "ContentConf.yaml"
    );

    // yamlファイルの読み込み
    const obj_content = yaml.load(
      await fs.readFile(content_conf_path, "utf-8")
    ) as ContentConf;
    array_obj_contents.push(obj_content.ContentConf);
  }
  logger.debug("Loaded yaml file of ContentConf");
  array_obj_contents.forEach((obj_content) => {
    logger.debug({ msg: obj_content });
  });

  return array_obj_contents;
};

export default FetchContentConfs;
