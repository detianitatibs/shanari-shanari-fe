"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import GoogleAdProps from "@/types/GoogleAdProps";

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

const AdSense = ({
  slot,
  format = "auto",
  responsive = "true",
  style,
}: GoogleAdProps) => {
  let pathname = usePathname();
  pathname = pathname ? pathname : "";

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [pathname]);

  return (
    <div key={pathname.replace(/\//g, "-") + "-" + slot}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", ...style }}
        data-ad-client={`ca-pub-${process.env.AD_PUBLISHER_ID}`}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdSense;
