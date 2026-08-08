import { Search, Bell, Facebook, Twitter, Instagram } from "lucide-react";
import poolPatio from "@/assets/card-pool-patio.jpg";
import roadside from "@/assets/card-roadside.jpg";
import house from "@/assets/card-house.jpg";
import { Arrow, CircleButton, Reveal } from "./ui";

export function ControlBar() {
  return (
    <Reveal delay={0.1} className="mt-3">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex min-w-0 items-center gap-3 rounded-[16px] bg-surface p-2 pr-4">
          <img
            src={poolPatio}
            loading="lazy"
            width={800}
            height={640}
            alt="Sun loungers by the pool"
            className="h-9 w-20 shrink-0 rounded-[10px] object-cover"
          />
          <span className="text-[10px] leading-tight text-muted-foreground">
            Unmatched
            <br />
            Natural Splendor
          </span>
          <span className="hairline hidden size-8 shrink-0 place-items-center rounded-full text-[10px] sm:grid">
            ✳
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[16px] bg-surface p-2">
          <div className="flex shrink-0 gap-1.5">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <span
                key={i}
                className="grid size-7 place-items-center rounded-full bg-foreground text-background"
              >
                <Icon className="size-3" strokeWidth={1.5} />
              </span>
            ))}
          </div>
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-card px-4 py-2">
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search retreats"
              className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-muted-foreground"
            />
            <Search className="size-3.5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
          </label>
          <CircleButton label="Notifications" variant="white">
            <Bell className="size-3" strokeWidth={1.5} />
          </CircleButton>
          <CircleButton label="Open" variant="white">
            <Arrow />
          </CircleButton>
        </div>

        <div className="flex items-center gap-3 rounded-[16px] bg-surface p-2 pl-4">
          <span className="text-[10px] leading-tight text-muted-foreground">
            Embrace Nature's Wonders
            <br />
            with a Spectacular View
          </span>
          <div className="hidden gap-1 sm:flex">
            {[house, roadside, poolPatio].map((src, i) => (
              <img
                key={i}
                src={src}
                loading="lazy"
                width={800}
                height={640}
                alt=""
                className="h-9 w-12 rounded-[8px] object-cover"
              />
            ))}
          </div>
          <CircleButton label="Explore views" variant="outline" className="w-12 rounded-full">
            <span className="text-[10px]">→</span>
          </CircleButton>
        </div>
      </div>
    </Reveal>
  );
}