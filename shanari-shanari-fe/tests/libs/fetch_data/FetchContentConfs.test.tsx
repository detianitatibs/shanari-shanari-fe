import fs from "fs";
import path from "path";
import os from "os";

import FetchContentConfs from "@/libs/fetch_data/FetchContentConfs";
import ContentConfDetail from "@/types/ContentConfDetail";

describe("FetchContentConfsの単体テスト", () => {
  let directory_path: string;

  beforeEach(() => {
    // 一時ディレクトリのパスを作成
    directory_path = fs.mkdtempSync(path.join(os.tmpdir(), "public-"));
  });

  afterEach(() => {
    // テストが終わったら一時ディレクトリを削除
    fs.rmSync(directory_path, { recursive: true });
  });

  test("正常系テスト01", async () => {
    // Case: Prepared test values
    // For Tech File
    fs.mkdirSync(path.join(directory_path, "contents/tech"), {
      recursive: true,
    });
    fs.copyFileSync(
      path.join(__dirname, "ContentConfTech.yaml"),
      path.join(directory_path + "/contents/tech/ContentConf.yaml")
    );

    // For Blog
    fs.mkdirSync(path.join(directory_path, "contents/blog"), {
      recursive: true,
    });
    fs.copyFileSync(
      path.join(__dirname, "ContentConfBlog.yaml"),
      path.join(directory_path + "/contents/blog/ContentConf.yaml")
    );

    const expected: ContentConfDetail[] = [
      { subject_name: "Blog", abbreviation_name: "blog", priority: 5 },
      { subject_name: "Technology", abbreviation_name: "tech", priority: 1 },
    ];

    // When: Execute function
    const res = await FetchContentConfs(directory_path);

    // Then: Confirm to be successed
    // 長さのテスト
    expect(res).toHaveLength(expected.length);

    // 各要素のテスト
    res.forEach((item, index) => {
      expect(item).toMatchObject(expected[index]);
    });
  });
});
