"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

type Build = {
  name: string;
  price: string;
  tier: number;
  timeline: string;
  description: string;
  inclusions: string[];
  popular?: boolean;
};

const builds: Build[] = [
  {
    name: "Launch",
    price: "$2,000+",
    tier: 1,
    timeline: "Ships in 2 weeks",
    description:
      "A clean, professional website for businesses that need to show up well online.",
    inclusions: [
      "Up to 5 pages",
      "Custom design",
      "Mobile-ready",
    ],
  },
  {
    name: "Growth",
    price: "$3,500+",
    tier: 2,
    timeline: "Ships in 3 weeks",
    description: "Built to actually move the needle.",
    inclusions: [
      "Up to 8 pages",
      "Custom design with editing access",
      "Lead-capture integrations",
      "30 days of post-launch support",
    ],
    popular: true,
  },
  {
    name: "Signature",
    price: "$6,000+",
    tier: 3,
    timeline: "Ships in 4–5 weeks",
    description: "When the website is the business.",
    inclusions: [
      "Fully custom",
      "Unlimited pages",
      "Advanced features",
      "60 days of post-launch support",
    ],
  },
];

const terms = [
  "50% deposit to start, 50% on launch",
  "Two rounds of revisions included per phase, additional revisions billed hourly",
  "30-day post-launch warranty: if my code breaks, I fix it free",
  "All projects get a real quote based on actual scope",
  "You always own your website",
];

export default function Services() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <section id="services" className="pb-16 sm:pb-24 md:pb-32">
      <div className="mx-auto max-w-250 px-5 sm:px-6">
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

        <h2 className="mt-5 text-center font-serif text-[clamp(2.25rem,9vw,3rem)] italic leading-[1.05] text-primary sm:text-6xl md:text-7xl">
          Websites, <span className="gold-foil">built right.</span>
        </h2>

        <p className="mt-5 text-center font-display text-base font-light tracking-wide text-secondary">
          Design <span className="text-accent">·</span> Build{" "}
          <span className="text-accent">·</span> Host. Your site, built from
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
                className="group relative -mx-3 rounded-2xl px-3 py-6 transition-colors duration-300 ease-out hover:bg-surface-hover sm:-mx-6 sm:px-6 sm:py-10"
              >
                <div className="grid gap-x-10 gap-y-5 md:grid-cols-[2fr_3fr]">
                  <div>
                    <div className="flex items-center gap-3">
                      <TierDots tier={b.tier} />
                      {b.popular && (
                        <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-accent">
                          Most popular
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 font-display text-[22px] font-extrabold leading-none tracking-tight text-primary sm:text-[30px]">
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
                    {b.inclusions.length > 0 && (
                      <ul className="mt-5 max-w-prose space-y-1.5 font-display text-sm font-light leading-relaxed text-secondary/85 sm:text-[15px]">
                        {b.inclusions.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              className="font-mono text-accent/60"
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-secondary/70">
                      {b.timeline}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <motion.p
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.1, ease }
          }
          className="mt-10 text-center font-serif text-base italic text-secondary sm:text-lg"
        >
          Something else? For startups, MVPs, or anything custom, let&apos;s
          talk.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.7, delay: 0.15, ease }
          }
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-edge" aria-hidden="true" />
            <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.35em] text-primary">
              The Cleanup
            </p>
            <div className="h-px w-10 bg-edge" aria-hidden="true" />
          </div>

          <div className="group/cleanup relative mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-edge bg-surface/50 px-6 py-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] sm:px-12 sm:py-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative grid gap-x-12 gap-y-8 md:grid-cols-[3fr_2fr] md:items-start">
              <div>
                <h3 className="font-serif text-[clamp(1.5rem,4.5vw,2rem)] italic leading-[1.15] text-primary sm:text-[34px]">
                  Already have a site? Just need it{" "}
                  <span className="gold-foil font-extrabold not-italic">
                    cleaned up.
                  </span>
                </h3>
                <p className="mt-5 max-w-prose font-display text-sm font-light leading-relaxed text-secondary sm:text-base">
                  Sometimes the site doesn&apos;t need to be rebuilt. It needs
                  a designer who actually cares.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-1.5 font-display text-sm font-light leading-relaxed text-secondary/85 sm:grid-cols-2 sm:text-[15px]">
                  {[
                    "Layout fixes",
                    "Mobile cleanup",
                    "Copy refresh",
                    "Performance tune-up",
                    "Brand alignment",
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className="font-mono text-accent/60"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:border-l md:border-edge md:pl-12">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-secondary/70">
                  Most cleanups
                </p>
                <p className="gold-foil mt-3 font-mono text-[26px] font-bold tracking-tight tabular-nums sm:text-[30px]">
                  $500–$1,500
                </p>
                <p className="mt-4 max-w-prose font-display text-sm font-light leading-relaxed text-secondary sm:text-[15px]">
                  Pricing by quote. Send me your URL and I&apos;ll send you a
                  number within 24 hours.
                </p>

                <div className="mt-7">
                  <MagneticButton>
                    <Link
                      href="#contact"
                      className="btn-foil-hover group/cta inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-display text-[11px] font-extrabold uppercase tracking-[0.18em] text-body shadow-[0_0_30px_-8px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
                    >
                      <span>Get a quote</span>
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 ease-out group-hover/cta:translate-x-1"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
      aria-label={`Tier ${tier} of 3`}
    >
      {Array.from({ length: 3 }, (_, i) => {
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
