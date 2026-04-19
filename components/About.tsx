"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PHOTO_SRC: string | null = "/assets/pfp.jpeg";
const ease = [0.22, 1, 0.36, 1] as const;

const linkClass =
  "rounded-sm font-display font-light uppercase tracking-[0.18em] text-accent transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_1.6fr] lg:gap-20">
        <motion.div
          initial={{ x: -32, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="w-full max-w-sm lg:sticky lg:top-28"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-full bg-surface shadow-[16px_16px_0_0_rgba(255,255,255,0.95)] dark:shadow-[16px_16px_0_0_rgba(0,0,0,0.75)]">
            {PHOTO_SRC ? (
              <Image
                src={PHOTO_SRC}
                alt="Lucas Moraca"
                fill
                className="scale-125 object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            ) : (
              <div className="grid h-full w-full place-items-center font-display text-[10px] font-light uppercase tracking-[0.22em] text-secondary">
                Photo
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 32, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
            About
          </p>
          <h2 className="mt-4 font-serif text-5xl italic leading-[1.02] tracking-tight text-primary sm:text-[56px] md:text-[64px]">
            About the builder.
          </h2>
          <p className="mt-3 font-display text-base font-light text-secondary">
            Boulder, CO
          </p>

          <div className="mt-8 h-px w-12 gold-foil-divider" aria-hidden="true" />

          <div className="mt-8 max-w-xl font-display text-base font-light leading-relaxed text-secondary sm:text-[17px]">
            <p>
              <span
                aria-hidden="true"
                className="float-left mt-1 mr-3 font-serif text-6xl leading-[0.85] text-accent italic sm:text-7xl"
              >
                I
              </span>
              <span className="sr-only">I</span>
              {" "}am a developer and designer based out of Boulder. I build
              websites, apps, and digital products for small businesses and
              personal brands. I put together everything from the design to the
              code &amp; deployment. I have a real passion for clean aesthetics
              and creative designs.
            </p>
            <p className="mt-6">
              Aside from freelancing, I&apos;ve built two businesses:
            </p>
          </div>

          <div className="mt-8 max-w-xl space-y-8">
            <div className="relative pl-5">
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-0.75 rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(193,18,31,0.2) 0%, #e63946 40%, #c1121f 60%, rgba(193,18,31,0.2) 100%)",
                }}
              />
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-[#c1121f] dark:bg-[#e63946]"
                />
                <span
                  className="text-[28px] leading-none text-[#c1121f] dark:text-[#e63946]"
                  style={{
                    fontFamily: "var(--font-redline), system-ui, sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                  }}
                >
                  redline
                </span>
              </div>
              <p className="mt-3 font-display text-base font-light leading-relaxed text-secondary sm:text-[17px]">
                An AI-powered training app designed and built from scratch.
                Redline helps hybrid athletes program on the fly, giving the
                feel of a real athletic coach. Full-stack — React Native
                frontend, AI coaching system, wearable integration, and Stripe
                payments.
              </p>
            </div>

            <div className="relative pl-5">
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-0.75 rounded-full gold-foil-border-vertical"
              />
              <div className="leading-none">
                <p className="gold-foil font-display text-[24px] font-extrabold tracking-[0.01em]">
                  CHAPTERMADE
                </p>
                <p className="mt-1.5 font-display text-[12px] font-light uppercase tracking-[0.28em] text-secondary">
                  Composites
                </p>
              </div>
              <p className="mt-3 font-display text-base font-light leading-relaxed text-secondary sm:text-[17px]">
                An end-to-end composite business that photographs, retouches,
                creates, and serves fraternities in the Boulder area. The
                ChapterMade website handles member photo portals, photographer
                upload portals, and fraternity exec portals — storing photos,
                compiling composites, and managing communication between users
                and our company.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-xl font-display text-base font-light leading-relaxed text-secondary sm:text-[17px]">
            When I&apos;m not building, I&apos;m probably coaching CrossFit,
            training, or halfway up a mountain somewhere.
          </p>

          <p className="mt-8 font-mono text-sm text-secondary">
            CS @ CU Boulder · CrossFit Coach · 3 products shipped
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs">
            <li>
              <a href="mailto:lucasmoraca12@gmail.com" className={linkClass}>
                Email
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/lucasmoraca"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
