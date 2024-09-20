import Image from "next/image";
import Link from "next/link";

import Icons from "@/components/atoms/icons/Icons";
import CardProps from "@/types/CardProps";

const Card = ({ ...props }: CardProps) => {
  const str_date = props.date.toLocaleDateString("ja-JP");

  return (
    <Link href={props.url}>
      <div className="max-w-60  rounded-md overflow-hidden shadow-md">
        <div className="h-[120px] flex justify-center align-middle">
          <Image
            src={props.image_path}
            width={240}
            height={120}
            alt="Card Image"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="text-size5">{props.title}</div>
        <div className="flex flex-row justify-end">
          <div className="flex-grow">
            <Icons
              icon_key={props.category}
              additionalClassName="text-size3"
            ></Icons>
          </div>
          <div className="text-size6">{str_date}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
