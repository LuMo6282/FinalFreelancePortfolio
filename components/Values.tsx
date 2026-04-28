"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Principle = {
  number: string;
  title: string;
  body: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Built by hand.",
    body: "Every piece of your site is written, reviewed, and tested by me, not generated and forgotten. Clean code, zero bloat, and nothing ships until it's right.",
  },
  {
    number: "02",
    title: "Your brand, not a template.",
    body: "Every project starts from scratch. No themes, no drag-and-drop builders. Your business deserves something original, built and tailored to your exact needs.",
  },
  {
    number: "03",
    title: "Ship fast, stay close.",
    body: "Weekly check-ins, working demos you can explore. Most projects ship in 2 to 5 weeks. You see progress, not silence.",
  },
  {
    number: "04",
    title: "Built to last.",
    body: "Post-launch support is built into every project. If anything breaks, I fix it. Optional retainer plans keep your site maintained, updated, and running without you thinking about it.",
  },
];

export default function Values() {
  return (
    <section id="how-i-work" className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="flex items-center justify-center gap-4">
          <div
            className="gold-foil-divider h-px w-12 sm:w-20"
            aria-hidden="true"
          />
          <p className="font-display text-[11px] font-light uppercase tracking-[0.28em] text-secondary">
            How I Work
          </p>
          <div
            className="gold-foil-divider h-px w-12 sm:w-20"
            aria-hidden="true"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-20 sm:gap-14 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {principles.map((p, i) => (
            <PrincipleBlock key={p.number} principle={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleBlock({
  principle,
  index,
}: {
  principle: Principle;
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      <div className="flex items-baseline gap-4">
        <p className="gold-foil font-display text-3xl font-extrabold leading-none tracking-tight sm:text-5xl">
          {principle.number}
        </p>
        <span
          aria-hidden="true"
          className="gold-foil-divider h-px flex-1 -translate-y-1.5"
        />
      </div>
      <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-[28px]">
        {principle.title}
      </h3>
      <p className="mt-4 max-w-md font-display text-base font-light leading-relaxed text-secondary">
        {principle.body}
      </p>
    </motion.div>
  );
}
