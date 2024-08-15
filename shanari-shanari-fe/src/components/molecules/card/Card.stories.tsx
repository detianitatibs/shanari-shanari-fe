import type { Meta } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Molecules/カード/カード",
  component: Card,
};

export default meta;

const obj_card_blog = {
  image_path: "/icon.png",
  title: "これはブログのタイトルです",
  category: "blog",
  date: new Date(2024, 10, 10),
};
const obj_card_tech = {
  image_path: "/icon.png",
  title: "これは技術に関するタイトルです",
  category: "tech",
  date: new Date(2024, 10, 10),
};
const obj_card_game = {
  image_path: "/icon.png",
  title: "これはゲームに関するタイトルです",
  category: "game",
  date: new Date(2024, 10, 10),
};
const obj_card_sport = {
  image_path: "/icon.png",
  title:
    "これはスポーツに関するたいとるです。長く書きすぎると他のアイコンとかぶるので制限が必要です。",
  category: "sport",
  date: new Date(2024, 10, 10),
};
export const Blog = () => <Card {...obj_card_blog}></Card>;
export const Tech = () => <Card {...obj_card_tech}></Card>;
export const Game = () => <Card {...obj_card_game}></Card>;
export const Sport = () => <Card {...obj_card_sport}></Card>;
