import Logos from "@/components/atoms/logos/Logos";
import ContentsList from "@/components/organisms/contents-list/ContentsList";

import TopProps from "@/types/TopProps";

const Top = ({ obj_tech, obj_blog }: TopProps) => {
  // タイトル要素
  const obj_title = {
    pattern: "main",
  };

  // コンテンツリスト - Technology ここにロジック用意する予定

  return (
    <>
      <Logos {...obj_title}></Logos>
      <ContentsList {...obj_tech}></ContentsList>
      <ContentsList {...obj_blog}></ContentsList>
    </>
  );
};

export default Top;
