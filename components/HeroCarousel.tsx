"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type PlaceholderVariant = "redline" | "chaptermade" | "lilo";

type Project = {
  id: string;
  name: string;
  url: string;
  domain: string;
  accent: string;
  screenshot: string | null;
  placeholder: PlaceholderVariant;
};

const PROJECTS: Project[] = [
  {
    id: "redline",
    name: "Redline",
    url: "https://redline-website-vercel.vercel.app/",
    domain: "redline-app.com",
    accent: "#00ff88",
    screenshot: null,
    placeholder: "redline",
  },
  {
    id: "chaptermade",
    name: "ChapterMade",
    url: "https://chaptermadecomposites.vercel.app/",
    domain: "chaptermadecomposites.vercel.app",
    accent: "#c9a84c",
    screenshot: null,
    placeholder: "chaptermade",
  },
  {
    id: "lilo",
    name: "LiLO Curated",
    url: "https://lilocurated.com",
    domain: "lilocurated.com",
    accent: "#d4a0a0",
    screenshot: null,
    placeholder: "lilo",
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
  const [visitCounts, setVisitCounts] = useState<Record<string, number>>({});
  const prevIndexRef = useRef(currentIndex);

  const currentProject = PROJECTS[currentIndex];

  const goTo = useCallback((i: number) => {
    setCurrentIndex(i);
  }, []);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  useEffect(() => {
    const prev = prevIndexRef.current;
    if (prev !== currentIndex) {
      const id = PROJECTS[currentIndex].id;
      setVisitCounts((v) => ({ ...v, [id]: (v[id] ?? 0) + 1 }));
    }
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

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
              className="absolute inset-0"
              aria-hidden={i !== currentIndex}
            >
              {p.screenshot ? (
                <Image
                  src={p.screenshot}
                  alt={`${p.name} site screenshot`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55vw"
                />
              ) : p.placeholder === "redline" ? (
                <RedlineSlide key={`redline-${visitCounts.redline ?? 0}`} />
              ) : p.placeholder === "chaptermade" ? (
                <ChapterMadeSlide
                  key={`chaptermade-${visitCounts.chaptermade ?? 0}`}
                />
              ) : (
                <LiLoSlide key={`lilo-${visitCounts.lilo ?? 0}`} />
              )}
            </motion.div>
          ))}
        </div>
      </a>

      <div className="mt-6 flex items-center justify-center gap-3">
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
                className="relative block h-1.5 w-10 overflow-hidden rounded-full bg-edge transition-colors hover:bg-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
              >
                {isActive && (
                  <div
                    className="absolute inset-0 origin-left bg-accent"
                    style={{
                      animation: `carousel-fill ${SLIDE_DURATION_SECONDS}s linear forwards`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                    onAnimationEnd={advance}
                  />
                )}
              </button>
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-secondary"
                  >
                    {p.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

const EASE_REDLINE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const wordmarkContainerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.15, staggerChildren: 0.05 },
  },
};

const wordmarkLetterVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_REDLINE },
  },
};

function RedlineSlide() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const letters = "redline".split("");
  const r = 30;
  const circ = 2 * Math.PI * r;
  const score = 78;
  const ringOffset = circ - (score / 100) * circ;

  return (
    <div
      className="absolute inset-0 flex items-center gap-5 overflow-hidden px-6 sm:gap-7 sm:px-8 md:gap-8 md:px-10"
      style={{
        backgroundColor: "#050505",
        containerType: "inline-size",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(245,241,232,0.6) 0 1px, transparent 1px 3px)",
        }}
      />

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <motion.h3
          aria-label="redline"
          variants={wordmarkContainerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="flex items-end text-[#f5f1e8]"
          style={{
            fontFamily: "var(--font-redline), system-ui, sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.82,
            fontSize: "clamp(2.25rem, 13cqi, 5.25rem)",
          }}
        >
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              variants={wordmarkLetterVariants}
              className="inline-block"
              style={{ willChange: "transform, opacity, filter" }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h3>

        <motion.div
          aria-hidden
          initial={
            prefersReducedMotion
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0, opacity: 0 }
          }
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE_REDLINE, delay: 0.75 }}
          className="mt-3 h-0.75 origin-left rounded-full"
          style={{
            backgroundColor: "#ef2b2d",
            width: "clamp(140px, 55cqi, 440px)",
          }}
        />

        <motion.p
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_REDLINE, delay: 0.95 }}
          className="mt-3 font-mono uppercase text-[#7c786c]"
          style={{
            fontSize: "clamp(0.55rem, 1.6cqi, 0.8rem)",
            letterSpacing: "0.22em",
          }}
        >
          AI training advisor
        </motion.p>
      </div>

      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_REDLINE, delay: 0.45 }}
        className="relative z-10 shrink-0 overflow-hidden border"
        style={{
          height: "78%",
          aspectRatio: "9 / 19",
          borderRadius: "clamp(14px, 3.5cqi, 22px)",
          backgroundColor: "#0a0a0a",
          borderColor: "rgba(245,241,232,0.06)",
          boxShadow:
            "0 24px 50px -24px rgba(22,217,117,0.18), inset 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        <div
          className="absolute left-1/2 h-0.75 -translate-x-1/2 rounded-full bg-[#111]"
          style={{ top: "5%", width: "26%" }}
        />

        <div className="absolute inset-x-[10%] top-[14%] flex flex-col items-center gap-[12%]">
          <div className="relative w-[78%]" style={{ aspectRatio: "1 / 1" }}>
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full -rotate-90"
            >
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="rgba(245,241,232,0.08)"
                strokeWidth="5.5"
              />
              <motion.circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="#16d975"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray={circ}
                initial={
                  prefersReducedMotion
                    ? { strokeDashoffset: ringOffset }
                    : { strokeDashoffset: circ }
                }
                animate={{ strokeDashoffset: ringOffset }}
                transition={{
                  duration: 1.3,
                  ease: EASE_REDLINE,
                  delay: 0.3,
                }}
                style={{ filter: "drop-shadow(0 0 4px rgba(22,217,117,0.5))" }}
              />
            </svg>
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE_REDLINE, delay: 1.0 }}
              className="absolute inset-0 flex items-center justify-center font-mono text-[#f5f1e8]"
              style={{
                fontSize: "clamp(11px, 3.5cqi, 20px)",
                fontWeight: 700,
              }}
            >
              78
            </motion.div>
          </div>

          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 6 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE_REDLINE, delay: 1.1 }}
            className="flex w-full items-center rounded-sm border"
            style={{
              gap: "8%",
              padding: "9% 10%",
              backgroundColor: "rgba(245,241,232,0.03)",
              borderColor: "rgba(245,241,232,0.07)",
            }}
          >
            <div className="h-1.25 w-1.25 shrink-0 rounded-full bg-[#16d975]" />
            <div className="flex min-w-0 flex-1 flex-col gap-0.75">
              <div className="h-0.75 w-[75%] rounded-full bg-[#a8a396]/40" />
              <div className="h-0.5 w-[50%] rounded-full bg-[#7c786c]/40" />
            </div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-3 rounded-[22px]"
          initial={{ opacity: 0.3 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : { opacity: [0.3, 0.6, 0.3] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.5,
                }
          }
          style={{
            boxShadow: "0 0 50px rgba(22,217,117,0.15)",
          }}
        />
      </motion.div>
    </div>
  );
}

const EASE_CHAPTERMADE: [number, number, number, number] = [0, 0, 0.58, 1];

function ChapterMadeSlide() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const fadeUp = (delay: number, duration: number, yFrom: number) =>
    prefersReducedMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y: yFrom },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay, ease: EASE_CHAPTERMADE },
        };

  return (
    <div
      className="absolute inset-0 flex flex-col overflow-hidden"
      style={{
        containerType: "inline-size",
        backgroundColor: "#0f0f0f",
        fontFamily: "var(--font-chaptermade), system-ui, sans-serif",
      }}
    >
      <Image
        src="/assets/flatirons.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(15,15,15,0.45) 40%, rgba(15,15,15,0.9) 100%)",
        }}
      />

      <motion.nav
        {...fadeUp(0.15, 0.4, -20)}
        className="relative z-10 mx-auto flex w-full items-center justify-between rounded-full border border-white/10 backdrop-blur-md"
        style={{
          marginTop: "clamp(10px, 2.5cqi, 22px)",
          paddingInline: "clamp(10px, 2cqi, 18px)",
          paddingBlock: "clamp(5px, 1cqi, 8px)",
          width: "clamp(200px, 70cqi, 520px)",
          backgroundColor: "rgba(0,0,0,0.35)",
          fontSize: "clamp(0.5rem, 1.3cqi, 0.75rem)",
        }}
      >
        <div className="flex items-center gap-[6%]">
          <div
            className="flex shrink-0 items-center justify-center rounded-[20%] font-bold text-white"
            style={{
              width: "clamp(14px, 2.6cqi, 22px)",
              height: "clamp(14px, 2.6cqi, 22px)",
              fontSize: "clamp(6px, 1cqi, 10px)",
              backgroundImage: "linear-gradient(135deg, #c4a574, #d97744)",
            }}
          >
            CM
          </div>
          <span
            className="font-bold tracking-tight text-white"
            style={{ fontSize: "clamp(0.55rem, 1.4cqi, 0.85rem)" }}
          >
            ChapterMade
          </span>
        </div>
        <div
          className="hidden items-center gap-4 text-white/70 sm:flex"
          style={{ fontSize: "clamp(0.45rem, 1.1cqi, 0.7rem)" }}
        >
          <span>Features</span>
          <span>How it works</span>
          <span>Pricing</span>
        </div>
      </motion.nav>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.div
          {...fadeUp(0.35, 0.5, 16)}
          className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm"
          style={{
            gap: "clamp(4px, 1cqi, 8px)",
            paddingInline: "clamp(8px, 1.8cqi, 16px)",
            paddingBlock: "clamp(3px, 0.7cqi, 6px)",
            marginBottom: "clamp(10px, 2.2cqi, 22px)",
          }}
        >
          <StarIcon />
          <span
            className="font-medium tracking-wide text-white/90"
            style={{ fontSize: "clamp(0.45rem, 1.2cqi, 0.7rem)" }}
          >
            Trusted by 2,200+ members
          </span>
        </motion.div>

        <motion.h3
          {...fadeUp(0.45, 0.6, 24)}
          className="font-black tracking-tight text-white"
          style={{
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            fontSize: "clamp(1.4rem, 6.5cqi, 3.75rem)",
          }}
        >
          Professional Composites
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #d4c4a8, #c4a574, #d97744)",
              WebkitBackgroundClip: "text",
            }}
          >
            Made Simple
          </span>
        </motion.h3>

        <motion.p
          {...fadeUp(0.6, 0.5, 16)}
          className="text-white/60"
          style={{
            marginTop: "clamp(8px, 1.8cqi, 18px)",
            maxWidth: "clamp(200px, 56cqi, 420px)",
            fontSize: "clamp(0.55rem, 1.5cqi, 0.85rem)",
            lineHeight: 1.55,
          }}
        >
          End-to-end composite management built by Greek life, for Greek life.
        </motion.p>

        <motion.div
          {...fadeUp(0.75, 0.5, 16)}
          className="flex items-center"
          style={{
            gap: "clamp(6px, 1.4cqi, 12px)",
            marginTop: "clamp(10px, 2.2cqi, 22px)",
          }}
        >
          <div
            className="inline-flex items-center rounded-full font-semibold text-white"
            style={{
              gap: "clamp(4px, 0.8cqi, 8px)",
              paddingInline: "clamp(10px, 2cqi, 18px)",
              paddingBlock: "clamp(5px, 1.1cqi, 10px)",
              fontSize: "clamp(0.55rem, 1.4cqi, 0.8rem)",
              backgroundImage: "linear-gradient(135deg, #c4a574, #d97744)",
              boxShadow: "0 0 20px rgba(196,165,116,0.3)",
            }}
          >
            Start Your Composite
            <ArrowRightIcon />
          </div>
          <div
            className="inline-flex items-center rounded-full border border-white/25 font-semibold text-white"
            style={{
              paddingInline: "clamp(10px, 2cqi, 18px)",
              paddingBlock: "clamp(5px, 1.1cqi, 10px)",
              fontSize: "clamp(0.55rem, 1.4cqi, 0.8rem)",
            }}
          >
            See How It Works
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#c4a574"
      stroke="#c4a574"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{
        width: "clamp(9px, 1.8cqi, 14px)",
        height: "clamp(9px, 1.8cqi, 14px)",
      }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{
        width: "clamp(9px, 1.8cqi, 14px)",
        height: "clamp(9px, 1.8cqi, 14px)",
      }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
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
