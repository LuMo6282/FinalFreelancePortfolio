"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Principle = {
  number: string;
  title: string;
  body: string;
  span: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Built by hand.",
    body: "Every piece of your site is written, reviewed, and tested by me, not generated and forgotten. Clean code, zero bloat, and nothing ships until it's right.",
    span: "lg:col-span-7",
  },
  {
    number: "02",
    title: "Your brand, not a template.",
    body: "Every project starts from scratch. No themes, no drag-and-drop builders. Your business deserves something original, built and tailored to your exact needs.",
    span: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Ship fast, stay close.",
    body: "Weekly check-ins, working demos you can explore. Most projects ship in 2 to 4 weeks. You see progress, not silence.",
    span: "lg:col-span-5",
  },
  {
    number: "04",
    title: "Built to last.",
    body: "Every project includes 30 days of post-launch support. If anything breaks, I fix it. After that, optional retainer plans keep your site maintained, updated, and running without you thinking about it.",
    span: "lg:col-span-7",
  },
];

export default function Values() {
  return (
    <section id="how-i-work" className="py-20 sm:py-32 md:py-40">
      <div className="mx-auto max-w-300 px-5 sm:px-6">
        <div className="flex items-center gap-4">
          <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
            How I Work
          </p>
          <div className="h-px flex-1 bg-accent/60" aria-hidden="true" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-20 sm:gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-16">
          {principles.slice(0, 2).map((p, i) => (
            <PrincipleBlock key={p.number} principle={p} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="relative py-4 lg:col-span-12 lg:py-8"
          >
            <div className="mx-auto flex max-w-2xl items-center gap-5">
              <span
                aria-hidden="true"
                className="gold-foil-divider h-px flex-1"
              />
              <p className="text-center font-serif text-xl italic leading-snug text-primary sm:text-2xl md:text-[26px]">
                Clean code.{" "}
                <span className="text-accent" aria-hidden="true">
                  ·
                </span>{" "}
                Real design.{" "}
                <span className="text-accent" aria-hidden="true">
                  ·
                </span>{" "}
                <span className="gold-foil font-semibold not-italic">
                  Zero template.
                </span>
              </p>
              <span
                aria-hidden="true"
                className="gold-foil-divider h-px flex-1"
              />
            </div>
          </motion.div>

          {principles.slice(2).map((p, i) => (
            <PrincipleBlock key={p.number} principle={p} index={i + 2} />
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
      className={principle.span}
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
