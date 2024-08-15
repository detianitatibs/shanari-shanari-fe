import Image from "next/image";

interface Props {
  pattern: string;
  onClick?: () => void;
}

const Logos = ({ pattern, onClick }: Props) => {
  if (pattern === "main") {
    return (
      <Image
        src="/logo_main.png"
        width={860}
        height={214}
        onClick={onClick}
        alt="Main Logo"
      />
    );
  } else {
    return (
      <Image
        src="/logo_header.png"
        width={120}
        height={40}
        onClick={onClick}
        alt="Header Logo"
      />
    );
  }
};

export default Logos;
