import ContentsListProps from "./ContentsListProps";

interface DetailProps {
  content: ContentsListProps;
  current_page: number;
  total_pages: number;
  per_page: number;
}

export default DetailProps;
