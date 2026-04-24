"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const CONFETTI_COUNT = 24;
const ease = [0.22, 1, 0.36, 1] as const;

type Particle = {
  angle: number;
  distance: number;
  rotation: number;
  delay: number;
  duration: number;
};

const buildParticles = (): Particle[] =>
  Array.from({ length: CONFETTI_COUNT }, (_, i) => {
    const angle =
      (i / CONFETTI_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    return {
      angle,
      distance: 80 + Math.random() * 70,
      rotation: (Math.random() - 0.5) * 1080,
      delay: Math.random() * 0.05,
      duration: 0.75 + Math.random() * 0.25,
    };
  });

export function useLogoEasterEgg() {
  const clickTimesRef = useRef<number[]>([]);
  const firedRef = useRef(false);
  const [bursts, setBursts] = useState<number[]>([]);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    try {
      firedRef.current =
        sessionStorage.getItem("logo-egg-fired") === "true";
    } catch {
      /* ignore */
    }
  }, []);

  const onLogoClick = useCallback(() => {
    if (firedRef.current) return;
    const now = Date.now();
    clickTimesRef.current = [...clickTimesRef.current, now].filter(
      (t) => now - t < 1000,
    );
    if (clickTimesRef.current.length < 3) return;

    firedRef.current = true;
    clickTimesRef.current = [];
    try {
      sessionStorage.setItem("logo-egg-fired", "true");
    } catch {
      /* ignore */
    }

    const id = now;
    setBursts((b) => [...b, id]);
    setToastVisible(true);
    setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 1400);
    setTimeout(() => setToastVisible(false), 5200);
  }, []);

  return {
    onLogoClick,
    overlay: (
      <>
        {bursts.map((id) => (
          <ConfettiBurst key={id} />
        ))}
        <AnimatePresence>
          {toastVisible && <EasterEggToast key="egg-toast" />}
        </AnimatePresence>
      </>
    ),
  };
}

function ConfettiBurst() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const particles = useMemo(() => buildParticles(), []);

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-7 left-9 z-60"
    >
      {particles.map((p, i) => {
        const dx = Math.cos(p.angle) * p.distance;
        const dy = Math.sin(p.angle) * p.distance;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
            animate={{
              x: dx,
              y: dy,
              opacity: 0,
              rotate: p.rotation,
              scale: 1,
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease,
            }}
            className="absolute block h-0.5 w-1.5 rounded-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #8a6d2a 0%, #f4e4a1 50%, #c9a84c 100%)",
              boxShadow: "0 0 6px rgba(201,168,76,0.45)",
            }}
          />
        );
      })}
    </div>
  );
}

function EasterEggToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease }}
      role="status"
      className="fixed right-5 bottom-5 z-60 flex max-w-xs items-center gap-3 rounded-xl border border-accent/60 bg-surface px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6),0_0_30px_-8px_rgba(201,168,76,0.45)]"
    >
      <span
        aria-hidden="true"
        className="block h-2 w-2 shrink-0 rounded-full"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #8a6d2a 0%, #f4e4a1 50%, #c9a84c 100%)",
          boxShadow: "0 0 10px rgba(201,168,76,0.5)",
        }}
      />
      <div className="flex-1 font-display text-sm font-light text-primary">
        <span className="font-serif italic">Nice eye.</span>{" "}
        <Link
          href="/hire"
          className="cursor-pointer font-display text-xs font-extrabold uppercase tracking-[0.18em] text-accent transition-opacity hover:opacity-70"
        >
          Tell me what you&apos;re building →
        </Link>
      </div>
    </motion.div>
  );
}
