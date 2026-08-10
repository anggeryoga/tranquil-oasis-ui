import { Search, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import outlet from "@/assets/gallery-outlet.jpg";
import barista from "@/assets/gallery-barista.jpg";
import equipment from "@/assets/gallery-equipment.jpg";
import { Arrow, CircleButton, Reveal } from "./ui";

export function ControlBar() {
  return (
    <Reveal delay={0.1} className="mt-3">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex min-w-0 items-center gap-3 rounded-[16px] bg-surface p-2 pr-4">
          <img
            src={equipment}
            loading="lazy"
            width={900}
            height={760}
            alt="Peralatan kopi paket usaha Benice"
            className="h-9 w-20 shrink-0 rounded-[10px] object-cover"
          />
          <span className="text-[10px] leading-tight text-muted-foreground">
            Paket usaha lengkap
            <br />
            langsung jualan
          </span>
          <span className="hairline hidden size-8 shrink-0 place-items-center rounded-full text-[10px] sm:grid">
            ✳
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[16px] bg-surface p-2">
          <div className="flex shrink-0 gap-1.5">
            {[MessageCircle, Instagram, Facebook].map((Icon, i) => (
              <span
                key={i}
                className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <Icon className="size-3" strokeWidth={1.5} />
              </span>
            ))}
          </div>
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-card px-4 py-2">
            <input
              type="search"
              placeholder="Cari paket atau kota..."
              aria-label="Cari paket usaha Benice Coffee"
              className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-muted-foreground"
            />
            <Search className="size-3.5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
          </label>
          <CircleButton label="Telepon kami" variant="white">
            <Phone className="size-3" strokeWidth={1.5} />
          </CircleButton>
          <CircleButton label="Buka" variant="white">
            <Arrow />
          </CircleButton>
        </div>

        <div className="flex items-center gap-3 rounded-[16px] bg-surface p-2 pl-4">
          <span className="text-[10px] leading-tight text-muted-foreground">
            340+ mitra di 21 kota
            <br />
            balik modal 4-7 bulan
          </span>
          <div className="hidden gap-1 sm:flex">
            {[outlet, barista, equipment].map((src, i) => (
              <img
                key={i}
                src={src}
                loading="lazy"
                width={900}
                height={760}
                alt=""
                className="h-9 w-12 rounded-[8px] object-cover"
              />
            ))}
          </div>
          <CircleButton label="Lihat mitra" variant="outline" className="w-12 rounded-full">
            <Arrow />
          </CircleButton>
        </div>
      </div>
    </Reveal>
  );
}
