import { motion } from "motion/react";
import { useRef } from "react";
import { Copy, Plus } from "lucide-react";
import bentoPool from "@/assets/bento-pool.jpg";
import bentoPlaces from "@/assets/bento-places.jpg";
import bentoParking from "@/assets/bento-parking.jpg";
import house from "@/assets/card-house.jpg";
import { Arrow, CircleButton, Pill, Reveal, SectionHeading } from "./ui";

const bars = [
  { d: "M", v: 32 },
  { d: "T", v: 46 },
  { d: "W", v: 63 },
  { d: "T", v: 31 },
  { d: "F", v: 54 },
  { d: "S", v: 79 },
  { d: "S", v: 67 },
];

function OccupancyChart() {
  return (
    <div className="flex h-full flex-col rounded-[16px] bg-surface p-4">
      <span className="w-fit rounded-full bg-card px-2.5 py-1 text-[10px]">Visit load</span>
      <div className="mt-6 flex flex-1 items-end gap-2">
        {bars.map((b, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <span className="text-[9px] text-muted-foreground">{b.v}</span>
            <motion.span
              initial={{ height: 0 }}
              whileInView={{ height: `${b.v * 1.5}px` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-t-[3px] bg-card"
            />
            <span className="text-[9px] text-muted-foreground">{b.d}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-[9px] leading-tight text-muted-foreground">
          \\ You can see the occupancy schedule of our apartments.
        </p>
        <CircleButton label="Open schedule" variant="white" className="size-7">
          <Arrow />
        </CircleButton>
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  badge,
  className,
  showCopy,
  children,
}: {
  src: string;
  alt: string;
  badge: string;
  className?: string;
  showCopy?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-[16px] ${className ?? ""}`}
    >
      <motion.img
        src={src}
        loading="lazy"
        width={1000}
        height={900}
        alt={alt}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.6 }}
        className="h-full w-full object-cover"
      />
      <Pill as="div" className="absolute top-3 left-3 h-7 px-3">
        {badge}
      </Pill>
      {showCopy ? (
        <span className="absolute top-3 right-3 grid size-7 place-items-center rounded-full bg-card/80 backdrop-blur-md">
          <Copy className="size-3" strokeWidth={1.5} />
        </span>
      ) : null}
      <span className="absolute right-3 bottom-3 grid size-7 place-items-center rounded-full bg-card/85 backdrop-blur-md">
        <Arrow />
      </span>
      {children}
    </motion.div>
  );
}

export function Adventure() {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.82), behavior: "smooth" });
  };

  return (
    <section className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>Your Gateway</>,
          <>
            to <em className="italic">Adventure</em>
          </>,
        ]}
      />

      <Reveal className="mt-8 flex justify-end gap-2 lg:hidden">
        <CircleButton label="Previous card" onClick={() => slide(-1)}>
          <Arrow className="rotate-[225deg]" />
        </CircleButton>
        <CircleButton label="Next card" variant="lime" onClick={() => slide(1)}>
          <Arrow className="rotate-45" />
        </CircleButton>
      </Reveal>

      <div
        ref={trackRef}
        className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mx-0 lg:mt-14 lg:grid lg:grid-cols-12 lg:overflow-visible lg:px-0"
      >
        <Reveal className="w-[82vw] shrink-0 snap-start sm:w-[60vw] lg:w-auto lg:col-span-5">
          <ImageCard
            src={bentoPool}
            alt="Turquoise private pool beside a modern desert house"
            badge="Personal pool"
            showCopy
            className="h-[300px] sm:h-[380px] lg:h-[420px]"
          >
            <div className="glass absolute bottom-3 left-3 flex items-center gap-2 rounded-[12px] p-2">
              <img
                src={house}
                loading="lazy"
                width={800}
                height={640}
                alt=""
                className="h-8 w-12 rounded-[8px] object-cover"
              />
              <span className="text-[10px] leading-tight">
                Book Your Dream
                <br />
                Retreat Today
              </span>
              <span className="grid size-6 place-items-center rounded-full bg-accent">
                <Plus className="size-3" strokeWidth={1.5} />
              </span>
            </div>
          </ImageCard>
        </Reveal>

        <Reveal delay={0.08} className="w-[82vw] shrink-0 snap-start sm:w-[60vw] lg:w-auto lg:col-span-3">
          <div className="h-[280px] sm:h-[320px] lg:mt-6 lg:h-[330px]">
            <OccupancyChart />
          </div>
        </Reveal>

        <Reveal delay={0.16} className="w-[82vw] shrink-0 snap-start sm:w-[60vw] lg:w-auto lg:col-span-2">
          <ImageCard
            src={bentoPlaces}
            alt="Ice cream truck on a quiet desert street"
            badge="Various places"
            showCopy
            className="h-[240px] sm:h-[300px] lg:mt-10 lg:h-[280px]"
          />
        </Reveal>

        <Reveal delay={0.24} className="w-[82vw] shrink-0 snap-start sm:w-[60vw] lg:w-auto lg:col-span-2">
          <ImageCard
            src={bentoParking}
            alt="Carport with a vintage car and desert landscaping"
            badge="Car parking"
            className="h-[240px] sm:h-[300px] lg:h-[320px]"
          />
        </Reveal>
      </div>
    </section>
  );
}