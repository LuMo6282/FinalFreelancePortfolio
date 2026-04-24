"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

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

export default function LiLoSlide() {
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
