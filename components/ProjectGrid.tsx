"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "5+", label: "Sites & products shipped" },
  { value: "2,200+", label: "Members served across live apps" },
  { value: "3", label: "Businesses founded & built" },
  { value: "100%", label: "On-time delivery rate" },
];

export default function ProjectGrid() {
  return (
    <section id="work" className="pt-6 pb-16 sm:pt-12 sm:pb-28">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
              Selected Work
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-[clamp(1.75rem,7vw,2.25rem)] italic leading-[1.05] tracking-tight text-primary sm:text-4xl md:text-[44px]">
              Six years of building for founders,
              <br className="hidden sm:block" /> studios, and small teams.
            </h2>
          </div>
          <p className="max-w-xs font-display text-sm font-light leading-relaxed text-secondary sm:text-right">
            A mix of products I&apos;ve founded and client work — every tile is
            something that went live and stayed live.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8">
          <ProjectCard
            index={0}
            label="Founded & Built"
            title="ChapterMade"
            subtitle="Composite Platform · 22 Chapters · 2,200+ Members"
            techStack={["Next.js", "Tailwind", "Vercel"]}
            description="End-to-end composite platform for Greek life. Photographers upload shoots to the portal, members log in to purchase individual portraits, executives customize the composite layout, and finished designs ship straight to the framer."
            href="https://chaptermadecomposites.vercel.app/"
            external
            frameType="iframe"
            iframeSrc="https://chaptermadecomposites.vercel.app/"
            iframeDomain="chaptermadecomposites.vercel.app"
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
            frameType="iframe"
            iframeSrc="https://redline-website-vercel.vercel.app/"
            iframeDomain="redline-app.com"
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
            frameType="iframe"
            iframeSrc="https://lilocurated.com"
            iframeDomain="lilocurated.com"
          />

        </div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 rounded-card border border-edge bg-surface px-5 py-7 sm:mt-20 sm:px-10 sm:py-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <p className="max-w-xs font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
              By the numbers
              <span className="mt-2 block font-serif text-sm normal-case italic tracking-normal text-secondary/80 sm:text-base">
                The track record behind the tiles.
              </span>
            </p>
            <dl className="grid flex-1 grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="gold-foil font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl">
                    {s.value}
                  </dd>
                  <p
                    aria-hidden="true"
                    className="font-display text-[11px] font-light uppercase tracking-[0.18em] text-secondary"
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
