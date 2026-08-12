import { MetadataRoute } from "next";
import { abs, SITE_URL } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: abs("/sitemap.xml"),
    host: SITE_URL,
  };
}
