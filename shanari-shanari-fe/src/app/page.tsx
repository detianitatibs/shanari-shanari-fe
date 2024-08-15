import Top from "@/components/templates/top/Top";

export default function Home() {
  // テスト用に一旦準備
  const array_card = [];
  const card = {
    image_path: "/icon.png",
    title: "これはブログのタイトルです",
    category: "blog",
    date: new Date(2024, 10, 10),
  };
  // 複数カードを用意する
  for (let i = 0; i < 3; i++) {
    array_card.push(card);
  }

  const obj_tech = {
    subject_name: "Technologies",
    cards: array_card,
  };
  const obj_blog = {
    subject_name: "Blog",
    cards: array_card,
  };

  return (
    <main>
      <Top obj_tech={obj_tech} obj_blog={obj_blog}></Top>
    </main>
  );
}
