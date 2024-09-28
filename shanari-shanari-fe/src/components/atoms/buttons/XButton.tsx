import Link from "next/link";
import Icons from "../icons/Icons";

import SNSShareProps from "@/types/SNSShareProps";

const XButton = ({ ...props }: SNSShareProps) => {
  const encodedTitle = encodeURIComponent(props.title);

  return (
    <>
      <Link
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${props.url}&hashtags=${props.tags}`}
        data-show-count="false"
        className="flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons icon_key="twitter" additionalClassName="text-size1" />
      </Link>
    </>
  );
};

export default XButton;
