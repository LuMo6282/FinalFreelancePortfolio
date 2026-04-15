"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    number: "01",
    title: "Built by hand.",
    body: "Every piece of your site is written, reviewed, and tested by me — not generated and forgotten. Clean code, zero bloat, and nothing ships until it's right.",
  },
  {
    number: "02",
    title: "Your brand, not a template.",
    body: "Every project starts from scratch. No themes, no drag-and-drop builders. Your business deserves something original, built and tailored to your exact needs.",
  },
  {
    number: "03",
    title: "Ship fast, stay close.",
    body: "Weekly check-ins, working demos you can explore, and a 3-week average turnaround. You see progress, not silence.",
  },
  {
    number: "04",
    title: "Built to last.",
    body: "Every project includes 2 weeks of post-launch support — if anything breaks, I fix it. After that, optional retainer plans keep your site maintained, updated, and running without you thinking about it.",
  },
];

export default function Values() {
  return (
    <section className="py-30 sm:py-40">
      <div className="mx-auto max-w-300 px-6">
        <div className="flex items-center gap-4">
          <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
            How I Work
          </p>
          <div className="h-px flex-1 bg-accent/60" aria-hidden="true" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-20">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <p className="font-display text-3xl font-extrabold leading-none text-accent sm:text-4xl">
                {p.number}
              </p>
              <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-[26px]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-md font-display text-base font-light leading-relaxed text-secondary">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
