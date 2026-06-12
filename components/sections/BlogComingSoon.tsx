import { getBlogPosts } from "@/lib/wordpress";
import { BookOpen, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export async function BlogSection() {
  const posts = await getBlogPosts(6);

  if (posts.length === 0) {
    return <BlogComingSoon />;
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="glass-card group flex flex-col rounded-xl p-6 transition hover:border-green-light/30"
          >
            {post.jetpack_featured_media_url && (
              <img
                src={post.jetpack_featured_media_url}
                alt=""
                className="mb-4 h-40 w-full rounded-lg object-cover"
              />
            )}
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-NP", {
                year: "numeric", month: "short", day: "numeric",
              })}
            </div>
            <h3
              className="mt-2 font-semibold text-white group-hover:text-green-light transition"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <div className="mt-4 flex items-center gap-1 text-xs text-green-light">
              Read more <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Fallback shown when no posts exist yet
export function BlogComingSoon() {
  return (
    <div className="glass-card mx-auto max-w-2xl rounded-xl p-10 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-navy-primary/50">
        <BookOpen className="h-7 w-7 text-green-light/80" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-white">Blog Coming Soon</h3>
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        We are working on travel guides, scooter tips, and the best routes around
        Lalitpur. Check back soon.
      </p>
    </div>
  );
}
