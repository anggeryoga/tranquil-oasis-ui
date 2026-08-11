import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal, Pill, Arrow } from "@/components/site/ui";
import { menuItems } from "@/components/site/menuData";
import { WHATSAPP } from "@/lib/links";

const title = "Menu Lengkap Benice Coffee — Kopi & Non-Kopi Mulai Rp 8.000";
const description =
  "Daftar lengkap menu Benice Coffee: es kopi susu signature, americano, cappuccino, matcha, cokelat, dan minuman non-kopi dengan resep terstandar untuk mitra.";

export const Route = createFileRoute("/menu")({
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
  component: MenuPage,
});

function MenuPage() {
  const groups = ["Kopi", "Non-kopi"];
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] px-3 sm:px-6">
      <Navbar />
      <section className="pt-12 sm:pt-20">
        <Reveal className="text-center">
          <h1 className="display text-[clamp(2.25rem,6vw,4rem)]">
            Menu <em className="italic">Lengkap</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[12px] leading-relaxed text-muted-foreground">
            Semua resep sudah terstandar dan diajarkan saat training mitra.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Pill href={WHATSAPP} className="px-5">
              Konsultasi menu <Arrow />
            </Pill>
            <Link to="/">
              <Pill as="div" variant="outline" className="px-5">
                Kembali ke beranda
              </Pill>
            </Link>
          </div>
        </Reveal>

        {groups.map((g) => (
          <div key={g} className="mt-14">
            <h2 className="text-[13px] font-medium tracking-tight">{g}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {menuItems
                .filter((m) => m.group === g)
                .map((m, i) => (
                  <Reveal key={m.name + i} delay={(i % 4) * 0.05}>
                    <div className="hairline h-full rounded-[18px] bg-card p-3">
                      <img
                        src={m.src}
                        loading="lazy"
                        width={900}
                        height={760}
                        alt={m.name}
                        className="h-40 w-full rounded-[12px] object-cover"
                      />
                      <div className="mt-3 flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-[12px]">{m.name}</p>
                          <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                            {m.desc}
                          </p>
                        </div>
                        <span className="shrink-0 text-[11px] font-medium">{m.price}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}