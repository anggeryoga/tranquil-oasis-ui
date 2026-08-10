import { Search } from "lucide-react";
import { motion } from "motion/react";
import { Pill, CircleButton } from "./ui";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 sm:grid-cols-3"
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="hairline grid size-8 shrink-0 place-items-center rounded-full">
          <span className="grid grid-cols-2 gap-[3px]">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="size-[3px] rounded-full bg-foreground" />
            ))}
          </span>
        </span>
        <Pill className="hidden sm:inline-flex">Gabung Mitra</Pill>
      </div>

      <div className="flex items-center justify-center gap-2">
        <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden>
          <rect x="1" y="1" width="6" height="6" rx="2" fill="currentColor" />
          <rect x="9" y="3" width="6" height="6" rx="2" fill="currentColor" />
          <rect x="1" y="9" width="6" height="6" rx="2" fill="currentColor" />
        </svg>
        <span className="text-[13px] font-medium tracking-tight">Benice Coffee</span>
      </div>

      <div className="flex items-center justify-end gap-2">
        <CircleButton label="Cari">
          <Search className="size-3.5" strokeWidth={1.5} />
        </CircleButton>
        <Pill variant="outline">Hubungi kami</Pill>
      </div>
    </motion.header>
  );
}