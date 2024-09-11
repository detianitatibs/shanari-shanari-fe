import Subject from "@/components/molecules/subject/Subject";
import Card from "@/components/molecules/card/Card";
import Buttons from "@/components/atoms/buttons/Buttons";
import Link from "next/link";

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

const ContentsList = ({
  subject_name,
  abbreviation_name,
  cards,
  is_button,
}: Props) => {
  // 個別一覧ページへのリンク作成
  const detail_link = "/" + abbreviation_name;

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
      <div className="flex flex-row-reverse">
        {/* 個別一覧ページへ遷移するフラグがあるとき */}
        {is_button && (
          <Link href={detail_link}>
            <Buttons text="And more..."></Buttons>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContentsList;
