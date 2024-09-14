import fs from "fs";
import path from "path";
import os from "os";

import FetchCardConfs from "@/libs/fetch_data/FetchCardConfs";
import ContentsListProps from "@/types/ContentsListProps";
import CardProps from "@/types/CardProps";

describe("FetchCardConfsの単体テスト", () => {
  let directory_path: string;

  beforeEach(() => {
    // 一時ディレクトリのパスを作成
    directory_path = fs.mkdtempSync(path.join(os.tmpdir(), "public-"));

    // CardConf.yamlを配置する
    const array_content_path = [
      "contents/tech/2024/10/10/1",
      "contents/blog/2020/05/01/1",
      "contents/blog/2020/05/01/2",
      "contents/blog/2024/10/10/1",
      "contents/blog/2024/10/08/1",
      "contents/blog/2023/05/08/1",
    ];
    array_content_path.forEach((content_path) => {
      fs.mkdirSync(path.join(directory_path, content_path), {
        recursive: true,
      });
      fs.copyFileSync(
        path.join(__dirname, "CardConf.yaml"),
        path.join(directory_path, content_path, "CardConf.yaml")
      );
    });
  });

  afterEach(() => {
    // テストが終わったら一時ディレクトリを削除
    fs.rmSync(directory_path, { recursive: true });
  });

  test("正常系テスト01", async () => {
    // Case: Prepare test values
    const input = [
      { subject_name: "Technology", abbreviation_name: "tech", priority: 1 },
      { subject_name: "Blog", abbreviation_name: "blog", priority: 5 },
    ];
    const card: CardProps = {
      image_path: "/icon.png",
      title: "カードテスト",
      category: "tech",
      date: new Date("2000-10-01"),
    };
    const expected: ContentsListProps[] = [
      {
        subject_name: "Technology",
        abbreviation_name: "tech",
        cards: [card],
        is_button: false,
      },
      {
        subject_name: "Blog",
        abbreviation_name: "blog",
        cards: [card, card, card, card],
        is_button: true,
      },
    ];

    // When: Execute function
    const res = await FetchCardConfs(directory_path, input, 4);

    // Then: Confirm to be successed
    // 長さのテスト
    expect(res).toHaveLength(expected.length);
    // 各要素のテスト
    res.forEach((item, index) => {
      expect(item).toMatchObject(expected[index]);
    });
  });
});
