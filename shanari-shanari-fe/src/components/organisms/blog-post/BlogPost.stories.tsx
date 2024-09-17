import type { Meta } from "@storybook/react";
import BlogPost from "./BlogPost";
import BlogPostProps from "@/types/BlogPostProps";

const meta: Meta<typeof BlogPost> = {
  title: "Organisms/ブログコンテンツ/ブログ本文",
  component: BlogPost,
};

export default meta;

const markdown = `
---
title: "pytestで実行するときにloggingの出力も表示するときのオプション"
description: --log-cli-level=<Logレベル>をつける
date: 2022-04-23T08:58:50Z
image:
math:
license: CC @detain_itatibs
slug: "20220423_techs_01"
hidden: false
draft: false
categories:
  - tech
tags:
  - python
  - pytest
---

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

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done

## Code

\`\`\`python
print(ftest)
\`\`\`

`;

const props: BlogPostProps = {
  subject_name: "ブログタイトル",
  str_date: "2022-04-23",
  category: "tech",
  tags: ["python", "pytest"],
  markdown: markdown,
};

export const Default = () => <BlogPost {...props}></BlogPost>;
