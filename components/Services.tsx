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
  inclusions: string[];
};

const builds: Build[] = [
  {
    name: "The Card",
    price: "$750+",
    tier: 1,
    timeline: "Ready in 1 week",
    description:
      "A beautiful single-page site. Your story, your links, your contact info, all in one place. Like a digital business card that actually looks like you.",
    inclusions: [
      "Custom design from scratch, no template",
      "Mobile responsive",
      "Contact form or booking link",
      "Domain setup",
      "Basic SEO and analytics",
      "1 round of revisions",
    ],
  },
  {
    name: "The Portfolio",
    price: "$1,500+",
    tier: 2,
    timeline: "Ready in 2 weeks",
    description:
      "A multi-page site to showcase your work or services. Includes a contact form. For artists, photographers, freelancers, restaurants, anyone who needs to look great online.",
    inclusions: [
      "4 to 6 custom-designed pages",
      "Mobile responsive",
      "Contact form, booking integration, or lead capture",
      "Image galleries or service pages as needed",
      "SEO and analytics setup",
      "2 rounds of revisions",
    ],
  },
  {
    name: "The Storefront",
    price: "$2,500+",
    tier: 3,
    timeline: "Ready in 2 to 3 weeks",
    description:
      "A small e-commerce site that actually sells. For brands with a focused product line. Built on Shopify or with Stripe Checkout, depending on what fits.",
    inclusions: [
      "Custom design from scratch",
      "Up to 25 products configured with variants and imagery",
      "Payment, shipping, and tax setup",
      "Mobile responsive",
      "Cart, checkout, and order management",
      "Admin training so you can run it yourself",
      "2 rounds of revisions",
    ],
  },
  {
    name: "The Brand Storefront",
    price: "$5,000+",
    tier: 4,
    timeline: "Ready in 2 to 3 weeks",
    description:
      "A premium e-commerce site for brands ready to compete at the top of their category. Built on Shopify with editorial content, custom design, and a real brand experience. For DTC brands, established businesses, and serious launches.",
    inclusions: [
      "Custom design and editorial content sections built around your brand",
      "100+ product support with bulk management",
      "Custom product pages, collection pages, and discovery UX",
      "Mobile-first refinement, micro-interactions, performance tuning",
      "Email and analytics integration",
      "Brand portal and supplier integrations as needed",
      "Admin training and bulk product management setup",
      "2 rounds of revisions per phase",
    ],
  },
  {
    name: "The Dashboard",
    price: "$6,500+",
    tier: 5,
    timeline: "Ready in 4 to 8 weeks",
    description:
      "A site where your customers log in and see their own stuff: accounts, profiles, admin tools. For memberships, client portals, internal tools, or early-stage startups.",
    inclusions: [
      "Custom design from scratch",
      "Authentication and user accounts",
      "Role-based permissions",
      "Database, admin panel, and API",
      "Mobile responsive",
      "Deployment and hosting setup",
      "2 rounds of revisions per phase",
    ],
  },
  {
    name: "The Full Build",
    price: "Let's talk",
    tier: 6,
    timeline: "Scoped on first call",
    description:
      "A custom-built web app. You bring the idea, I build the engine. AI features, complex logic, multi-role systems, the ambitious stuff.",
    inclusions: [],
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
    <section id="services" className="py-16 sm:py-24 md:py-32">
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
                    <TierDots tier={b.tier} />
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
      aria-label={`Tier ${tier} of 6`}
    >
      {Array.from({ length: 6 }, (_, i) => {
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
