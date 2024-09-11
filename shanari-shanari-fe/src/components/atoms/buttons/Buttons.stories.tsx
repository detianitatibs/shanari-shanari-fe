import type { Meta } from "@storybook/react";
import Buttons from "./Buttons";

const meta: Meta<typeof Buttons> = {
  title: "Atoms/ボタン/ボタン",
  component: Buttons,
};

export default meta;

export const Default = () => <Buttons text="デフォルト"></Buttons>;
