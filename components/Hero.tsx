"use client";

import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-8 lg:grid-cols-[9fr_11fr] lg:gap-14 xl:gap-20">
          <div>
            <motion.h1
              className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-primary sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ y: 32, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0, ease }}
            >
              <span className="font-light">Lucas</span>{" "}
              <span className="font-extrabold text-accent">Moraca</span>
            </motion.h1>

            <motion.p
              className="mt-4 font-display text-xs font-light uppercase tracking-[0.22em] text-secondary sm:text-sm"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              Product Builder &amp; Designer
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mt-8 h-px w-16 origin-left bg-accent"
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
          </div>

          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
