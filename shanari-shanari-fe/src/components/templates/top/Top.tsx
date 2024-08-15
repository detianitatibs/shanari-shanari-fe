import Header from "@/components/organisms/header/Header";
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
  // 広告要素
  const slot = process.env.AD_SLOT || "";

  // タイトル要素
  const obj_title = {
    pattern: "main",
  };

  // コンテンツリスト - Technologies ここにロジック用意する予定

  return (
    <>
      <Header></Header>
      {/* レイアウトを5分割して1:3:1の比率で利用する */}
      <div className="grid grid-cols-5 gap-4">
        {/* Ad左 */}
        <div className="...">
          <AdSense slot={slot}></AdSense>
        </div>
        {/* メインコンテンツ */}
        <div className="col-span-3">
          <Logos {...obj_title}></Logos>
          <ContentsList {...obj_tech}></ContentsList>
          <ContentsList {...obj_blog}></ContentsList>
        </div>
        {/* Ad右 */}
        <div className="...">
          <AdSense slot={slot}></AdSense>
        </div>
      </div>
    </>
  );
};

export default Top;
