import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Arrow, Pill, Reveal, SectionHeading } from "./ui";
import { waFor } from "@/lib/links";

const packages = [
  {
    name: "Starter Cup",
    price: "Rp 4.900.000",
    note: "Booth meja lipat 1,2 m",
    desc: "Cocok untuk pemula dengan modal minim, siap jualan di teras rumah atau bazar.",
    items: ["Booth lipat + banner", "Alat seduh manual", "Bahan baku 300 cup", "Resep 8 menu", "Training online"],
  },
  {
    name: "Daily Brew",
    price: "Rp 8.900.000",
    note: "Booth kayu 1,5 m",
    desc: "Paket paling ramah untuk lokasi ruko kecil dan area kampus.",
    items: ["Booth kayu premium", "Mesin es + blender", "Bahan baku 600 cup", "Resep 14 menu", "Training 2 hari"],
  },
  {
    name: "Signature",
    price: "Rp 14.900.000",
    note: "Booth 2 m + kursi",
    desc: "Paling laris. Kombinasi kapasitas produksi dan tampilan brand yang matang.",
    items: ["Booth 2 m full branding", "Mesin espresso semi-auto", "Bahan baku 1.200 cup", "Resep 20 menu", "Training 4 hari", "Pendampingan 3 bulan"],
    featured: true,
  },
  {
    name: "Grand Kiosk",
    price: "Rp 24.900.000",
    note: "Kiosk mandiri 2,5 m",
    desc: "Untuk lokasi ramai: mall, rest area, dan pusat perkantoran.",
    items: ["Kiosk mandiri + lighting", "Espresso machine 2 group", "Bahan baku 2.500 cup", "Menu lengkap + seasonal", "Training 1 minggu", "Sistem kasir & laporan"],
  },
  {
    name: "Master Area",
    price: "Rp 49.900.000",
    note: "Hak wilayah 1 kecamatan",
    desc: "Kelola beberapa outlet sekaligus dengan hak distribusi bahan baku.",
    items: ["2 unit kiosk lengkap", "Hak wilayah eksklusif", "Margin distribusi bahan", "Support marketing lokal", "Training tim & SOP", "Pendampingan 12 bulan"],
  },
];

export function Pricing() {
  return (
    <section id="paket" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>Lima Paket</>,
          <>
            Usaha <em className="italic">Benice</em>
          </>,
        ]}
      />
      <Reveal delay={0.08} className="mx-auto mt-5 max-w-md text-center text-[12px] leading-relaxed text-muted-foreground">
        Semua paket sudah termasuk booth, peralatan, bahan baku awal, resep, dan pelatihan. Tanpa royalti bulanan.
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`flex h-full flex-col rounded-[18px] p-5 ${
                p.featured ? "bg-primary text-primary-foreground" : "hairline bg-card"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[13px] font-medium tracking-tight">{p.name}</p>
                  <p className={`mt-0.5 text-[10px] ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>
                    {p.note}
                  </p>
                </div>
                {p.featured ? (
                  <Pill as="div" variant="accent" className="h-6 px-2.5 text-[10px]">
                    Terlaris
                  </Pill>
                ) : null}
              </div>

              <p className="display mt-6 text-[clamp(1.5rem,3vw,2rem)]">{p.price}</p>
              <p className={`mt-3 text-[11px] leading-relaxed ${p.featured ? "opacity-85" : "text-muted-foreground"}`}>
                {p.desc}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-2">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[11px]">
                    <span
                      className={`grid size-4 shrink-0 place-items-center rounded-full ${
                        p.featured ? "bg-accent text-accent-foreground" : "bg-surface"
                      }`}
                    >
                      <Check className="size-2.5" strokeWidth={2} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <Pill
                href={waFor(p.name)}
                variant={p.featured ? "accent" : "primary"}
                className="mt-7 w-fit px-5"
              >
                Ambil paket ini <Arrow />
              </Pill>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
