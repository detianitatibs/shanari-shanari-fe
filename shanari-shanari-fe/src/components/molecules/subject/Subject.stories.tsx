import type { Meta } from "@storybook/react";
import Subject from "./Subject";

const meta: Meta<typeof Subject> = {
  title: "Molecules/サブジェクト/サブジェクト",
  component: Subject,
};

export default meta;

const obj_tech = {
  object_color: "accent",
  subject_name: "Technologies",
};
const obj_blog = {
  object_color: "accent",
  subject_name: "Blog",
};

export const Tech = () => <Subject {...obj_tech}></Subject>;
export const Blog = () => <Subject {...obj_blog}></Subject>;
