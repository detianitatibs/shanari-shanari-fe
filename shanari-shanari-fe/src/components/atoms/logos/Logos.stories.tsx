import type { Meta } from "@storybook/react";
import Logos from "./Logos";

const meta: Meta<typeof Logos> = {
  title: "Atoms/ロゴ/ロゴ",
  component: Logos,
};

// Dummy Function
const dummyFunction = () => console.log("Dummy");

export default meta;

export const Main = () => (
  <Logos pattern="main" onClick={dummyFunction}></Logos>
);
export const Header = () => (
  <Logos pattern="header" onClick={dummyFunction}></Logos>
);
