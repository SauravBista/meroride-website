import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getLatestPosts } from "@/lib/wordpress";
import { BlogCard } from "@/components/ui/BlogCard";

const SITE = "https://meroride.com.np";

export const metadata: Metadata = {
  title: { absolute: "Scooter Rental Guides for Kathmandu & Lalitpur | MeroRide Blog" },
  description:
    "Guides, prices and tips for renting a scooter or bike in Kathmandu and Lalitpur: costs, documents, best models, monthly rentals and more.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: "MeroRide Blog: Scooter Rental Guides for Kathmandu & Lalitpur",
    description:
      "Guides, prices and tips for renting a scooter or bike in Kathmandu and Lalitpur.",
    url: `${SITE}/blog`,
    siteName: "MeroRide",
    type: "website",
    locale: "en_NP",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MeroRide scooter rental in Kathmandu and Lalitpur" }],
  },
};

export default async function BlogIndexPage() {
  let posts: Awaited<ReturnType<typeof getLatestPosts>> = [];
  try {
    posts = await getLatestPosts(20);
  } catch (err) {
    console.error("Blog index error:", err);
  }

  return (
    <div className="min-h-screen bg-[#050815]">
      <main className="mx-auto max-w-7xl px-5 pt-28 pb-28 lg:px-10">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to home
        </Link>

        <h1 className="text-3xl font-extrabold tracking-tight text-white lg:text-5xl">
          Scooter &amp; Bike Rental Guides
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/50">
          Prices, documents, model comparisons and local tips for riding in
          Kathmandu and Lalitpur.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-white/50">
            Articles are on their way. Please check back soon.
          </p>
        ) : (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}