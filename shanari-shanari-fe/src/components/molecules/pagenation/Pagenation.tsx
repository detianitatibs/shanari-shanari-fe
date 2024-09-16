import Link from "next/link";

import Buttons from "@/components/atoms/buttons/Buttons";
import PagenationProps from "@/types/PagenationProps";

const Pagenation = ({ ...pagenation }: PagenationProps) => {
  const is_first_page = pagenation.current_page === 1;
  const is_last_page = pagenation.current_page === pagenation.total_pages;

  return (
    <div className="flex flex-row gap-2">
      {!is_first_page && (
        <Link
          href={`/${pagenation.category}?page=${pagenation.current_page - 1}`}
        >
          <Buttons text={"←Previous"}></Buttons>
        </Link>
      )}
      <div className="text-size4 flex items-center">
        Page {pagenation.current_page}/{pagenation.total_pages}
      </div>
      {!is_last_page && (
        <Link
          href={`/${pagenation.category}?page=${pagenation.current_page + 1}`}
        >
          <Buttons text={"Next→"}></Buttons>
        </Link>
      )}
    </div>
  );
};

export default Pagenation;
