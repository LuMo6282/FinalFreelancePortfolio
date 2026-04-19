"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import ProjectCard from "./ProjectCard";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectGrid() {
  return (
    <>
      <section id="work" className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="mx-auto max-w-300 px-6">
          <p className="mb-12 font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
            Selected Work
          </p>

          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8">
            <ProjectCard
              index={0}
              label="Founded & Built"
              title="ChapterMade"
              subtitle="Composite Platform · 22 Chapters · 2,200+ Members"
              techStack={["Next.js", "Tailwind", "Vercel"]}
              description="End-to-end composite platform for Greek life. Photographers upload shoots to the portal, members log in to purchase individual portraits, executives customize the composite layout, and finished designs ship straight to the framer."
              href="https://chaptermadecomposites.vercel.app/"
              external
              screenshot="/assets/flatirons.jpg"
            />

            <ProjectCard
              index={1}
              label="Founded & Built"
              title="Redline"
              subtitle="AI Training Advisor · React Native · iOS beta"
              techStack={["Next.js", "TypeScript", "Framer Motion"]}
              description="Programmed AI training advisor for athletes. Reads readiness signals, session history, and goals, then adapts each workout recommendation in real time as you log and recover. Currently in beta testing."
              href="https://redline-website-vercel.vercel.app/"
              external
              frameType="redline-composite"
              className="sm:row-span-2 sm:self-center"
            />

            <ProjectCard
              index={2}
              label="Client Work"
              title="LiLO Curated"
              subtitle="Wholesale Fitness Attire · Shopify · Custom admin"
              techStack={["Next.js", "Tailwind", "Shopify API"]}
              description="Wholesale storefront for women's premium branded fitness attire. Boutique buyers browse collections and submit custom quote requests, while a bespoke admin dashboard lets the owner field responses and manage every photo, product, and collection on the site."
              href="https://lilocurated.com"
              external
              frameType="lilo-strip"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-300 px-6">
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-card border border-edge bg-surface p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-14 lg:p-16"
          >
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
              <div>
                <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
                  What&apos;s Next?
                </p>

                <div
                  className="gold-foil-divider mt-5 h-px w-24"
                  aria-hidden="true"
                />

                <h2 className="mt-6 font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-primary sm:text-5xl md:text-6xl">
                  Your project, on the next{" "}
                  <span className="gold-foil">grid</span>.
                </h2>

                <p className="mt-6 max-w-xl font-serif text-lg italic text-secondary">
                  Tell me what you&apos;re building. I&apos;ll sketch the first
                  screen this week.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
                <MagneticButton>
                  <Link
                    href="/about#contact"
                    className="btn-foil-hover group inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-body shadow-[0_0_30px_-8px_rgba(201,168,76,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
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

                <a
                  href="mailto:lucasmoraca12@gmail.com"
                  className="group relative cursor-pointer font-display text-xs font-light uppercase tracking-[0.22em] text-secondary transition-colors duration-200 ease-out hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
                >
                  <span>or email lucasmoraca12@gmail.com</span>
                  <span
                    aria-hidden="true"
                    className="gold-foil-divider absolute -bottom-1 left-0 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
