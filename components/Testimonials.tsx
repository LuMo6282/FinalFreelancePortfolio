"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Lucas turned a rough brief into a running product in three weeks. Photographers, members, and execs all move through the portal he built — it's the backbone of our operation now.",
    name: "Marcus Halverson",
    role: "Director of Operations · Greek Life Council",
    initials: "MH",
  },
  {
    quote:
      "Ships faster than agencies twice his size, and the work is sharper too. Every product photo, collection, and landing page update lands in minutes instead of days.",
    name: "Whitney Cho",
    role: "Founder · DTC Apparel Label",
    initials: "WC",
  },
  {
    quote:
      "Design-minded engineers are rare. Lucas is one of maybe three freelancers I'd trust with back-to-back launches — no dropped deadlines, no hand-holding, no ego.",
    name: "Matt Reyes",
    role: "Product Lead · Seed-stage SaaS",
    initials: "MR",
  },
  {
    quote:
      "Briefed on Monday, staging link Thursday. No agency I've worked with moves that fast without cutting corners on polish. The launch metrics spoke for themselves.",
    name: "Amelia Torres",
    role: "Creative Director · Brand Studio",
    initials: "AT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-300 px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[11px] font-light uppercase tracking-[0.22em] text-secondary">
              Kind Words
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl italic leading-[1.05] tracking-tight text-primary sm:text-4xl md:text-[44px]">
              Quiet briefs.
              <br className="hidden sm:block" /> Loud shipping weeks.
            </h2>
          </div>
          <p className="max-w-xs font-display text-sm font-light leading-relaxed text-secondary sm:text-right">
            Notes from founders and creative leads I&apos;ve shipped alongside.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-edge bg-surface p-8 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.45)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-[0_30px_80px_-20px_rgba(201,168,76,0.12)] sm:p-10"
    >
      <span
        aria-hidden="true"
        className="gold-foil absolute -top-3 left-7 font-serif text-[84px] italic leading-none"
      >
        &ldquo;
      </span>
      <blockquote className="relative mt-6 font-serif text-lg italic leading-[1.45] text-primary/90 sm:text-xl">
        {testimonial.quote}
      </blockquote>

      <div
        className="gold-foil-divider mt-7 h-px w-16"
        aria-hidden="true"
      />

      <figcaption className="mt-6 flex items-center gap-4">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-edge bg-body/60 font-mono text-[11px] uppercase tracking-[0.12em] text-accent"
        >
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold tracking-tight text-primary">
            {testimonial.name}
          </p>
          <p className="mt-0.5 font-display text-[11px] font-light uppercase tracking-[0.18em] text-secondary">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
