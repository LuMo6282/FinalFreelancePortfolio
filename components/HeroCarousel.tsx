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
  label: string;
  subtitle: string;
  techStack: string[];
  description: string;
};

const PROJECTS: Project[] = [
  {
    id: "redline",
    name: "Redline",
    url: "https://redline-website-vercel.vercel.app/",
    domain: "redline-app.com",
    accent: "#00ff88",
    label: "Founded & Built",
    subtitle: "AI training advisor · Native iOS beta",
    techStack: ["Next.js", "TypeScript", "Framer Motion"],
    description:
      "AI training advisor built into a native mobile app. Pulls live signals from Apple Health and keeps a running memory of each athlete's history, readiness, and goals, so every recommendation reflects the most recent session instead of a static plan. Grounded in a custom-curated database of fitness research and programming logic for evidence-backed advice. App is currently in beta testing. Linked is the marketing site to collect emails and advertise the product.",
  },
  {
    id: "chaptermade",
    name: "ChapterMade",
    url: "https://chaptermadecomposites.vercel.app/",
    domain: "chaptermadecomposites.vercel.app",
    accent: "#c9a84c",
    label: "Founded & Built",
    subtitle: "Composite platform · 22 chapters · 2,200+ members",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    description:
      "End-to-end composite platform for Greek life. Executive boards manage their roster and customize the layout in a guided editor before purchasing composites and add-ons. Each member gets a personal QR code that photographers scan on set, tethering every shot to the right account. Finished composites export as layered Photoshop templates ready for retouch.",
  },
  {
    id: "lilo",
    name: "LiLO Curated",
    url: "https://lilocurated.com",
    domain: "lilocurated.com",
    accent: "#d4a0a0",
    label: "Client Work",
    subtitle: "Wholesale fitness attire · Custom Shopify admin",
    techStack: ["Next.js", "Tailwind", "Shopify API"],
    description:
      "Quote-based B2B storefront for a premium women's fitness attire label. Hand-sorted hundreds of product shots into a color-organized catalog, then designed and built the marketing site and wholesale quote flow from scratch. Ships with a bespoke admin panel that lets the owner edit any page, image, product, or collection without touching code.",
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredDot(null);
      }}
      className="w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[11fr_9fr] md:gap-10 lg:gap-14">
        <div className="flex flex-col">
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
        </div>

        <div className="relative min-h-65 sm:min-h-70 md:min-h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-col text-left"
            >
              <span className="font-display text-[10px] font-light uppercase tracking-[0.22em] text-secondary sm:text-[11px]">
                {currentProject.label}
              </span>
              <h3 className="mt-3 font-display text-3xl font-extrabold leading-[0.95] tracking-tight text-primary sm:text-4xl md:text-[40px]">
                {currentProject.name}
              </h3>
              <p className="mt-2 font-display text-sm font-light text-secondary sm:text-base">
                {currentProject.subtitle}
              </p>
              <p className="mt-3 font-mono text-[12px] text-secondary">
                {currentProject.techStack.join(" · ")}
              </p>
              <p className="mt-4 font-display text-sm font-light leading-relaxed text-secondary sm:text-[15px]">
                {currentProject.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
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
