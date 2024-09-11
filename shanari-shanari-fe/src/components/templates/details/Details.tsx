import ContentsListDetails from "@/components/organisms/contents-list-details/ContentsListDetails";
import Card from "@/components/molecules/card/Card";

interface Card {
  image_path: string;
  title: string;
  category: string;
  date: Date;
}

interface Props {
  subject_name: string;
  abbreviation_name: string;
  cards: Card[];
  is_button: boolean;
}

const Details = ({ ...props }: Props) => {
  return <ContentsListDetails {...props}></ContentsListDetails>;
};

export default Details;
