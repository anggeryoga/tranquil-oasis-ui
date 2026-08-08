import { motion } from "motion/react";
import house from "@/assets/card-house.jpg";
import roadside from "@/assets/card-roadside.jpg";
import poolPatio from "@/assets/card-pool-patio.jpg";
import { Arrow, CircleButton, Pill, Reveal, SectionHeading } from "./ui";

const cards = [
  {
    src: house,
    alt: "Small furnished desert house with a vintage car parked outside",
    copy: "Step into our lovingly furnished small house, where coziness meets luxury at every turn.",
    h: "h-52 sm:h-44",
  },
  {
    src: roadside,
    alt: "Pink roadside motel with palm trees",
    copy: null,
    h: "h-52 sm:h-56",
  },
  {
    src: poolPatio,
    alt: "Pool and patio surrounded by palm trees",
    copy: "Our attention to detail ensures that you feel pampered during your stay.",
    h: "h-52 sm:h-44",
  },
];

export function Coziness() {
  return (
    <section className="pt-28 sm:pt-40">
      <SectionHeading
        lines={[
          <>
            Where <em className="italic">Coziness</em>
          </>,
          <>
            <em className="italic">Meets</em> Luxury
          </>,
        ]}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
        <Reveal className="lg:pt-8">
          <p className="text-[13px] leading-relaxed">
            Experience Unmatched Comfort in our Thoughtfully Designed Small House
          </p>
          <Pill className="mt-6">
            More Info <Arrow />
          </Pill>
        </Reveal>

        <div>
          <Reveal className="mb-4 flex justify-end gap-2">
            <CircleButton label="Previous image">
              <Arrow className="rotate-[225deg]" />
            </CircleButton>
            <CircleButton label="Next image" variant="lime">
              <Arrow className="rotate-45" />
            </CircleButton>
          </Reveal>

          <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 0.08} className="w-[78vw] shrink-0 snap-start sm:w-auto">
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
                  <div className="overflow-hidden rounded-[16px]">
                    <motion.img
                      src={c.src}
                      loading="lazy"
                      width={800}
                      height={640}
                      alt={c.alt}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      className={`w-full object-cover ${c.h}`}
                    />
                  </div>
                  {c.copy ? (
                    <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">{c.copy}</p>
                  ) : (
                    <div className="mt-3 flex items-center gap-2 rounded-full bg-surface p-1.5">
                      <div className="flex -space-x-2">
                        {[house, roadside, poolPatio].map((src, k) => (
                          <img
                            key={k}
                            src={src}
                            loading="lazy"
                            width={800}
                            height={640}
                            alt=""
                            className="size-6 rounded-full border border-background object-cover"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-muted-foreground">
                        there are a lot of house options
                      </span>
                    </div>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}