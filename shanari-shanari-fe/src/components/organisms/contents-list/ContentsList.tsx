import Subject from "@/components/molecules/subject/Subject";
import Card from "@/components/molecules/card/Card";

interface Card {
  image_path: string;
  title: string;
  category: string;
  date: Date;
}

interface Props {
  subject_name: string;
  cards: Card[];
}

const ContentsList = ({ subject_name, cards }: Props) => {
  // 件名要素の設定
  const subject = {
    object_color: "accent",
    subject_name: subject_name,
  };

  return (
    <>
      <Subject {...subject}></Subject>
      <div className="grid grid-cols-4 gap-8 px-4 py-4 md:grid-cols-2 sm:grid-cols-1">
        {/* 受け取ったカードの要素だけループする */}
        {cards.map((card, index) => {
          return <Card key={index} {...card}></Card>;
        })}
      </div>
    </>
  );
};

export default ContentsList;
