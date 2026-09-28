import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.meroride.com.np",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.meroride.com.np",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "meroride.wordpress.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i1.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i2.wp.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
  const moved: Record<string, string> = {
    "bike-rent-in-kathmandu-complete-guide-for-locals-and-tourists-2026": "bike-rent-in-kathmandu",
    "how-much-does-scooter-rental-cost-in-kathmandu-in-2026": "scooter-rental-cost-kathmandu",
    "honda-dio-vs-tvs-ntorq-which-should-you-rent-in-lalitpur": "honda-dio-vs-tvs-ntorq",
    "ride-sharing-vs-scooter-rental-in-kathmandu-which-one-actually-makes-sense": "ride-sharing-vs-scooter-rental-kathmandu",
    "how-to-rent-a-scooty-in-lalitpur-step-by-step": "how-to-rent-scooty-lalitpur",
    "monthly-scooter-rental-in-kathmandu-is-it-worth-it": "monthly-scooter-rental-guide",
    "scooty-on-rent-in-kathmandu-price-process-best-options": "scooty-on-rent-kathmandu",
    "scooter-rental-in-kathmandu-complete-guide-2026": "scooter-rental-kathmandu-guide",
  };

  return Object.entries(moved).map(([oldSlug, newSlug]) => ({
    source: `/blog/${oldSlug}`,
    destination: `/blog/${newSlug}`,
    permanent: true,
  }));
},
};

export default nextConfig;
