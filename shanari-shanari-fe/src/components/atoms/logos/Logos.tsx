import Image from "next/image";
import Link from "next/link";

interface Props {
  pattern: string;
  onClick?: () => void;
}

const Logos = ({ pattern, onClick }: Props) => {
  if (pattern === "main") {
    return (
      <Image
        src="/logo_main.drawio.svg"
        width={860}
        height={214}
        onClick={onClick}
        alt="Main Logo"
        className="rounded-md py-14 mx-auto"
      />
    );
  } else {
    return (
      <Link href="/">
        <Image
          src="/logo_header.drawio.svg"
          width={120}
          height={40}
          onClick={onClick}
          alt="Header Logo"
          className="rounded-md"
        />
      </Link>
    );
  }
};

export default Logos;
