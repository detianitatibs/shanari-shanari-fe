import type { Meta } from "@storybook/react";
import ContentsList from "./ContentsList";

const meta: Meta<typeof ContentsList> = {
  title: "Organisms/コンテンツリスト/トップページ",
  component: ContentsList,
};

export default meta;

const array_card_tech = [];
const array_card_blog = [];
const card = {
  image_path: "/icon.png",
  title: "これはブログのタイトルです",
  category: "blog",
  date: new Date(2024, 10, 10),
  url: "",
};

// 複数カードを用意する (8より少ないパターン)
for (let i = 0; i < 4; i++) {
  array_card_tech.push(card);
}

// 複数カードを用意する (8より多いパターン)
for (let i = 0; i < 8; i++) {
  array_card_blog.push(card);
}

const obj_tech = {
  subject_name: "Technology",
  abbreviation_name: "tech",
  cards: array_card_tech,
  is_button: false,
};
const obj_blog = {
  subject_name: "Blog",
  abbreviation_name: "blog",
  cards: array_card_blog,
  is_button: true,
};

export const Tech = () => <ContentsList {...obj_tech}></ContentsList>;
export const Blog = () => <ContentsList {...obj_blog}></ContentsList>;
