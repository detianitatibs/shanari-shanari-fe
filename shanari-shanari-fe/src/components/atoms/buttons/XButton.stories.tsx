import type { Meta } from "@storybook/react";
import XButton from "./XButton";
import SNSShareProps from "@/types/SNSShareProps";

const meta: Meta<typeof XButton> = {
  title: "Atoms/ボタン/X共有ボタン",
  component: XButton,
};

export default meta;

const sns_props: SNSShareProps = {
  title: "テキスト です",
  url: "",
  tags: ["arg1", "arg2"],
};

export const Default = () => <XButton {...sns_props}></XButton>;
