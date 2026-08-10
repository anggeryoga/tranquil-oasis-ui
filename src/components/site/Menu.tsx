import { motion } from "motion/react";
import americano from "@/assets/menu-americano.jpg";
import icedLatte from "@/assets/menu-iced-latte.jpg";
import cappuccino from "@/assets/menu-cappuccino.jpg";
import choco from "@/assets/menu-choco.jpg";
import matcha from "@/assets/menu-matcha.jpg";
import { Arrow, Pill, Reveal, SectionHeading } from "./ui";

const menu = [
  { src: americano, name: "Es Kopi Americano", desc: "Espresso murni, dingin & ringan", price: "Rp 10.000", tag: "Best seller" },
  { src: icedLatte, name: "Es Kopi Susu Benice", desc: "Signature gula aren, creamy", price: "Rp 12.000", tag: "Signature" },
  { src: cappuccino, name: "Hot Cappuccino", desc: "Espresso + microfoam lembut", price: "Rp 13.000" },
  { src: choco, name: "Choco Ice Blend", desc: "Cokelat premium, whipped cream", price: "Rp 15.000" },
  { src: matcha, name: "Matcha Latte", desc: "Matcha Jepang, susu segar", price: "Rp 15.000", tag: "Baru" },
];

export function Menu() {
  return (
    <section id="menu" className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>Menu yang</>,
          <>
            <em className="italic">Selalu</em> Dicari
          </>,
        ]}
      />
      <Reveal delay={0.08} className="mx-auto mt-5 max-w-md text-center text-[12px] leading-relaxed text-muted-foreground">
        20+ varian racikan Benice Coffee dengan resep terstandar, harga terjangkau, dan margin sehat untuk mitra.
      </Reveal>

      <div className="-mx-5 mt-12 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
        {menu.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.06} className="w-[62vw] shrink-0 snap-start sm:w-auto">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
              <div className="relative overflow-hidden rounded-[16px]">
                <motion.img
                  src={m.src}
                  loading="lazy"
                  width={900}
                  height={760}
                  alt={m.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-44 w-full object-cover sm:h-52"
                />
                {m.tag ? (
                  <Pill as="div" variant="accent" className="absolute top-3 left-3 h-7 px-3">
                    {m.tag}
                  </Pill>
                ) : null}
              </div>
              <div className="mt-3 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-[12px]">{m.name}</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
                <span className="shrink-0 text-[11px] font-medium">{m.price}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Pill className="px-6">
          Lihat menu lengkap <Arrow />
        </Pill>
      </Reveal>
    </section>
  );
}
