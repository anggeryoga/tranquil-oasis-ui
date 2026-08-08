import { motion } from "motion/react";
import { Check, Plus, X } from "lucide-react";
import pool from "@/assets/pool-feature.jpg";
import house from "@/assets/card-house.jpg";
import roadside from "@/assets/card-roadside.jpg";
import { Arrow, CircleButton, Pill, Reveal } from "./ui";

const included = [
  { note: "Included in the cost", label: "Enormous pool", img: pool, ok: true },
  { note: "Included in the cost", label: "Cozy house", img: house, ok: true },
  { note: "Not included in the cost", label: "Relaxing sauna", img: roadside, ok: false },
];

export function PoolFeature() {
  return (
    <section className="grid items-center gap-12 pt-24 sm:pt-32 lg:grid-cols-2 lg:gap-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <Reveal className="relative w-full sm:w-[58%]">
          <div className="overflow-hidden rounded-[16px]">
            <motion.img
              src={pool}
              loading="lazy"
              width={900}
              height={760}
              alt="Private pool with colourful floats surrounded by palm trees"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="glass absolute top-3 left-3 max-w-[150px] rounded-[12px] p-2">
            <div className="flex items-center gap-1.5">
              <img
                src={house}
                loading="lazy"
                width={800}
                height={640}
                alt=""
                className="size-5 rounded-full object-cover"
              />
              <span className="text-[9px] font-medium">Tracy Furnes</span>
            </div>
            <p className="mt-1 text-[9px] leading-tight text-muted-foreground">
              It was a super vacation, me and my friends had a great time.
            </p>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            <CircleButton label="Move" variant="white">
              <Plus className="size-3" strokeWidth={1.5} />
            </CircleButton>
            <span className="size-9 rounded-full bg-card/85 backdrop-blur-md" />
            <CircleButton label="Share" variant="white">
              <Arrow />
            </CircleButton>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="hairline w-full rounded-[14px] bg-card p-2.5 sm:w-[42%]">
          {included.map((item) => (
            <div key={item.label} className="flex items-center gap-2 py-1.5">
              <img
                src={item.img}
                loading="lazy"
                width={800}
                height={640}
                alt=""
                className="size-7 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="truncate text-[8px] text-muted-foreground">{item.note}</p>
                <p className="truncate text-[11px]">{item.label}</p>
              </div>
              <span className="ml-auto grid size-4 shrink-0 place-items-center rounded-full bg-surface">
                {item.ok ? <Check className="size-2.5" /> : <X className="size-2.5" />}
              </span>
            </div>
          ))}
          <div className="mt-1 flex justify-end">
            <Arrow />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <h2 className="display text-[clamp(2rem,4.6vw,3.25rem)]">
          Private Oasis with
          <br />a <em className="italic">Refreshing</em> Pool
        </h2>
        <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-muted-foreground">
          Cool off and embrace the joy of swimming in our private pool.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Pill>
            View Gallery <Arrow />
          </Pill>
          <Pill variant="outline">
            Go Down <Arrow className="rotate-90" />
          </Pill>
        </div>
      </Reveal>
    </section>
  );
}