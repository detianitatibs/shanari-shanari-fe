import type { Meta } from "@storybook/react";
import Blog from "./Blog";
import BlogPostProps from "@/types/BlogPostProps";

const meta: Meta<typeof Blog> = {
  title: "Templates/ブログ/ブログ",
  component: Blog,
};

export default meta;
const props: BlogPostProps = {
  subject_name: "ブログタイトル",
  str_date: "2022-04-23",
  category: "tech",
  tags: ["python", "pytest"],
  markdown: `
# GFM

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done

## Code
\`\`\`python
print(ftest)
\`\`\`

`,
};
export const Default = () => <Blog {...props}></Blog>;
