import ObjectSubtitleProps from "@/types/ObjectSubtitleProps";

const ObjectSubtitle = ({ color }: ObjectSubtitleProps) => {
  const baseClassName = "w-4 h-8 rounded-[5px] ";
  const selected_color = [];

  // 色を指定する
  switch (color) {
    case "main":
      selected_color.push("bg-zinc-400");
      break;
    case "sub":
      selected_color.push("bg-yellow-300");
      break;
    case "accent":
      selected_color.push("bg-indigo-400");
      break;
    default:
      selected_color.push("bg-[#d9d9d9]");
      break;
  }
  const custimzedClassName = baseClassName + selected_color.join(" ");

  return <div className={`${custimzedClassName}`}></div>;
};

export default ObjectSubtitle;
