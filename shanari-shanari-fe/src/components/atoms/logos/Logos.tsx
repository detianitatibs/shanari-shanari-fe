import Image from "next/image";

type Props = {
  pattern: string;
  onClick: () => void;
};

const Logos = (props: Props) => {
  if (props.pattern === "main") {
    return (
      <Image
        src="/logo_main.png"
        width={860}
        height={214}
        onClick={props.onClick}
        alt="Main Logo"
      />
    );
  } else {
    return (
      <Image
        src="/logo_header.png"
        width={120}
        height={40}
        onClick={props.onClick}
        alt="Header Logo"
      />
    );
  }
};

export default Logos;
