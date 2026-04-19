"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHAPTERS = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
] as const;

export default function ChapterMarkers() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const targets = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (targets.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex"
    >
      {CHAPTERS.map((c) => {
        const isActive = activeId === c.id;
        const isHovered = hoveredId === c.id;
        return (
          <div
            key={c.id}
            className="pointer-events-auto relative flex items-center gap-3"
            onMouseEnter={() => setHoveredId(c.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <AnimatePresence>
              {(isHovered || isActive) && (
                <motion.span
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-secondary"
                >
                  {c.label}
                </motion.span>
              )}
            </AnimatePresence>
            <a
              href={`#${c.id}`}
              aria-label={`Jump to ${c.label}`}
              aria-current={isActive ? "true" : undefined}
              className="group relative grid h-6 w-6 cursor-pointer place-items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
            >
              <span
                className={`block h-2 w-2 rounded-full border transition-all duration-300 ease-out ${
                  isActive
                    ? "border-accent scale-100"
                    : "border-secondary/40 group-hover:border-accent/70"
                }`}
                style={
                  isActive
                    ? {
                        backgroundImage:
                          "linear-gradient(135deg, #c9a84c 0%, #f4e4a1 50%, #c9a84c 100%)",
                        boxShadow: "0 0 12px rgba(201,168,76,0.4)",
                      }
                    : undefined
                }
              />
            </a>
          </div>
        );
      })}
    </nav>
  );
}
