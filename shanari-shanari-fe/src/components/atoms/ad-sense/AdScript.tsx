import Script from "next/script";

// 参考: https://inari-tech.net/posts/nextjs-adsense
export const AdScript = () => {
  if (process.env.ENVIRONMENT === "prod") {
    return (
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.AD_PUBLISHER_ID}`}
        crossOrigin="anonymous"
      />
    );
  }
  return <></>;
};
