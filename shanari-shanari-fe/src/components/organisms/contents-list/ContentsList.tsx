import Subject from "@/components/molecules/subject/Subject";
import Card from "@/components/molecules/card/Card";
import Buttons from "@/components/atoms/buttons/Buttons";
import Link from "next/link";

import ContentsListProps from "@/types/ContentsListProps";

const ContentsList = ({ ...content_list }: ContentsListProps) => {
  // 個別一覧ページへのリンク作成
  const detail_link = "/" + content_list.abbreviation_name;

  // 件名要素の設定
  const subject = {
    object_color: "accent",
    subject_name: content_list.subject_name,
  };

  // TopCutで表示する数
  const topcut_number = Number(process.env.TOPCUT_TOP ?? "8");

  return (
    <div className="p-4">
      <Subject {...subject}></Subject>
      <div className="grid gap-8 px-4 py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4">
        {/* 受け取ったカードの要素だけループする */}
        {content_list.cards.slice(0, topcut_number).map((card, index) => {
          return <Card key={index} {...card}></Card>;
        })}
      </div>
      <div className="flex flex-row-reverse">
        {/* 個別一覧ページへ遷移するフラグがあるとき */}
        {content_list.is_button && (
          <Link href={detail_link}>
            <Buttons text="And more..."></Buttons>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContentsList;
