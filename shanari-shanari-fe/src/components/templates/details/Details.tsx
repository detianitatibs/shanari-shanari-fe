import ContentsListDetails from "@/components/organisms/contents-list-details/ContentsListDetails";

import DetailProps from "@/types/DetailProps";

const Details = ({ ...props }: DetailProps) => {
  return <ContentsListDetails {...props}></ContentsListDetails>;
};

export default Details;
