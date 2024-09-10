import Logos from "@/components/atoms/logos/Logos";
import ContentsList from "@/components/organisms/contents-list/ContentsList";
import AdSense from "@/components/atoms/ad-sense/AdSense";

interface Card {
  image_path: string;
  title: string;
  category: string;
  date: Date;
}

interface ContentsList {
  subject_name: string;
  cards: Card[];
}

interface Props {
  obj_tech: ContentsList;
  obj_blog: ContentsList;
}

const Top = ({ obj_tech, obj_blog }: Props) => {
  // タイトル要素
  const obj_title = {
    pattern: "main",
  };

  // コンテンツリスト - Technologies ここにロジック用意する予定

  return (
    <>
      <Logos {...obj_title}></Logos>
      <ContentsList {...obj_tech}></ContentsList>
      <ContentsList {...obj_blog}></ContentsList>
    </>
  );
};

export default Top;
