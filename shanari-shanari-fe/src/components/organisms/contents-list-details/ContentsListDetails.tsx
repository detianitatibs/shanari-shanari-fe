import Subject from "@/components/molecules/subject/Subject";
import Card from "@/components/molecules/card/Card";
import Buttons from "@/components/atoms/buttons/Buttons";

import ContentsListProps from "@/types/ContentsListProps";

const ContentsListDetails = ({
  subject_name,
  abbreviation_name,
  cards,
  is_button,
}: ContentsListProps) => {
  // 件名要素の設定
  const subject = {
    object_color: "accent",
    subject_name: subject_name,
  };

  return (
    <div className="p-4">
      <Subject {...subject}></Subject>
      <div className="grid gap-8 px-4 py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4">
        {/* 受け取ったカードの要素だけループする */}
        {cards.map((card, index) => {
          return <Card key={index} {...card}></Card>;
        })}
      </div>
      <div className="flex flex-row-reverse gap-2">
        {/* ページネーションフラグがあれば表示 */}
        {is_button && <Buttons text="Next->"></Buttons>}
        {is_button && <Buttons text="<-Previous"></Buttons>}
      </div>
    </div>
  );
};

export default ContentsListDetails;
