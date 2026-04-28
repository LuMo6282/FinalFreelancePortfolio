"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ConfusedVisitor from "./ConfusedVisitor";
import HeroCarousel from "./HeroCarousel";
import MagneticButton from "./MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  "CRM & customer pipelines",
  "Email automation",
  "Ecommerce integrations",
  "Payment flows",
  "Booking & scheduling",
  "Custom admin dashboards",
  "Workflow automation",
  "AI integrations",
  "Internal tools",
  "Analytics & tracking",
];

export default function Hero() {
  const [sheenKey, setSheenKey] = useState(0);
  const sheenRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = sheenRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSheenKey((k) => k + 1);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="flex min-h-svh items-center pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 lg:pt-32">
        <div className="mx-auto w-full max-w-300 px-5 sm:px-6">
          <div className="flex w-full flex-col items-center gap-10 sm:gap-12">
            <div className="flex max-w-3xl flex-col items-center gap-3 text-center sm:gap-4">
              <motion.p
                className="font-serif text-lg italic text-secondary sm:text-xl"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0, ease }}
              >
                Hi, I&apos;m Lucas.
              </motion.p>

              <motion.h1
                data-hero-heading
                className="font-display text-[clamp(1.75rem,7vw,3rem)] font-light leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl"
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease }}
              >
                So you&apos;re shopping for a{" "}
                <span
                  ref={sheenRef}
                  key={sheenKey}
                  className="gold-foil-sheen-once font-extrabold"
                >
                  developer
                </span>
                .
              </motion.h1>

              <motion.p
                className="font-serif text-lg italic text-secondary sm:text-xl md:text-2xl"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
              >
                Here&apos;s my work. Let&apos;s see if we&apos;re a fit.
              </motion.p>
            </div>

            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            className="mx-auto mb-12 max-w-3xl sm:mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease }}
          >
            <ConfusedVisitor />
          </motion.div>

          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              className="font-serif text-[clamp(1.75rem,5.5vw,2.5rem)] italic leading-[1.08] tracking-tight text-primary sm:text-[40px] md:text-[48px]"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="gold-foil font-extrabold not-italic">
                Stop
              </span>{" "}
              turning customers and clients away.
            </motion.h2>

            <motion.p
              className="mx-auto mt-3 max-w-xl font-serif text-lg italic text-secondary sm:text-xl"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
            >
              Let&apos;s build something special.
            </motion.p>

            <motion.p
              className="mx-auto mt-6 max-w-xl font-display text-base font-light leading-relaxed text-secondary sm:text-lg"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
            >
              We&apos;re entering a new era where the businesses with the least
              friction win. Let me handle the hard parts. You reap the rewards.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-4"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
            >
              <MagneticButton>
                <Link
                  href="/hire"
                  className="btn-foil-hover group inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-body shadow-[0_0_30px_-8px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
                >
                  <span>Book your project</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.p
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary/80"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
            >
              Boulder, CO &middot; Available for new projects
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 border-y border-edge bg-surface/40"
          aria-label="Capabilities"
          role="region"
        >
          <div className="marquee-mask overflow-hidden py-4">
            <motion.div
              className="flex w-max"
              animate={prefersReducedMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={{
                duration: 55,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex shrink-0 items-center"
                >
                  {SERVICES.map((s) => (
                    <li
                      key={`${copy}-${s}`}
                      className="flex items-center font-mono text-[12px] text-secondary"
                    >
                      <span className="whitespace-nowrap">{s}</span>
                      <span aria-hidden className="mx-6 text-accent/60">
                        &middot;
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
