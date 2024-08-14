import type { Meta } from "@storybook/react";
import Logos from "./Logos";

const meta: Meta<typeof Logos> = {
  title: "Atoms/ロゴ/ロゴ",
  component: Logos,
};

export default meta;

// Dummy Function
const dummyFunction = () => console.log("Dummy");

// Test Object
const obj_main = {
  pattern: "main",
  onClick: dummyFunction,
};
const obj_header = {
  pattern: "header",
  onClick: dummyFunction,
};

export const Main = () => <Logos {...obj_main}></Logos>;
export const Header = () => <Logos {...obj_header}></Logos>;
