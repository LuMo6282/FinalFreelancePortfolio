"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import LiLoSlide from "./LiLoSlide";

type Project = {
  id: "redline" | "chaptermade" | "lilo";
  name: string;
  url: string;
  domain: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    id: "redline",
    name: "Redline",
    url: "https://redline-website-vercel.vercel.app/",
    domain: "redline-app.com",
    accent: "#00ff88",
  },
  {
    id: "chaptermade",
    name: "ChapterMade",
    url: "https://chaptermadecomposites.vercel.app/",
    domain: "chaptermadecomposites.vercel.app",
    accent: "#c9a84c",
  },
  {
    id: "lilo",
    name: "LiLO Curated",
    url: "https://lilocurated.com",
    domain: "lilocurated.com",
    accent: "#d4a0a0",
  },
];

const SLIDE_DURATION_SECONDS = 5;
const ease = [0.22, 1, 0.36, 1] as const;

const FRAME_SHADOW =
  "0 24px 60px -20px rgba(0,0,0,0.55), 0 0 80px rgba(201,168,76,0.08)";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const interactedRef = useRef(false);

  const currentProject = PROJECTS[currentIndex];

  useEffect(() => {
    const show = () => setShowHint(true);
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: coarse)").matches) return;
    try {
      if (localStorage.getItem("carousel-hinted") !== "true") show();
    } catch {
      show();
    }
  }, []);

  const dismissHint = useCallback(() => {
    if (interactedRef.current) return;
    interactedRef.current = true;
    setShowHint(false);
    try {
      localStorage.setItem("carousel-hinted", "true");
    } catch {
      /* ignore */
    }
  }, []);

  const goTo = useCallback(
    (i: number) => {
      dismissHint();
      setCurrentIndex(i);
    },
    [dismissHint],
  );

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredDot(null);
      }}
      className="flex w-full flex-col items-stretch"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work"
    >
      <a
        href={currentProject.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${currentProject.name} live site in a new tab`}
        style={{ boxShadow: FRAME_SHADOW }}
        className="group relative block w-full overflow-hidden rounded-[14px] bg-surface transition-shadow duration-700 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
      >
        <div className="relative flex h-9 items-center bg-surface px-4">
          <div className="flex shrink-0 items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#ff5f57" }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#febc2e" }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#28c840" }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <AnimatePresence>
              <motion.span
                key={currentProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute max-w-[60%] truncate font-mono text-[11px] text-secondary"
              >
                {currentProject.domain}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative aspect-16/10">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={false}
              animate={{ opacity: i === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 overflow-hidden"
              aria-hidden={i !== currentIndex}
            >
              {p.id === "lilo" ? (
                <LiLoSlide />
              ) : (
                <ScaledIframe src={p.url} title={`${p.name} live preview`} />
              )}
            </motion.div>
          ))}
        </div>
      </a>

      <div className="mt-4 flex items-center justify-center gap-1">
        {PROJECTS.map((p, i) => {
          const isActive = i === currentIndex;
          const isHovered = hoveredDot === i;
          return (
            <div key={p.id} className="relative">
              <button
                type="button"
                onClick={() => goTo(i)}
                onMouseEnter={() => setHoveredDot(i)}
                onMouseLeave={() => setHoveredDot(null)}
                aria-label={`Show ${p.name}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative block cursor-pointer px-1.5 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
              >
                <span className="relative block h-1.5 w-10 overflow-hidden rounded-full bg-edge transition-colors group-hover:bg-accent/40">
                  {isActive && (
                    <span
                      className="absolute inset-0 block origin-left bg-accent"
                      style={{
                        animation: `carousel-fill ${SLIDE_DURATION_SECONDS}s linear forwards`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                      onAnimationEnd={advance}
                    />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-secondary"
                  >
                    {p.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-secondary md:hidden"
            aria-hidden="true"
          >
            Tap to browse
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const IFRAME_BASE_WIDTH = 1440;
const IFRAME_BASE_HEIGHT = 900;

function ScaledIframe({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setScale(w / IFRAME_BASE_WIDTH);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          width: IFRAME_BASE_WIDTH,
          height: IFRAME_BASE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="pointer-events-none absolute left-0 top-0 block border-0"
      />
    </div>
  );
}

