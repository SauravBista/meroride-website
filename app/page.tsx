import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Fleet } from "@/components/sections/Fleet";
import { WhyMeroRide } from "@/components/sections/WhyMeroRide";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { FAQ } from "@/components/sections/FAQ";
import { BlogFeed } from "@/components/sections/BlogFeed";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
            <Hero />
      <HowItWorks />
      <Fleet />
      <WhyMeroRide />
      <BlogFeed />
      <GoogleReviews />
      <FAQ />
      <FinalCTA />
    </>
  );
}

