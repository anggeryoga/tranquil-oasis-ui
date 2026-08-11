import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ControlBar } from "@/components/site/ControlBar";
import { Menu } from "@/components/site/Menu";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { JoinSteps } from "@/components/site/JoinSteps";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

const title = "Benice Coffee — Paket Usaha Kopi Mulai Rp 4,9 Juta";
const description =
  "Buka usaha kopi bersama Benice Coffee. Lima paket usaha lengkap dengan booth, peralatan, bahan baku, resep, dan pelatihan. Tanpa royalti bulanan.";

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
      <Menu />
      <Gallery />
      <Pricing />
      <Testimonials />
      <JoinSteps />
      <Newsletter />
      <Footer />
    </main>
  );
}
