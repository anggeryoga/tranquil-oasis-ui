import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({
  children,
  variant = "lime",
  className,
  as = "button",
}: {
  children: ReactNode;
  variant?: "lime" | "outline" | "white";
  className?: string;
  as?: "button" | "div";
}) {
  const Comp = as === "div" ? motion.div : motion.button;
  return (
    <Comp
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "inline-flex h-8 items-center gap-2 rounded-full px-4 text-[11px] tracking-tight whitespace-nowrap",
        variant === "lime" && "bg-accent text-accent-foreground",
        variant === "outline" && "hairline bg-card text-foreground",
        variant === "white" && "bg-card/85 text-foreground backdrop-blur-md",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function CircleButton({
  children,
  variant = "outline",
  className,
  label,
  onClick,
}: {
  children: ReactNode;
  variant?: "lime" | "outline" | "white";
  className?: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      aria-label={label}
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-full",
        variant === "lime" && "bg-accent text-accent-foreground",
        variant === "outline" && "hairline bg-card text-foreground",
        variant === "white" && "bg-card/85 text-foreground backdrop-blur-md",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  lines,
  className,
}: {
  lines: ReactNode[];
  className?: string;
}) {
  return (
    <Reveal className={cn("text-center", className)}>
      <h2 className="display text-[clamp(2.25rem,6vw,4rem)]">
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
    </Reveal>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={cn("size-3", className)} fill="none" aria-hidden>
      <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}