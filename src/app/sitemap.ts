import type { MetadataRoute } from "next";
import { site, sitePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePages.map((page) => ({
    url: `${site.url}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
