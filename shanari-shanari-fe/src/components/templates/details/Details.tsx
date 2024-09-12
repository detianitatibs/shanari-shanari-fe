import ContentsListDetails from "@/components/organisms/contents-list-details/ContentsListDetails";

import ContentsListProps from "@/types/ContentsListProps";

const Details = ({ ...props }: ContentsListProps) => {
  return <ContentsListDetails {...props}></ContentsListDetails>;
};

export default Details;
