import Link from "next/link";

import Logos from "@/components/atoms/logos/Logos";

interface Props {}

const Header = () => {
  const logo_header = {
    pattern: "header",
  };

  return (
    <header className="h-11 bg-yellow-200 px-4 flex items-center">
      <Logos {...logo_header}></Logos>
      <div className="text-size6 ml-auto">
        Ⓒ 2024-{" "}
        <Link href="https://x.com/itatibs" target="_blank">
          @itatibs
        </Link>
      </div>
    </header>
  );
};

export default Header;
