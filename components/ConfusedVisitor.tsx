"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const NAV_BUTTONS = [
  { x: 110, label: "menu?" },
  { x: 225, label: "products" },
  { x: 340, label: "about?" },
  { x: 455, label: "contact" },
];

export default function ConfusedVisitor() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="w-full">
      <style>{css}</style>

      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-4">
          <div
            className="gold-foil-divider h-px w-12 sm:w-20"
            aria-hidden="true"
          />
          <p className="font-display text-[11px] font-light uppercase tracking-[0.28em] text-secondary">
            The Friction
          </p>
          <div
            className="gold-foil-divider h-px w-12 sm:w-20"
            aria-hidden="true"
          />
        </div>

        <motion.h2
          initial={prefersReducedMotion ? false : { y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease }}
          className="mt-6 font-serif text-[clamp(1.75rem,5.5vw,2.5rem)] italic leading-[1.08] tracking-tight text-primary sm:text-[40px] md:text-[48px]"
        >
          Every dead end is a{" "}
          <span className="gold-foil font-extrabold not-italic">
            dropped sale
          </span>
          .
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? false : { y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-4 font-display text-sm font-light leading-relaxed text-secondary sm:text-base"
        >
          Friction is invisible to you. Visitors feel it instantly.
        </motion.p>
      </div>

      <div className="cv-stage relative mt-10 w-full sm:mt-12">
        <svg
        className="cv-svg block h-auto w-full"
        viewBox="70 70 540 340"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Animated browser window. A cursor clicks navigation buttons that show loading spinners but never load. The visitor exits."
      >
        <defs>
          <linearGradient id="cv-screen-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--bg-surface)" />
            <stop offset="100%" stopColor="var(--bg-surface-hover)" />
          </linearGradient>

          <clipPath id="cv-browser-clip">
            <rect x="80" y="80" width="520" height="320" rx="8" />
          </clipPath>

          <linearGradient id="cv-foil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b89440" />
            <stop offset="35%" stopColor="#dcc274" />
            <stop offset="50%" stopColor="#ecd88f" />
            <stop offset="65%" stopColor="#dcc274" />
            <stop offset="100%" stopColor="#b89440" />
          </linearGradient>

          {/* Cursor path: entry → btn1 → btn3 → btn4 → close-X → exit.
              Long diagonals use quadratic curves so the cursor sweeps rather
              than straight-lining. keyPoints/keySplines below dwell at each
              click site and ease in/out of each travel segment. */}
          <path
            id="cv-cursor-path"
            d="M 620 440 Q 450 380 155 207 L 155 207 L 385 207 L 385 207 L 500 207 L 500 207 Q 300 70 94 92 L 40 40"
            fill="none"
            stroke="none"
          />
        </defs>

        {/* Browser frame */}
        <g>
          <rect
            x="80"
            y="80"
            width="520"
            height="320"
            rx="8"
            fill="url(#cv-screen-fill)"
            stroke="var(--accent)"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />

          {/* Top chrome */}
          <rect
            x="80"
            y="80"
            width="520"
            height="32"
            rx="8"
            fill="var(--text-primary)"
            fillOpacity="0.05"
          />
          <rect
            x="80"
            y="100"
            width="520"
            height="12"
            fill="var(--text-primary)"
            fillOpacity="0.05"
          />
          <line
            x1="80"
            y1="112"
            x2="600"
            y2="112"
            stroke="var(--accent)"
            strokeOpacity="0.22"
            strokeWidth="0.5"
          />

          {/* Traffic lights */}
          <circle cx="98" cy="96" r="5" fill="#ff5f57" fillOpacity="0.85" />
          <circle cx="116" cy="96" r="5" fill="#febc2e" fillOpacity="0.85" />
          <circle cx="134" cy="96" r="5" fill="#28c840" fillOpacity="0.85" />

          {/* URL bar */}
          <rect
            x="160"
            y="88"
            width="280"
            height="16"
            rx="3"
            fill="var(--bg-body)"
            stroke="var(--accent)"
            strokeOpacity="0.2"
            strokeWidth="0.5"
          />
          <text
            x="172"
            y="100"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            fill="var(--text-secondary)"
          >
            yoursite.com
          </text>
        </g>

        {/* Page content (clipped to browser bounds) */}
        <g clipPath="url(#cv-browser-clip)">
          {/* Title skeletons */}
          <rect
            x="110"
            y="135"
            width="180"
            height="14"
            rx="2"
            fill="var(--text-primary)"
            fillOpacity="0.18"
          />
          <rect
            x="110"
            y="155"
            width="120"
            height="10"
            rx="2"
            fill="var(--text-primary)"
            fillOpacity="0.10"
          />

          {/* Nav buttons */}
          {NAV_BUTTONS.map((b) => (
            <g key={b.label}>
              <rect
                x={b.x}
                y="195"
                width="100"
                height="32"
                rx="4"
                fill="var(--bg-surface-hover)"
                stroke="var(--accent)"
                strokeOpacity="0.22"
                strokeWidth="0.5"
              />
              <text
                x={b.x + 50}
                y="215"
                fontFamily="ui-monospace, monospace"
                fontSize="10"
                fill="var(--text-secondary)"
                textAnchor="middle"
              >
                {b.label}
              </text>
            </g>
          ))}

          {/* Content cards */}
          {[110, 350].map((x, i) => (
            <g key={i}>
              <rect
                x={x}
                y="255"
                width="220"
                height="100"
                rx="4"
                fill="var(--bg-surface-hover)"
                stroke="var(--accent)"
                strokeOpacity="0.22"
                strokeWidth="0.5"
              />
              <rect
                x={x + 15}
                y="270"
                width="140"
                height="8"
                rx="1"
                fill="var(--text-primary)"
                fillOpacity="0.18"
              />
              <rect
                x={x + 15}
                y="285"
                width="180"
                height="6"
                rx="1"
                fill="var(--text-primary)"
                fillOpacity="0.10"
              />
              <rect
                x={x + 15}
                y="297"
                width="160"
                height="6"
                rx="1"
                fill="var(--text-primary)"
                fillOpacity="0.10"
              />
              <rect
                x={x + 15}
                y="309"
                width="120"
                height="6"
                rx="1"
                fill="var(--text-primary)"
                fillOpacity="0.10"
              />
              <rect
                x={x + 15}
                y="330"
                width="60"
                height="18"
                rx="3"
                fill="var(--accent)"
                fillOpacity="0.45"
              />
            </g>
          ))}

          {/* Click ripples on each button */}
          <circle
            className="cv-ripple cv-ripple-1"
            cx="160"
            cy="211"
            r="0"
            fill="#dcc274"
          />
          <circle
            className="cv-ripple cv-ripple-2"
            cx="390"
            cy="211"
            r="0"
            fill="#dcc274"
          />
          <circle
            className="cv-ripple cv-ripple-3"
            cx="505"
            cy="211"
            r="0"
            fill="#dcc274"
          />

          {/* Spinners that appear after click and never resolve.
              Outer <g> handles fade and position. Inner <circle> uses SMIL
              animateTransform to rotate around its own center reliably. */}
          <g className="cv-spinner cv-spinner-1" transform="translate(160 211)">
            <circle
              cx="0"
              cy="0"
              r="10"
              fill="none"
              stroke="#dcc274"
              strokeWidth="2.25"
              strokeDasharray="15 47"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <g className="cv-spinner cv-spinner-2" transform="translate(390 211)">
            <circle
              cx="0"
              cy="0"
              r="10"
              fill="none"
              stroke="#dcc274"
              strokeWidth="2.25"
              strokeDasharray="15 47"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <g className="cv-spinner cv-spinner-3" transform="translate(505 211)">
            <circle
              cx="0"
              cy="0"
              r="10"
              fill="none"
              stroke="#dcc274"
              strokeWidth="2.25"
              strokeDasharray="15 47"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>

        {/* Close-X expansion ripple (outside clip so it sits on chrome) */}
        <circle
          className="cv-ripple cv-ripple-close"
          cx="98"
          cy="96"
          r="0"
          fill="#ff5f57"
        />

        {/* Cursor: follows the path defined in <defs>, dwelling at each click */}
        <g className="cv-cursor">
          <path
            d="M 0 0 L 0 14 L 4 11 L 7 17 L 9 16 L 6 10 L 11 10 Z"
            fill="#f4ecd8"
            stroke="#0a0807"
            strokeWidth="0.5"
          />
          <animateMotion
            dur="14s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.09;0.15;0.23;0.28;0.35;0.41;0.55;0.61;0.66;1"
            keyPoints="0;0.382;0.382;0.551;0.551;0.635;0.635;0.945;0.945;1;1"
            keySplines="0.2 0.9 0.25 1;0 0 1 1;0.7 0 0.3 1;0 0 1 1;0.7 0 0.3 1;0 0 1 1;0.3 0 0.2 1;0 0 1 1;0.7 0 1 1;0 0 1 1"
          >
            <mpath href="#cv-cursor-path" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="1;1;0;0"
            keyTimes="0;0.65;0.68;1"
            dur="14s"
            repeatCount="indefinite"
          />
        </g>

        {/* End reveal: dim the page and surface the message */}
        <rect
          className="cv-end-overlay"
          x="80"
          y="80"
          width="520"
          height="320"
          rx="8"
          fill="var(--bg-body)"
          opacity="0"
        />
        <g className="cv-end-text">
          <text
            x="340"
            y="240"
            fontFamily="var(--font-serif), Georgia, serif"
            fontStyle="italic"
            fontSize="22"
            fill="url(#cv-foil)"
            textAnchor="middle"
          >
            visitors don&apos;t stay confused.
          </text>
          <text
            x="340"
            y="268"
            fontFamily="ui-monospace, monospace"
            fontSize="12"
            fill="var(--text-secondary)"
            textAnchor="middle"
            letterSpacing="0.08em"
          >
            they leave.
          </text>
        </g>
      </svg>
      </div>
    </div>
  );
}

const css = `
.cv-stage { isolation: isolate; }
.cv-svg { display: block; }

/* Click ripples — snap visible at the exact moment the cursor lands,
   expand and fade in ~280ms for a sharp tap feel. */
.cv-ripple { will-change: r, opacity; }

.cv-ripple-1 { animation: cv-ripple-1 14s linear infinite; }
@keyframes cv-ripple-1 {
  0%, 8.99% { r: 0; opacity: 0; }
  9%        { r: 4; opacity: 0.95; }
  11%       { r: 24; opacity: 0; }
  100%      { r: 24; opacity: 0; }
}

.cv-ripple-2 { animation: cv-ripple-2 14s linear infinite; }
@keyframes cv-ripple-2 {
  0%, 22.99% { r: 0; opacity: 0; }
  23%        { r: 4; opacity: 0.95; }
  25%        { r: 24; opacity: 0; }
  100%       { r: 24; opacity: 0; }
}

.cv-ripple-3 { animation: cv-ripple-3 14s linear infinite; }
@keyframes cv-ripple-3 {
  0%, 34.99% { r: 0; opacity: 0; }
  35%        { r: 4; opacity: 0.95; }
  37%        { r: 24; opacity: 0; }
  100%       { r: 24; opacity: 0; }
}

.cv-ripple-close { animation: cv-ripple-close 14s linear infinite; }
@keyframes cv-ripple-close {
  0%, 54.99% { r: 0; opacity: 0; }
  55%        { r: 4; opacity: 1; }
  59%        { r: 16; opacity: 0; }
  100%       { r: 16; opacity: 0; }
}

/* Spinners snap in on click and persist till the page is abandoned */
.cv-spinner { opacity: 0; }

.cv-spinner-1 { animation: cv-fade-1 14s linear infinite; }
@keyframes cv-fade-1 {
  0%, 8.99% { opacity: 0; }
  9%        { opacity: 1; }
  66%       { opacity: 1; }
  70%, 100% { opacity: 0; }
}

.cv-spinner-2 { animation: cv-fade-2 14s linear infinite; }
@keyframes cv-fade-2 {
  0%, 22.99% { opacity: 0; }
  23%        { opacity: 1; }
  66%        { opacity: 1; }
  70%, 100%  { opacity: 0; }
}

.cv-spinner-3 { animation: cv-fade-3 14s linear infinite; }
@keyframes cv-fade-3 {
  0%, 34.99% { opacity: 0; }
  35%        { opacity: 1; }
  66%        { opacity: 1; }
  70%, 100%  { opacity: 0; }
}

/* End reveal — page dims after cursor exits, message holds for ~3s */
.cv-end-overlay { animation: cv-end-overlay 14s linear infinite; }
@keyframes cv-end-overlay {
  0%, 67%   { opacity: 0; }
  73%, 100% { opacity: 0.85; }
}

.cv-end-text { opacity: 0; animation: cv-end-text 14s linear infinite; }
@keyframes cv-end-text {
  0%, 70%   { opacity: 0; }
  76%, 100% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .cv-ripple,
  .cv-spinner,
  .cv-end-overlay,
  .cv-end-text {
    animation: none !important;
  }
  .cv-cursor { display: none !important; }
  .cv-spinner { opacity: 0.7; }
  .cv-end-overlay { opacity: 0.6; }
  .cv-end-text { opacity: 1; }
}
`;
