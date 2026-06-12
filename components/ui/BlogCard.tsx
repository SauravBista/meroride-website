import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "@/lib/wordpress";
import { formatPostDate, getFeaturedImage, stripHtml } from "@/lib/wordpress";

type BlogCardProps = { post: WPPost };

export function BlogCard({ post }: BlogCardProps) {
  const image = getFeaturedImage(post) || null;
  const excerpt = stripHtml(post.excerpt.rendered);
  const title = stripHtml(post.title.rendered);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0a0f2e] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]">

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070b1a]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-white/20">
                MeroRide
              </span>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/60 via-transparent to-transparent" />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <time
            className="text-[11px] font-medium uppercase tracking-wider text-white/30"
            dateTime={post.date}
          >
            {formatPostDate(post.date)}
          </time>

          <h3 className="mt-2 line-clamp-2 text-[15px] font-bold leading-snug text-white">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-white/45">
            {excerpt}
          </p>

          {/* Read more */}
          <div className="mt-4 flex items-center gap-1.5 text-[12px] font-semibold text-green-400 transition-colors group-hover:text-green-300">
            Read article
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}