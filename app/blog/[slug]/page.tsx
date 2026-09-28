import { getPostBySlug, getBlogPosts } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { CopyLinkClient } from "@/components/CopyLinkClient";
import { plainText, truncate } from "@/lib/text"; // NEW
import { seoDescriptions } from "@/lib/seo-descriptions"; // NEW

const SITE = "https://meroride.com.np"; // NEW

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | MeroRide" };

  // CHANGED: decode entities so &nbsp; never appears in tags
  const title = plainText(post.title.rendered);
  const fullTitle = `${title} | MeroRide `;
  const description =
    seoDescriptions[slug] ?? truncate(plainText(post.excerpt.rendered), 155);
  const url = `${SITE}/blog/${slug}`;
  const image = post.jetpack_featured_media_url || `${SITE}/og-image.png`;

  return {
    title: { absolute: fullTitle }, // absolute = never doubled by a layout template
    description,
    alternates: { canonical: url }, // NEW
    openGraph: {
      title: fullTitle,
      description,
      url, // NEW
      siteName: "MeroRide", // NEW
      type: "article",
      publishedTime: post.date,
      images: [{ url: image, alt: title }],
    },
    twitter: { // NEW
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getBlogPosts(6),
  ]);

  if (!post) notFound();

  const plainTitle = plainText(post.title.rendered); // CHANGED
  const wordCount =
    post.content?.rendered.replace(/<[^>]*>/g, "").split(/\s+/).length ?? 0;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  const formattedDate = new Date(post.date).toLocaleDateString("en-NP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // NEW: article structured data
  const articleUrl = `${SITE}/blog/${slug}`;
const description =
  seoDescriptions[slug] ?? truncate(plainText(post.excerpt.rendered), 155);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      headline: plainTitle,
      description,
      image: post.jetpack_featured_media_url || `${SITE}/og-image.png`,
      datePublished: post.date,
      dateModified: post.modified ?? post.date,
      mainEntityOfPage: articleUrl,
      author: { "@type": "Organization", name: "MeroRide", url: SITE },
      publisher: { "@id": `${SITE}/#business` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: plainTitle, item: articleUrl },
      ],
    },
  ],
};

  return (
    <div className="min-h-screen bg-[#050815]">
      {/* NEW: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top gradient fade */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050815] to-transparent z-10" aria-hidden />

      <main className="mx-auto max-w-2xl px-5 pt-28 pb-28 lg:px-6">

        {/* Back */}
        <Link
          href="/blog"
          className="group mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        {/* Meta row */}
        <div className="mb-5 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-green-500/25 bg-green-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-green-400">
            MeroRide Blog
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-white/30">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.date}>{formattedDate}</time>
          </span>
          <span className="flex items-center gap-1.5 text-[12px] text-white/30">
            <Clock className="h-3 w-3" />
            {readTime} min read
          </span>
        </div>

        {/* Title — CHANGED: plain text instead of raw HTML */}
        <h1 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[40px]">
          {plainTitle}
        </h1>

        {/* CHANGED: the duplicate excerpt block was removed */}

        {/* Featured image — CHANGED: better alt, size attributes */}
        {post.jetpack_featured_media_url && (
          <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f2e]">
            <img
              src={post.jetpack_featured_media_url}
              alt={`${plainTitle} - MeroRide scooter rental, Lalitpur`}
              width={1200}
              height={630}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* Divider */}
        <div className="my-10 h-px bg-white/8" />

        {/* Article body */}
        <div className="blog-content prose-invert" dangerouslySetInnerHTML={{ __html: post.content?.rendered || "" }} />

        {/* Divider */}
        <div className="mt-14 mb-8 h-px bg-white/8" />

        {/* Author + share */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-500/25 bg-green-500/10 text-[12px] font-bold text-green-400">
              MR
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white leading-none mb-0.5">
                MeroRide Team
              </p>
              {/* CHANGED: correct location */}
              <p className="text-[11px] text-white/30">Lalitpur, Nepal</p>
            </div>
          </div>
          <CopyLinkClient />
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 rounded-2xl border border-white/8 bg-[#0a0f2e] p-6">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-widest text-white/25">
              More from MeroRide
            </p>
            <div className="flex flex-col divide-y divide-white/6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  {/* CHANGED: plain text instead of raw HTML */}
                  <span className="text-[14px] leading-snug text-white/60 transition-colors group-hover:text-white">
                    {plainText(related.title.rendered)}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-green-400 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog — bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-5 py-2.5 text-[13px] font-medium text-white/50 transition-all hover:border-white/25 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>
        </div>

      </main>
    </div>
  );
}