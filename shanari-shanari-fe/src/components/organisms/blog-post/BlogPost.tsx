import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

import Subject from "@/components/molecules/subject/Subject";
import SubjectProps from "@/types/SubjectProps";
import BlogPostProps from "@/types/BlogPostProps";
import CodeBlock from "./CodeBlock";
import { TwitterIcon, TwitterShareButton } from "next-share";

const BlogPost = ({ ...props }: BlogPostProps) => {
  const subject: SubjectProps = {
    object_color: "accent",
    subject_name: props.subject_name,
  };
  const date = new Date(props.str_date).toLocaleDateString("ja-JP");
  const category = props.category;
  const tags = props.tags;

  const toc_options = {
    headings: ["h1", "h2"],
    cssClasses: {
      toc: "toc",
    },
  };

  return (
    <div className="p-4">
      <Subject {...subject}></Subject>
      <div className="bg-zinc-100 p-2 mt-6 mb-6 rounded-lg flex justify-end">
        <div className="flex-grow">
          <div className="text-size5 text-gray-500">{`Category: ${category}`}</div>
          <div className="text-size5 text-gray-500">{`Tags(仮): ${tags}`}</div>
        </div>
        <div>
          <div className="text-size5 text-gray-500">{`Date: ${date}`}</div>
        </div>
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeToc, toc_options]]}
        remarkPlugins={[remarkGfm]}
        className="markdown"
        components={{ code: CodeBlock }}
      >
        {props.markdown}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPost;
