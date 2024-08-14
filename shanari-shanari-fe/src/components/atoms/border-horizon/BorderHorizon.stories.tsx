import type { Meta } from "@storybook/react";
import BorderHorizon from "./BorderHorizon";

const meta: Meta<typeof BorderHorizon> = {
  title: "Atoms/ボーダー/水平",
  component: BorderHorizon,
};

export default meta;

export const Default = () => <BorderHorizon></BorderHorizon>;
