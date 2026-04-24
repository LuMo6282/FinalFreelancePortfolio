"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import MagneticButton from "./MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [sheenKey, setSheenKey] = useState(0);
  const sheenRef = useRef<HTMLSpanElement>(null);

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
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 md:grid-cols-2 md:gap-8 lg:grid-cols-[9fr_11fr] lg:gap-14 xl:gap-20">
          <div>
            <motion.h1
              className="font-display text-[clamp(2rem,10vw,2.75rem)] uppercase leading-[0.95] tracking-wide text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0, ease }}
            >
              <span className="font-light">Lucas</span>{" "}
              <span
                ref={sheenRef}
                key={sheenKey}
                className="gold-foil-sheen-once font-extrabold"
              >
                Moraca
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 font-display text-xs font-light uppercase tracking-[0.22em] text-secondary sm:text-sm"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              Freelance Developer &amp; Designer
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="gold-foil-divider mt-8 h-px w-16 origin-left"
              aria-hidden="true"
            />

            <motion.p
              className="mt-6 max-w-md font-serif text-xl italic text-secondary sm:text-2xl"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
            >
              Your brand deserves better than a template.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
            >
              <MagneticButton>
                <Link
                  href="/hire"
                  className="btn-foil-hover group inline-flex cursor-pointer items-center gap-2 rounded-full px-7 py-3 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-body shadow-[0_0_30px_-8px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
                >
                  <span>Start a project</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </MagneticButton>

              <Link
                href="#work"
                className="group relative cursor-pointer font-display text-xs font-light uppercase tracking-[0.22em] text-secondary transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
              >
                <span>See selected work</span>
                <span
                  aria-hidden="true"
                  className="gold-foil-divider absolute -bottom-1 left-0 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full"
                />
              </Link>
            </motion.div>

            <motion.p
              className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary/80"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease }}
            >
              Boulder, CO &middot; Available for new projects
            </motion.p>
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
