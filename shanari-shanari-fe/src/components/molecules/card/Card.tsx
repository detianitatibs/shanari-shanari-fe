import Image from "next/image";
import Icons from "@/components/atoms/icons/Icons";

interface Props {
  image_path: string;
  title: string;
  category: string;
  date: Date;
}

const Card = ({ image_path, title, category, date }: Props) => {
  const str_date = date.toLocaleDateString("ja-JP");

  return (
    <div className="max-w-60  rounded-md overflow-hidden shadow-md">
      <div className="w-[240px] h-[120px] flex justify-center align-middle">
        <Image
          src={image_path}
          width={240}
          height={120}
          alt="Card Image"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-[240px] h-[80px] relative">
        <div className="text-size5">{title}</div>
        <div className="absolute bottom-0 left-0 px-2">
          <Icons icon_key={category} additionalClassName="text-size3"></Icons>
        </div>
        <div className="text-size6 absolute bottom-0 right-0 px-2">
          {str_date}
        </div>
      </div>
    </div>
  );
};

export default Card;
