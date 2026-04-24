"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type ProjectCardProps = {
  label: string;
  title: string;
  subtitle: string;
  techStack?: string[];
  description?: string;
  href: string;
  external?: boolean;
  frameType?:
    | "browser"
    | "phone"
    | "redline-composite"
    | "lilo-strip"
    | "atrium-concept"
    | "haven-concept"
    | "slate-concept";
  screenshot?: string;
  isPlaceholder?: boolean;
  className?: string;
  index?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectCard({
  label,
  title,
  subtitle,
  techStack,
  description,
  href,
  external,
  frameType = "browser",
  screenshot,
  isPlaceholder,
  className = "",
  index = 0,
}: ProjectCardProps) {
  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--glow-x",
      `${e.clientX - rect.left}px`,
    );
    e.currentTarget.style.setProperty(
      "--glow-y",
      `${e.clientY - rect.top}px`,
    );
    e.currentTarget.style.setProperty("--glow-opacity", "1");
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty("--glow-opacity", "0");
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ y: 32, opacity: 0, scale: 0.97 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`card-foil-glow group relative flex cursor-pointer flex-col overflow-hidden rounded-card border border-edge bg-surface p-7 text-primary shadow-[0_8px_30px_-16px_rgba(0,0,0,0.5)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-[0_30px_80px_-20px_rgba(201,168,76,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none sm:p-9 ${className}`}
    >
      <div className="flex flex-col">
        <span className="font-display text-[10px] font-light uppercase tracking-[0.22em] text-secondary sm:text-[11px]">
          {label}
        </span>
        <h3 className="mt-3 font-display text-3xl font-extrabold leading-[0.95] tracking-tight text-primary sm:text-4xl md:text-5xl">
          {title}
        </h3>
        <p className="mt-2 max-w-xs font-display text-sm font-light text-secondary sm:text-base">
          {subtitle}
        </p>
        {techStack && techStack.length > 0 && (
          <p className="mt-3 font-mono text-[12px] text-secondary">
            {techStack.join(" · ")}
          </p>
        )}
        {description && (
          <p className="mt-4 max-w-md font-display text-sm font-light leading-relaxed text-secondary sm:text-[15px]">
            {description}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-1 items-end">
        {isPlaceholder ? (
          <PlaceholderArrow />
        ) : frameType === "redline-composite" ? (
          <RedlineComposite />
        ) : frameType === "lilo-strip" ? (
          <LiLoStripFrame />
        ) : frameType === "atrium-concept" ? (
          <AtriumConceptFrame />
        ) : frameType === "haven-concept" ? (
          <HavenConceptFrame />
        ) : frameType === "slate-concept" ? (
          <SlateConceptFrame />
        ) : frameType === "phone" ? (
          <PhoneFrame screenshot={screenshot} title={title} />
        ) : (
          <BrowserFrame screenshot={screenshot} title={title} />
        )}
      </div>
    </motion.a>
  );
}

function BrowserFrame({
  screenshot,
  title,
}: {
  screenshot?: string;
  title: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-edge bg-body/40">
      <div className="flex items-center gap-1.5 border-b border-edge px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c841]" />
      </div>
      <div className="relative grid aspect-16/10 place-items-center">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary sm:text-xs">
            {title}
          </span>
        )}
      </div>
    </div>
  );
}

function PhoneFrame({
  screenshot,
  title,
}: {
  screenshot?: string;
  title: string;
}) {
  return (
    <div className="mx-auto w-full max-w-65">
      <div className="overflow-hidden rounded-[36px] border border-edge bg-body/50 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="relative grid aspect-9/19 place-items-center overflow-hidden rounded-[28px] bg-body/40">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={`${title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80vw, 260px"
            />
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              {title}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const LILO_CARD_COLUMNS = [
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

function LiLoStripFrame() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-edge bg-body/40">
      <div className="flex items-center gap-1.5 border-b border-edge px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c841]" />
      </div>
      <div className="relative aspect-16/10 overflow-hidden">
        <div className="absolute inset-0 flex">
          {LILO_CARD_COLUMNS.map((col, i) => (
            <div
              key={i}
              className="relative flex-1 overflow-hidden"
              style={{ backgroundColor: col.bg }}
            >
              <Image
                src={col.src}
                alt=""
                fill
                sizes="(max-width: 640px) 25vw, 12vw"
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
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>
    </div>
  );
}

function PlaceholderArrow() {
  return (
    <div className="flex w-full items-end justify-end pt-12">
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent opacity-60 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </div>
  );
}

const redlineWordmarkContainer = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.25, staggerChildren: 0.05 },
  },
};

const redlineWordmarkLetter = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease },
  },
};

function RedlineComposite() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const letters = "redline".split("");
  const viewport = { once: true, margin: "-80px" } as const;

  return (
    <div
      className="relative w-full"
      style={{
        containerType: "inline-size",
        aspectRatio: "4 / 5",
      }}
    >
      <div
        className="absolute left-0 flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#050505] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]"
        style={{
          top: "8%",
          width: "86%",
          aspectRatio: "16 / 10",
        }}
      >
        <div className="relative flex shrink-0 items-center border-b border-white/6 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#ff5f57" }}
            />
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#febc2e" }}
            />
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#28c840" }}
            />
          </div>
          <span
            className="absolute left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/40"
            style={{ letterSpacing: "0.02em" }}
          >
            redline-app.com
          </span>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(245,241,232,0.6) 0 1px, transparent 1px 3px)",
          }}
        />

        <div className="relative flex flex-1 flex-col items-center justify-center px-4">
          <motion.h4
            aria-label="redline"
            variants={redlineWordmarkContainer}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="flex items-end"
            style={{
              fontFamily: "var(--font-redline), system-ui, sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.82,
              color: "#f5f1e8",
              fontSize: "clamp(1.15rem, 7.5cqi, 2.75rem)",
            }}
          >
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                variants={redlineWordmarkLetter}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </motion.h4>

          <motion.div
            aria-hidden
            initial={
              prefersReducedMotion
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="mt-2 h-0.75 origin-left rounded-full"
            style={{
              backgroundColor: "#ef2b2d",
              width: "clamp(45px, 20cqi, 150px)",
            }}
          />
        </div>
      </div>

      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 1.0, ease }}
        className="absolute overflow-hidden border border-white/10"
        style={{
          bottom: "3%",
          right: "3%",
          width: "32%",
          aspectRatio: "9 / 19",
          borderRadius: "clamp(14px, 4cqi, 26px)",
          backgroundColor: "#0a0a0a",
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.8), 0 0 50px -10px rgba(22,217,117,0.2), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        <div
          className="absolute left-1/2 h-0.75 -translate-x-1/2 rounded-full bg-[#111]"
          style={{ top: "5%", width: "28%" }}
        />

        <div className="absolute inset-x-[12%] top-[16%] flex flex-col items-center gap-[18%]">
          <RedlineMiniRing prefersReducedMotion={prefersReducedMotion} />
        </div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-3 rounded-3xl"
          initial={{ opacity: 0.25 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35 }
              : { opacity: [0.25, 0.5, 0.25] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.8,
                }
          }
          style={{
            boxShadow: "0 0 50px rgba(22,217,117,0.18)",
          }}
        />
      </motion.div>
    </div>
  );
}

function BrowserChrome({
  url,
  dark = false,
}: {
  url: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center border-b px-3 py-2 ${
        dark ? "border-white/8" : "border-black/8"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <span
        className={`absolute left-1/2 -translate-x-1/2 font-mono text-[9px] ${
          dark ? "text-white/40" : "text-black/40"
        }`}
        style={{ letterSpacing: "0.02em" }}
      >
        {url}
      </span>
    </div>
  );
}

function AtriumConceptFrame() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-edge shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]"
      style={{ backgroundColor: "#efe9dc" }}
    >
      <BrowserChrome url="atriumstudio.co" />
      <div
        className="relative aspect-16/10 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #efe9dc 0%, #e3dcca 55%, #d6cdb5 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1a1a1a 0 1px, transparent 1px 18px), repeating-linear-gradient(90deg, #1a1a1a 0 1px, transparent 1px 18px)",
          }}
        />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <p
            className="font-mono text-[8px] uppercase tracking-[0.3em]"
            style={{ color: "#6b5f44" }}
          >
            Est. 2019 — Denver, CO
          </p>
          <h4
            className="mt-2 leading-[0.92]"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.3rem, 5.5cqi, 2.5rem)",
              color: "#1f1a12",
              letterSpacing: "-0.01em",
            }}
          >
            Atrium
          </h4>
          <div
            aria-hidden
            className="mt-2 h-px w-16"
            style={{ backgroundColor: "#8a7b5c" }}
          />
          <p
            className="mt-2 font-display uppercase tracking-[0.28em]"
            style={{
              fontSize: "clamp(7px, 1.8cqi, 10px)",
              color: "#5a4f38",
              fontWeight: 300,
            }}
          >
            Residential Architecture
          </p>
        </div>
      </div>
    </div>
  );
}

function HavenConceptFrame() {
  const swatches = [
    { bg: "#3a2418", label: "Ethiopia · Guji" },
    { bg: "#5b3a22", label: "Colombia · Huila" },
    { bg: "#7a5332", label: "Kenya · Nyeri" },
  ];
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-edge bg-[#f2ece0]">
      <BrowserChrome url="havenroasters.com" />
      <div className="relative aspect-16/10 overflow-hidden">
        <div className="absolute inset-0 flex">
          {swatches.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-1 flex-col items-center justify-end overflow-hidden px-2 pb-3"
              style={{ backgroundColor: s.bg }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center 35%, rgba(255,245,220,0.22), transparent 65%)",
                }}
              />
              <span
                className="relative font-mono uppercase tracking-[0.22em] text-center"
                style={{
                  color: "#f5edd8",
                  fontSize: "clamp(6px, 1.5cqi, 9px)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 top-0 flex flex-col items-center pt-[7%]">
          <p
            className="font-mono uppercase tracking-[0.32em]"
            style={{
              color: "rgba(245,237,216,0.75)",
              fontSize: "clamp(7px, 1.6cqi, 9px)",
            }}
          >
            Single Origin · Small Batch
          </p>
          <h4
            className="mt-1 leading-none"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#f5edd8",
              fontSize: "clamp(1.4rem, 6.5cqi, 2.9rem)",
              letterSpacing: "-0.015em",
            }}
          >
            Haven
          </h4>
        </div>
      </div>
    </div>
  );
}

function SlateConceptFrame() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/8 bg-[#0b0d11] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      <BrowserChrome url="slate.app" dark />
      <div
        className="relative aspect-16/10 overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 80% at 15% 0%, rgba(80,140,255,0.22), transparent 55%), radial-gradient(120% 80% at 100% 100%, rgba(140,90,255,0.18), transparent 55%), #0b0d11",
        }}
      >
        <div className="relative flex h-full flex-col justify-between px-[6%] py-[7%]">
          <div>
            <p
              className="font-mono uppercase tracking-[0.28em] text-white/40"
              style={{ fontSize: "clamp(7px, 1.6cqi, 9px)" }}
            >
              v2.4 · Live
            </p>
            <h4
              className="mt-1 font-display font-extrabold leading-[0.95] text-white"
              style={{
                fontSize: "clamp(1.2rem, 6cqi, 2.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Ship signals,
              <br />
              not opinions.
            </h4>
          </div>
          <div className="flex items-end gap-[3%]">
            {[18, 34, 26, 48, 38, 62, 54, 72].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    i === 7
                      ? "linear-gradient(180deg, #7aa7ff 0%, #5a82e5 100%)"
                      : "rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(120,160,255,0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
}

function RedlineMiniRing({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const score = 78;
  const ringOffset = circ - (score / 100) * circ;
  const viewport = { once: true, margin: "-80px" } as const;

  return (
    <div className="relative w-[80%]" style={{ aspectRatio: "1 / 1" }}>
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
          whileInView={{ strokeDashoffset: ringOffset }}
          viewport={viewport}
          transition={{ duration: 1.3, ease, delay: 1.15 }}
          style={{ filter: "drop-shadow(0 0 4px rgba(22,217,117,0.5))" }}
        />
      </svg>
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.4, ease, delay: 1.85 }}
        className="absolute inset-0 flex items-center justify-center font-mono text-[#f5f1e8]"
        style={{
          fontSize: "clamp(10px, 3.5cqi, 18px)",
          fontWeight: 700,
        }}
      >
        78
      </motion.div>
    </div>
  );
}
