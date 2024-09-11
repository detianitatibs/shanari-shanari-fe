import type { Meta } from "@storybook/react";
import ContentsListDetails from "./ContentsListDetails";

const meta: Meta<typeof ContentsListDetails> = {
  title: "Organisms/コンテンツリスト/個別一覧ページ",
  component: ContentsListDetails,
};

export default meta;

const array_card_tech = [];
const array_card_blog = [];
const card = {
  image_path: "/icon.png",
  title: "これはブログのタイトルです",
  category: "blog",
  date: new Date(2024, 10, 10),
};
// 複数カードを用意する
for (let i = 0; i < 10; i++) {
  array_card_tech.push(card);
}
for (let i = 0; i < 20; i++) {
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

export const Tech = () => (
  <ContentsListDetails {...obj_tech}></ContentsListDetails>
);
export const Blog = () => (
  <ContentsListDetails {...obj_blog}></ContentsListDetails>
);
