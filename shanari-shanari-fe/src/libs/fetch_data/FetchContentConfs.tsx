import fs from "fs";
import path from "path";
import yaml from "js-yaml";

import logger from "@/libs/util/logger";
import ContentConfDetail from "@/types/ContentConfDetail";
import ContentConf from "@/types/ContentConf";

const FetchContentConfs = (directory_path: string): ContentConfDetail[] => {
  logger.info(`directory_path: ${directory_path}`);

  // コンテンツのパスを取得する
  const contents_path = path.join(directory_path, "contents");
  const array_contents = fs.readdirSync(contents_path);
  logger.info(`Got Contents: ${array_contents}`);

  // コンテンツごとにContentConf.yamlを読み込む
  const array_obj_contents: ContentConfDetail[] = [];
  array_contents.forEach((content) => {
    // ContentConf.yamlまでのパスを作る
    const content_conf_path = path.join(
      contents_path,
      content,
      "ContentConf.yaml"
    );

    // yamlファイルの読み込み
    const obj_content = yaml.load(
      fs.readFileSync(content_conf_path, "utf-8")
    ) as ContentConf;
    array_obj_contents.push(obj_content.ContentConf);
  });
  logger.info("Loaded yaml file of ContentConf");
  array_obj_contents.forEach((obj_content) => {
    logger.info(obj_content);
  });

  return array_obj_contents;
};

export default FetchContentConfs;
