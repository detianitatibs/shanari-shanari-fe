/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://" + process.env.DOMAIN,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://" + process.env.DOMAIN + "/server-sitemap.xml",
    ],
  },
};
