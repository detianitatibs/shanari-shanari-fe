import Logos from "@/components/atoms/logos/Logos";
import ContentsList from "@/components/organisms/contents-list/ContentsList";

import ContentsListProps from "@/types/ContentsListProps";

const Top = ({ contents }: { contents: ContentsListProps[] }) => {
  // タイトル要素
  const obj_title = {
    pattern: "main",
  };

  // コンテンツリスト - Technology ここにロジック用意する予定

  return (
    <>
      <Logos {...obj_title}></Logos>
      {contents.map((content) => {
        return (
          <ContentsList
            key={content.abbreviation_name}
            {...content}
          ></ContentsList>
        );
      })}
    </>
  );
};

export default Top;
