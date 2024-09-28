import type { Meta } from "@storybook/react";
import Icons from "./Icons";

const meta: Meta<typeof Icons> = {
  title: "Atoms/アイコン/Iconify",
  component: Icons,
};

export default meta;

export const Blog = () => <Icons icon_key="blog"></Icons>;
export const BlogSelectedSize = () => (
  <Icons icon_key="blog" additionalClassName="text-size1"></Icons>
);
export const Tech = () => <Icons icon_key="tech"></Icons>;
export const Game = () => <Icons icon_key="game"></Icons>;
export const Sport = () => <Icons icon_key="sport"></Icons>;
export const Twitter = () => (
  <Icons icon_key="twitter" additionalClassName="text-size1"></Icons>
);
