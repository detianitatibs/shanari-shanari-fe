import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  children: React.ReactNode;
  className: string;
}

const CodeBlock: React.FC<Props> = ({ children, className }: Props) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      style={vscDarkPlus}
    />
  ) : (
    <code className={className}>{children}</code>
  );
};

export default CodeBlock;
