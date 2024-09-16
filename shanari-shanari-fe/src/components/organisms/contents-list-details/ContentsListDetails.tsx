import Subject from "@/components/molecules/subject/Subject";
import Card from "@/components/molecules/card/Card";
import Pagenation from "@/components/molecules/pagenation/Pagenation";
import DetailProps from "@/types/DetailProps";
import PagenationProps from "@/types/PagenationProps";

const ContentsListDetails = ({ ...detail }: DetailProps) => {
  // 件名要素の設定
  const subject = {
    object_color: "accent",
    subject_name: detail.content.subject_name,
  };

  // ページネーションの設定
  const pagenation: PagenationProps = {
    current_page: detail.current_page,
    total_pages: detail.total_pages,
    category: detail.content.abbreviation_name,
  };
  // 表示するカードの調整
  const start_card = detail.per_page * (detail.current_page - 1);

  return (
    <div className="p-4">
      <Subject {...subject}></Subject>
      <div className="grid gap-8 px-4 py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4">
        {/* 受け取ったカードの要素だけループする */}
        {detail.content.cards
          .slice(start_card, start_card + detail.per_page)
          .map((card, index) => {
            return <Card key={index} {...card}></Card>;
          })}
      </div>
      <div className="flex justify-end">
        <Pagenation {...pagenation}></Pagenation>
      </div>
    </div>
  );
};

export default ContentsListDetails;
