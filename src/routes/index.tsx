import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ControlBar } from "@/components/site/ControlBar";
import { Coziness } from "@/components/site/Coziness";
import { PoolFeature } from "@/components/site/PoolFeature";
import { Adventure } from "@/components/site/Adventure";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

const title = "TranquilQ — Private Retreats in Quiet Luxury";
const description =
  "A boutique collection of private retreats: cinematic mountain cabins, desert houses and pools, designed for calm, spacious, unhurried stays.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <Hero />
      <ControlBar />
      <Coziness />
      <PoolFeature />
      <Adventure />
      <Newsletter />
      <Footer />
    </main>
  );
}
