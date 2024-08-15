import type { Meta } from "@storybook/react";
import ContentsList from "./ContentsList";

const meta: Meta<typeof ContentsList> = {
  title: "Organisms/コンテンツリスト/コンテンツリスト",
  component: ContentsList,
};

export default meta;

const array_card = [];
const card = {
  image_path: "/icon.png",
  title: "これはブログのタイトルです",
  category: "blog",
  date: new Date(2024, 10, 10),
};
// 複数カードを用意する
for (let i = 0; i < 5; i++) {
  array_card.push(card);
}

const obj_blog = {
  subject_name: "Blog",
  cards: array_card,
};
const obj_tech = {
  subject_name: "Technologies",
  cards: array_card,
};
export const Blog = () => <ContentsList {...obj_blog}></ContentsList>;
export const Tech = () => <ContentsList {...obj_tech}></ContentsList>;
