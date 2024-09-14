import IconsProps from "@/types/IconsProps";

const Icons = ({ icon_key, additionalClassName = "" }: IconsProps) => {
  // 各クラス名を条件に沿って連結する
  const additionalElement = [];

  // 各アイコンを指定する
  const icon_dict = {
    blog: "icon-[carbon--blog]",
    tech: "icon-[streamline--ai-technology-spark]",
    game: "icon-[mingcute--game-2-line]",
    sport: "icon-[bx--run]",
  };
  switch (icon_key) {
    case "blog":
      additionalElement.push(icon_dict.blog);
      break;
    case "tech":
      additionalElement.push(icon_dict.tech);
      break;
    case "game":
      additionalElement.push(icon_dict.game);
      break;
    case "sport":
      additionalElement.push(icon_dict.sport);
      break;
    default:
      additionalElement.push("");
      break;
  }

  // Propsから受け取った追加要素を取り込む
  additionalElement.push(additionalClassName);
  const addedClassName = "" + additionalElement.join(" ");

  return <span className={addedClassName}></span>;
};

export default Icons;
