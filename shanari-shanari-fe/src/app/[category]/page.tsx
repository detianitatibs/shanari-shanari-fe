import Details from "@/components/templates/details/Details";

interface Props {
  params: {
    category: string;
  };
}

const Page = ({ params }: Props) => {
  // ToDo: Detailsに渡すための要素を取得するロジックを追加予定
  // テスト用に一旦準備
  const array_card = [];
  const card = {
    image_path: "/icon.png",
    title: "これはブログのタイトルです",
    category: "blog",
    date: new Date(2024, 10, 10),
  };
  for (let i = 0; i < 20; i++) {
    array_card.push(card);
  }

  const obj_tech = {
    subject_name: "Technology",
    abbreviation_name: "tech",
    cards: array_card,
    is_button: false,
  };
  const obj_blog = {
    subject_name: "Blog",
    abbreviation_name: "blog",
    cards: array_card,
    is_button: true,
  };

  if (params.category === "tech") {
    return <Details {...obj_tech}></Details>;
  } else if (params.category === "blog") {
    return <Details {...obj_blog}></Details>;
  } else {
    return <div>Not Contents.</div>;
  }
};

export default Page;
