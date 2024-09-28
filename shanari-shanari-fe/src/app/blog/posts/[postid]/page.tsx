import fs from "fs/promises";

import Blog from "@/components/templates/blog/Blog";
import BlogPostProps from "@/types/BlogPostProps";
import matter from "gray-matter";
import logger from "@/libs/util/logger";

interface Props {
  params: { postid: string };
}

const Page = async ({ ...props }: Props) => {
  // パラメータがあっているかどうかを判別する
  const regex = /^\d{4}-\d{2}-\d{2}-\d$/;
  const is_pattern = regex.test(props.params.postid);
  if (!is_pattern) {
    return <div>Not Found Content.</div>;
  }

  // パラメータから各値を取得する
  const array_postid = props.params.postid.split("-");
  const domain = process.env.DOMAIN ?? "localhost";
  const url = `https://${domain}/blog/posts/${props.params.postid}`;

  // Markdownファイルを読み込む
  const path_markdown = `public/contents/blog/${array_postid[0]}/${array_postid[1]}/${array_postid[2]}/${array_postid[3]}/Article.md`;
  let file_markdown;
  try {
    file_markdown = await fs.readFile(path_markdown, "utf-8");
  } catch (e) {
    logger.error(`Not Found contents of blog: ${path_markdown}`);
    return <div>Not Found Article File.</div>;
  }

  const markdown = matter(file_markdown);

  const blog_post: BlogPostProps = {
    subject_name: markdown.data.title,
    str_date: markdown.data.date,
    category: markdown.data.category,
    tags: markdown.data.tags,
    url: url,
    markdown: markdown.content,
  };

  return <Blog {...blog_post}></Blog>;
};

export default Page;
