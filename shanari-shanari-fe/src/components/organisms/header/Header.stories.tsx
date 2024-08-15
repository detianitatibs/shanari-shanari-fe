import type { Meta } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Organisms/ヘッダー/ヘッダー",
  component: Header,
};

export default meta;

export const Default = () => <Header></Header>;
