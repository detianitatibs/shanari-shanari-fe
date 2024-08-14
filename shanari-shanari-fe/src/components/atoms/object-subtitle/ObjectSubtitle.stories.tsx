import type { Meta, StoryObj } from "@storybook/react";
import ObjectSubtitle from "./ObjectSubtitle";

const meta: Meta<typeof ObjectSubtitle> = {
  title: "Atoms/オブジェクト/サブタイトル",
  component: ObjectSubtitle,
};

export default meta;

export const Main = () => <ObjectSubtitle color="main"></ObjectSubtitle>;
export const Sub = () => <ObjectSubtitle color="sub"></ObjectSubtitle>;
export const Accent = () => <ObjectSubtitle color="accent"></ObjectSubtitle>;
export const Other = () => <ObjectSubtitle color="other"></ObjectSubtitle>;
