import type { Meta } from "@storybook/react";
import Pagenation from "./Pagenation";
import PagenationProps from "@/types/PagenationProps";

const meta: Meta<typeof Pagenation> = {
  title: "Molecules/ページネーション/ページネーション",
  component: Pagenation,
};

export default meta;

const pagenation: PagenationProps = {
  current_page: 2,
  total_pages: 10,
  category: "blog",
};
export const Default = () => <Pagenation {...pagenation}></Pagenation>;
