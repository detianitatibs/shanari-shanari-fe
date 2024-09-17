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
        <div className="h-[80px] relative">
          <div className="text-size5">{props.title}</div>
          <div className="absolute bottom-0 left-0 px-2">
            <Icons
              icon_key={props.category}
              additionalClassName="text-size3"
            ></Icons>
          </div>
          <div className="text-size6 absolute bottom-0 right-0 px-2">
            {str_date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
