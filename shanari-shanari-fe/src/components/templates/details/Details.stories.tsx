import type { Meta } from "@storybook/react";
import Details from "./Details";
import DetailProps from "@/types/DetailProps";

const meta: Meta<typeof Details> = {
  title: "Templates/個別詳細ページ/個別詳細ページ",
  component: Details,
};

export default meta;

// テスト用に一旦準備
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
const detail_tech: DetailProps = {
  content: obj_tech,
  current_page: 1,
  total_pages: 1,
  per_page: 10,
};

const obj_blog = {
  subject_name: "Blog",
  abbreviation_name: "blog",
  cards: array_card_blog,
  is_button: true,
};
const detail_blog: DetailProps = {
  content: obj_blog,
  current_page: 2,
  total_pages: 10,
  per_page: 10,
};

export const Tech = () => <Details {...detail_tech}></Details>;
export const Blog = () => <Details {...detail_blog}></Details>;
