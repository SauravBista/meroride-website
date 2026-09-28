import type { MetadataRoute } from "next";
import { getAllPostsForSitemap } from "@/lib/wordpress";

const SITE = "https://meroride.com.np";
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsForSitemap();

  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: new Date(p.modified || p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}