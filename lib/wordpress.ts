export type WPPost = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  date: string;
  modified?: string;
  link: string;
  slug: string;
  jetpack_featured_media_url?: string;
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
  };
};

export async function getBlogPosts(count = 6): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/meroride.wordpress.com/posts?per_page=${count}&_fields=id,title,excerpt,date,link,slug,jetpack_featured_media_url`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error("WordPress API error:", res.status, await res.text());
      return [];
    }
    const posts = await res.json();
    console.log("WordPress posts fetched:", posts.length);
    return posts;
  } catch (err) {
    console.error("WordPress fetch failed:", err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/meroride.wordpress.com/posts?slug=${slug}&_fields=id,title,content,excerpt,date,modified,link,slug,jetpack_featured_media_url`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

// Keep existing exports to prevent compile errors in other/unused files
export async function getLatestPosts(limit = 6): Promise<WPPost[]> {
  const url = `https://public-api.wordpress.com/wp/v2/sites/meroride.wordpress.com/posts?per_page=${limit}&_fields=id,title,excerpt,date,link,slug,jetpack_featured_media_url`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error(`Blog API error: ${res.status}`);
  }
  return res.json() as Promise<WPPost[]>;
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/\[&hellip;\]/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

export function getFeaturedImage(post: WPPost): string | null {
  const url = post.jetpack_featured_media_url ?? 
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
  return url && url.trim() !== "" ? url : null;
}

export function getAuthorName(post: WPPost): string | null {
  return post._embedded?.author?.[0]?.name ?? null;
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-NP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type SitemapPost = { slug: string; date: string; modified: string };

export async function getAllPostsForSitemap(): Promise<SitemapPost[]> {
  try {
    const res = await fetch(
      "https://public-api.wordpress.com/wp/v2/sites/meroride.wordpress.com/posts?per_page=100&_fields=slug,date,modified",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}