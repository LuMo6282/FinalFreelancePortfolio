"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

const EASE_LILO: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const LILO_COLUMNS = [
  {
    src: "/assets/lilo/2135.webp",
    bg: "#c4a882",
    position: "center top",
    scale: 1,
  },
  {
    src: "/assets/lilo/DW346.jpg",
    bg: "#7a8e9b",
    position: "center",
    scale: 1.15,
  },
  {
    src: "/assets/lilo/YB45.webp",
    bg: "#e8e4df",
    position: "center",
    scale: 1,
  },
  {
    src: "/assets/lilo/2198.jpg",
    bg: "#c8c4bf",
    position: "center",
    scale: 1,
  },
] as const;

function LiLoSlide() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const heroItem = (delay: number) =>
    prefersReducedMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: EASE_LILO },
        };

  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={{
        containerType: "inline-size",
        backgroundColor: "#0a0a0a",
        fontFamily: "var(--font-lilo-sans), system-ui, sans-serif",
      }}
    >
      <div className="absolute inset-0 flex">
        {LILO_COLUMNS.map((col, i) => (
          <div
            key={i}
            className="relative flex-1 overflow-hidden"
            style={{ backgroundColor: col.bg }}
          >
            <Image
              src={col.src}
              alt=""
              fill
              sizes="(max-width: 767px) 25vw, 15vw"
              className="object-cover"
              style={{
                objectPosition: col.position,
                ...(col.scale !== 1
                  ? {
                      transform: `scale(${col.scale})`,
                      transformOrigin: "center top",
                    }
                  : {}),
              }}
            />
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      <div
        className="relative z-10 flex flex-1 flex-col justify-end"
        style={{
          paddingInline: "clamp(14px, 3.2cqi, 32px)",
          paddingBlock: "clamp(14px, 2.8cqi, 28px)",
        }}
      >
        <motion.div
          {...heroItem(0.2)}
          className="flex items-center"
          style={{
            gap: "clamp(6px, 1.6cqi, 14px)",
            marginBottom: "clamp(8px, 1.8cqi, 18px)",
          }}
        >
          <span
            className="block h-px bg-white/60"
            style={{ width: "clamp(16px, 4cqi, 40px)" }}
          />
          <p
            className="uppercase text-white/60"
            style={{
              letterSpacing: "0.35em",
              fontSize: "clamp(6px, 1.1cqi, 11px)",
            }}
          >
            Premium Branded Wholesale Attire
          </p>
        </motion.div>

        <motion.p
          {...heroItem(0.4)}
          className="uppercase text-white/70"
          style={{
            fontFamily: "var(--font-lilo-display), Oswald, serif",
            letterSpacing: "0.15em",
            fontSize: "clamp(0.6rem, 2cqi, 1.4rem)",
            marginBottom: "clamp(2px, 0.5cqi, 6px)",
          }}
        >
          Flow.&nbsp;&nbsp;Flex.&nbsp;&nbsp;Play.
        </motion.p>

        <motion.h3
          {...heroItem(0.4)}
          className="uppercase text-white"
          style={{
            fontFamily: "var(--font-lilo-display), Oswald, serif",
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: "-0.01em",
            fontSize: "clamp(1.5rem, 7.5cqi, 4.75rem)",
            marginBottom: "clamp(6px, 1.4cqi, 14px)",
          }}
        >
          <span className="text-white/50">Branded</span>
          <br />
          your way.
        </motion.h3>

        <motion.p
          {...heroItem(0.6)}
          className="text-white/50"
          style={{
            letterSpacing: "0.03em",
            fontSize: "clamp(0.48rem, 1.35cqi, 0.8rem)",
            lineHeight: 1.55,
            maxWidth: "clamp(140px, 48cqi, 360px)",
            marginBottom: "clamp(10px, 2cqi, 22px)",
          }}
        >
          Women&apos;s premium branded fitness attire.
        </motion.p>

        <motion.div
          {...heroItem(0.8)}
          className="flex items-center"
          style={{ gap: "clamp(6px, 1.4cqi, 14px)" }}
        >
          <div
            className="border border-white bg-white font-semibold uppercase text-black"
            style={{
              paddingInline: "clamp(9px, 2cqi, 20px)",
              paddingBlock: "clamp(4px, 1cqi, 10px)",
              fontSize: "clamp(0.45rem, 1.2cqi, 0.72rem)",
              letterSpacing: "0.15em",
            }}
          >
            Browse Collections
          </div>
          <div
            className="border border-white/40 font-semibold uppercase text-white"
            style={{
              paddingInline: "clamp(9px, 2cqi, 20px)",
              paddingBlock: "clamp(4px, 1cqi, 10px)",
              fontSize: "clamp(0.45rem, 1.2cqi, 0.72rem)",
              letterSpacing: "0.15em",
            }}
          >
            Request Quote
          </div>
        </motion.div>
      </div>

      <motion.div
        {...heroItem(0.8)}
        className="absolute z-10 flex flex-col items-center"
        style={{
          right: "clamp(8px, 2cqi, 20px)",
          bottom: "clamp(10px, 2.2cqi, 22px)",
          gap: "clamp(4px, 0.9cqi, 10px)",
        }}
      >
        <span
          className="uppercase text-white/30"
          style={{
            writingMode: "vertical-lr",
            letterSpacing: "0.3em",
            fontSize: "clamp(5px, 0.85cqi, 9px)",
          }}
        >
          Scroll
        </span>
        <div
          className="relative w-px overflow-hidden bg-white/20"
          style={{ height: "clamp(18px, 4cqi, 44px)" }}
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={prefersReducedMotion ? { y: "-100%" } : { y: "100%" }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 2, ease: EASE_LILO, repeat: Infinity }
            }
            className="absolute inset-0 bg-white/60"
          />
        </div>
      </motion.div>
    </div>
  );
}
