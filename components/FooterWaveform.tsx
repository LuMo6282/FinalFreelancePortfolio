"use client";

import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

const WAVEFORM = Array.from({ length: 80 }, (_, i) => {
  const h = Math.round(
    6 + Math.abs(Math.sin(i * 0.43)) * 28 + Math.abs(Math.cos(i * 0.91)) * 10,
  );
  const opacity = Number(
    (0.25 + Math.abs(Math.sin(i * 0.27 + 0.5)) * 0.45).toFixed(3),
  );
  return { h, opacity };
});

const COLS = WAVEFORM.length;
const VB_WIDTH = 1200;
const VB_HEIGHT = 60;
const SLOT = VB_WIDTH / COLS;
const BAR_WIDTH = SLOT * 0.5;

export default function FooterWaveform() {
  const svgRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useMotionValueEvent(scrollVelocity, "change", (latest) => {
    if (prefersReducedMotion || !svgRef.current) return;
    const mag = Math.min(0.18, Math.abs(latest) / 3500);
    svgRef.current.style.setProperty("--pulse", String(1 + mag));
  });

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
      className="block h-10 w-full sm:h-14"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ ["--pulse" as string]: 1 }}
    >
      <defs>
        <linearGradient id="footer-wave-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="50%" stopColor="#f4e4a1" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
      </defs>
      {WAVEFORM.map(({ h, opacity }, i) => (
        <rect
          key={i}
          x={i * SLOT + (SLOT - BAR_WIDTH) / 2}
          y={VB_HEIGHT - h}
          width={BAR_WIDTH}
          height={h}
          fill="url(#footer-wave-grad)"
          opacity={opacity}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center bottom",
            transform: "scaleY(var(--pulse, 1))",
            transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      ))}
    </svg>
  );
}
