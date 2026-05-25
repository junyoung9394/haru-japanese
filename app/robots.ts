import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      "https://japanese.luckygrampus.com/sitemap.xml",
      "https://japanese.luckygrampus.com/rss.xml",
    ],
  };
}
