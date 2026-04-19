"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Build = {
  name: string;
  price: string;
  tier: number;
  timeline: string;
  description: string;
};

const builds: Build[] = [
  {
    name: "The Card",
    price: "$500+",
    tier: 1,
    timeline: "1 week + 1 week support",
    description:
      "A beautiful single-page site. Your story, your links, your contact info — all in one place. Like a digital business card that actually looks like you.",
  },
  {
    name: "The Portfolio",
    price: "$1,200+",
    tier: 2,
    timeline: "2 weeks + 2 weeks support",
    description:
      "A multi-page site to showcase your work or services. Includes a contact form. For artists, photographers, freelancers, restaurants — anyone who needs to look great online.",
  },
  {
    name: "The Storefront",
    price: "$2,500+",
    tier: 3,
    timeline: "3–4 weeks + 4 weeks support",
    description:
      "A business site that actually takes money. Products, bookings, paid events — powered by Stripe and other trusted payment tools.",
  },
  {
    name: "The Dashboard",
    price: "$5,000+",
    tier: 4,
    timeline: "4–8 weeks + 6 weeks support",
    description:
      "A site where your customers log in and see their own stuff — accounts, profiles, admin tools. For memberships, client portals, internal tools, or early-stage startups.",
  },
  {
    name: "The Full Build",
    price: "Let's talk",
    tier: 5,
    timeline: "Scoped on first call",
    description:
      "A custom-built web app. You bring the idea, I build the engine. AI features, complex logic, multi-role systems — the ambitious stuff.",
  },
];

const terms = [
  "25% deposit to start",
  "75% on launch",
  "Infinite revisions to your exact vision",
  "If my code breaks, I fix it free",
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-250 px-6">
        <div className="flex items-center justify-center gap-4">
          <div
            className="gold-foil-divider h-px w-12 sm:w-20"
            aria-hidden="true"
          />
          <p className="font-display text-[11px] font-light uppercase tracking-[0.28em] text-secondary">
            The Menu
          </p>
          <div
            className="gold-foil-divider h-px w-12 sm:w-20"
            aria-hidden="true"
          />
        </div>

        <div
          className="mt-3 flex items-center justify-center font-mono text-[10px] text-secondary/70"
          aria-hidden="true"
        >
          <span className="opacity-60">[</span>
          <span className="tracking-tight">LM</span>
          <span className="opacity-60">]</span>
          <span className="ml-0.5 text-accent">·</span>
        </div>

        <h2 className="mt-5 text-center font-serif text-5xl italic leading-[1.05] text-primary sm:text-6xl md:text-7xl">
          Websites, <span className="gold-foil">built right.</span>
        </h2>

        <p className="mt-5 text-center font-display text-base font-light tracking-wide text-secondary">
          Design <span className="text-accent">·</span> Build{" "}
          <span className="text-accent">·</span> Host — your site, built from
          scratch around your brand.
        </p>

        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-edge" aria-hidden="true" />
          <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">
            The Builds
          </p>
          <div className="h-px w-10 bg-edge" aria-hidden="true" />
        </div>

        <ul className="mt-10 divide-y divide-edge/60">
          {builds.map((b, i) => {
            const initial = prefersReducedMotion
              ? { y: 0, opacity: 1 }
              : { y: 24, opacity: 0 };

            return (
              <motion.li
                key={b.name}
                initial={initial}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.6, delay: i * 0.07, ease }
                }
                className="group relative -mx-4 rounded-2xl px-4 py-8 transition-colors duration-300 ease-out hover:bg-surface-hover sm:-mx-6 sm:px-6 sm:py-10"
              >
                <div className="grid gap-x-10 gap-y-5 md:grid-cols-[2fr_3fr]">
                  <div>
                    <TierDots tier={b.tier} />
                    <h3 className="mt-4 font-display text-[26px] font-extrabold leading-none tracking-tight text-primary sm:text-[30px]">
                      {b.name}
                    </h3>
                    <AnimatedPrice value={b.price} delay={i * 0.08} />
                    <span
                      aria-hidden="true"
                      className="gold-foil-divider mt-5 block h-px w-12 origin-left transition-transform duration-500 ease-out group-hover:scale-x-[3.5]"
                    />
                  </div>
                  <div className="md:pt-1">
                    <p className="max-w-prose font-display text-sm font-light leading-relaxed text-secondary sm:text-base">
                      {b.description}
                    </p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-secondary/70">
                      Ready in {b.timeline}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.7, delay: 0.2, ease }
          }
          className="mt-20 border-t border-edge pt-8"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {terms.map((term, i) => (
              <li
                key={term}
                className="flex items-center gap-3 font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary"
              >
                <span>{term}</span>
                {i < terms.length - 1 && (
                  <span
                    className="text-accent/50 font-mono"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-center font-serif text-sm italic text-secondary">
            Prices are starting points. Every project gets a real quote based
            on what you actually need. You always own your website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TierDots({ tier }: { tier: number }) {
  return (
    <div
      className="flex items-center gap-1.5"
      role="img"
      aria-label={`Tier ${tier} of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < tier;
        return (
          <span
            key={i}
            aria-hidden="true"
            className={`block h-1.5 w-1.5 rounded-full transition-opacity duration-300 ${
              filled ? "opacity-100" : "border border-secondary/40 opacity-70"
            }`}
            style={
              filled
                ? {
                    backgroundImage:
                      "linear-gradient(135deg, #8a6d2a 0%, #f4e4a1 50%, #c9a84c 100%)",
                    boxShadow: "0 0 6px rgba(201,168,76,0.35)",
                  }
                : undefined
            }
          />
        );
      })}
    </div>
  );
}

function AnimatedPrice({ value, delay }: { value: string; delay: number }) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  const match = value.match(/^\$(\d[\d,]*)(\+?)$/);
  const isNumeric = Boolean(match);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  const initialDisplay =
    prefersReducedMotion || !isNumeric ? value : `$0${suffix}`;

  useEffect(() => {
    if (prefersReducedMotion || !isNumeric) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        observer.disconnect();

        const duration = 900;
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const startAt = performance.now() + delay * 1000;

        const tick = (now: number) => {
          const elapsed = now - startAt;
          if (elapsed < 0) {
            raf = requestAnimationFrame(tick);
            return;
          }
          const p = Math.min(1, elapsed / duration);
          const cur = Math.round(target * easeOut(p));
          el.textContent = `$${cur.toLocaleString()}${suffix}`;
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [delay, isNumeric, target, suffix, prefersReducedMotion]);

  return (
    <span
      ref={ref}
      className="gold-foil mt-3 block font-mono text-[22px] font-bold tracking-tight tabular-nums sm:text-2xl"
    >
      {initialDisplay}
    </span>
  );
}
