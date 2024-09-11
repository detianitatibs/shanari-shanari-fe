import type { Meta } from "@storybook/react";
import Top from "./Top";

const meta: Meta<typeof Top> = {
  title: "Templates/トップページ/トップページ",
  component: Top,
};

export default meta;

// テスト用に一旦準備
const array_card = [];
const card = {
  image_path: "/icon.png",
  title: "これはブログのタイトルです",
  category: "blog",
  date: new Date(2024, 10, 10),
};
// 複数カードを用意する
for (let i = 0; i < 20; i++) {
  array_card.push(card);
}

const obj_tech = {
  subject_name: "Technology",
  abbreviation_name: "tech",
  cards: array_card,
  is_button: false,
};
const obj_blog = {
  subject_name: "Blog",
  abbreviation_name: "blog",
  cards: array_card,
  is_button: true,
};

export const Default = () => (
  <Top obj_tech={obj_tech} obj_blog={obj_blog}></Top>
);
