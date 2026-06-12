import { Suspense } from "react";
import { BLOG_URL } from "@/lib/constants";
import { getLatestPosts } from "@/lib/wordpress";
import { BlogCard } from "@/components/ui/BlogCard";
import { BlogComingSoon } from "@/components/sections/BlogComingSoon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function BlogSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f2e]"
        >
          <div className="aspect-[16/9] bg-white/5" />
          <div className="space-y-3 p-5">
            <div className="h-2.5 w-1/4 rounded-full bg-white/8" />
            <div className="h-4 w-3/4 rounded-full bg-white/8" />
            <div className="h-3 w-full rounded-full bg-white/6" />
            <div className="h-3 w-2/3 rounded-full bg-white/6" />
          </div>
        </div>
      ))}
    </div>
  );
}

async function BlogGrid() {
  try {
    const posts = await getLatestPosts(6);
    if (posts.length === 0) return <BlogComingSoon />;
    return (
      <>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[13px] font-semibold text-white/60 transition-all duration-200 hover:border-white/30 hover:text-white"
          >
            View all articles
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </>
    );
  } catch (err) {
    console.error("BLOG DEBUG error:", err);
    return <BlogComingSoon />;
  }
}

export function BlogFeed() {
  return (
    <section id="blog" className="section-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">

        <ScrollReveal className="mb-14 text-center">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-green-400 bg-green-400/10 border border-green-400/20">
            Insights
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            From the MeroRide Blog
          </h2>
          <p className="mt-3 text-[15px] text-white/40 max-w-lg mx-auto">
            Guides, tips, and stories about riding in Kathmandu and Lalitpur.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Suspense fallback={<BlogSkeleton />}>
            <BlogGrid />
          </Suspense>
        </ScrollReveal>

      </div>
    </section>
  );
}