import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";
import { JoinSteps } from "@/components/site/JoinSteps";
import { Testimonials } from "@/components/site/Testimonials";
import { Arrow, Pill, Reveal } from "@/components/site/ui";
import { WHATSAPP } from "@/lib/links";

const title = "Paket Usaha Benice Coffee — 5 Pilihan Mulai Rp 4,9 Juta";
const description =
  "Bandingkan lima paket usaha Benice Coffee: Starter Cup, Daily Brew, Signature, Grand Kiosk, dan Master Area. Booth, alat, bahan baku, resep, dan training termasuk.";

export const Route = createFileRoute("/paket")({
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
  component: PaketPage,
});

function PaketPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <section className="pt-12 text-center sm:pt-20">
        <Reveal>
          <h1 className="display text-[clamp(2.25rem,6vw,4rem)]">
            Paket <em className="italic">Usaha</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[12px] leading-relaxed text-muted-foreground">
            Pilih skala usaha sesuai modal dan lokasi Anda. Tanpa royalti bulanan.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Pill href={WHATSAPP} className="px-5">
              Tanya konsultan <Arrow />
            </Pill>
            <Link to="/">
              <Pill as="div" variant="outline" className="px-5">
                Kembali ke beranda
              </Pill>
            </Link>
          </div>
        </Reveal>
      </section>
      <Pricing />
      <JoinSteps />
      <Testimonials />
      <Footer />
    </main>
  );
}