"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import ScaledIframe from "./ScaledIframe";

const ease = [0.22, 1, 0.36, 1] as const;

const eyebrowClass =
  "font-display text-[11px] font-light uppercase tracking-[0.22em] text-accent";

const headingClass =
  "mt-4 font-serif text-[clamp(1.75rem,5.5vw,2.5rem)] leading-[1.05] tracking-tight text-primary sm:text-[40px] md:text-[48px]";

const proseClass =
  "font-display text-base font-light leading-relaxed text-secondary sm:text-[17px]";

export default function ChapterMadeCaseStudy() {
  return (
    <article>
      <section className="border-b border-edge">
        <div className="mx-auto max-w-300 px-5 pb-12 sm:px-6 sm:pb-16 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-secondary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
          >
            <span aria-hidden="true">&larr;</span>
            <span>All work</span>
          </Link>

          <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[9fr_11fr] md:gap-10 lg:gap-14">
            <div className="flex flex-col">
              <motion.p
                className={eyebrowClass}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease }}
              >
                A case study
              </motion.p>

              <motion.h1
                className="mt-4 font-display font-extrabold leading-[0.95] tracking-tight"
                initial={{ y: 32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                <span
                  className="gold-foil-sheen-once font-chaptermade text-[clamp(2.25rem,7vw,4rem)] tracking-[0.01em]"
                  style={{ fontFamily: "var(--font-chaptermade)" }}
                >
                  ChapterMade
                </span>
              </motion.h1>

              <motion.p
                className="mt-5 font-serif text-xl italic leading-snug text-secondary sm:text-2xl md:text-[26px]"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25, ease }}
              >
                Greek life composites, rebuilt from the camera up.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
              >
                <span>2023 to present</span>
                <span aria-hidden="true" className="text-accent/60">
                  &middot;
                </span>
                <span>Founder &amp; sole developer</span>
                <span aria-hidden="true" className="text-accent/60">
                  &middot;
                </span>
                <span>Next.js</span>
                <span aria-hidden="true" className="text-accent/60">
                  &middot;
                </span>
                <span>Tailwind</span>
                <span aria-hidden="true" className="text-accent/60">
                  &middot;
                </span>
                <span>Vercel</span>
              </motion.div>

              <motion.p
                className="mt-8 font-serif text-lg leading-relaxed text-primary sm:text-xl md:text-[20px] md:leading-[1.55]"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
              >
                Composite season runs on spreadsheets, mismatched filenames,
                and late-night reshoots. Photographers chase rosters.
                Designers stitch faces to names. Exec boards spend weeks
                waiting on a final draft. ChapterMade replaces all of it with
                one tethered workflow, from the camera to the printed frame.
              </motion.p>
            </div>

            <motion.a
              href="https://chaptermadecomposites.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ChapterMade live site in a new tab"
              className="group relative block w-full overflow-hidden rounded-[14px] bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55),0_0_80px_rgba(201,168,76,0.08)] transition-shadow duration-700 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <div className="relative flex h-9 items-center bg-surface px-4">
                <div className="flex shrink-0 items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: "#ff5f57" }}
                  />
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: "#febc2e" }}
                  />
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: "#28c840" }}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
                  <span className="font-mono text-[11px] text-secondary">
                    chaptermadecomposites.vercel.app
                  </span>
                </div>
              </div>
              <div className="relative aspect-16/10">
                <ScaledIframe
                  src="https://chaptermadecomposites.vercel.app/"
                  title="ChapterMade live preview"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="border-y border-edge bg-surface/40">
        <div className="mx-auto max-w-300 px-5 py-12 sm:px-6 sm:py-16">
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <Stat number="22" label="Chapters" />
            <Stat number="2,200+" label="Members" />
            <Stat number="1" label="Person operation" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>The problem</p>
            <h2 className={headingClass}>
              An industry that stopped showing up.
            </h2>
          </motion.div>

          <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
            <motion.div
              className="space-y-5"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <p className={proseClass}>
                Composite companies had been coasting for decades.
                Photographers showed up grumpy. The only line of
                communication was email, often with weeks between replies,
                and nobody on the other end who knew the chapter or cared how
                the year was going. A composite ordered in the fall could
                take 9 to 18 months to arrive, sometimes after the seniors
                who paid for it had already graduated.
              </p>
              <p className={proseClass}>
                ChapterMade replaces all of it with one service end to end.
                The same person picks up the phone, runs the shoot, builds
                the composite, and ships the final frame. Software
                underneath does the heavy lifting that used to need a team.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <PlaceholderCallout
                label="Asset slot"
                hint="Annotated screenshot of the legacy spreadsheet workflow, or a before/after diagram"
                suggestedPath="/public/work/chaptermade/legacy-workflow.png"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-edge py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>The solution</p>
            <h2 className={headingClass}>
              One tethered workflow. Three portals. Zero handoffs.
            </h2>
            <p className={`mt-6 max-w-2xl ${proseClass}`}>
              Every member, photographer, and exec board interacts with the
              same source of truth. There is no spreadsheet to email and no
              file to misname. The roster is the system.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
            <FeatureCard
              num="01"
              title="Roster"
              description="Exec boards build and edit their member list inside the platform. Each addition is the source of truth for everything downstream."
              delay={0.1}
            />
            <FeatureCard
              num="02"
              title="Editor"
              description="A guided layout flow lets the chapter customize their composite before purchase. They see exactly what they are getting before any money or time is spent."
              delay={0.2}
            />
            <FeatureCard
              num="03"
              title="Capture"
              description="Each member gets a personal QR code. Photographers scan it on set, tethering every shot to the right account before the shutter clicks."
              delay={0.3}
            />
            <FeatureCard
              num="04"
              title="Export"
              description="Finished composites ship as layered Photoshop templates, retoucher-ready. Every layer is named and ordered the same way every time."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-edge py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>Inside the platform</p>
            <h2 className={headingClass}>
              Three views. One source of truth.
            </h2>
            <p className={`mt-6 max-w-2xl ${proseClass}`}>
              Members, chapter admins, and operators each see the cut of the
              platform that fits their job. Everyone is looking at the same
              data, so nothing has to be reconciled across systems.
            </p>
          </motion.div>

          <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24 md:gap-28">
            <TourRow
              src="/work/chaptermade/admin-login.gif"
              alt="Exec board creating a new chapter"
              eyebrow="Chapter admin"
              title="Standing up a chapter from scratch."
              body={[
                "An exec board signs in and creates their chapter from a blank slate. They claim the organization, name it, and the platform becomes the source of truth from that moment forward.",
              ]}
              imageSide="left"
            />
            <TourRow
              src="/work/chaptermade/member-login.gif"
              alt="Member signing in with a chapter code"
              eyebrow="Member"
              title="Members join with a chapter code."
              body={[
                "Each member gets a short code from their exec board. They drop it in, confirm their info, and they are tied to the right chapter automatically. No spreadsheet, no email chain, no wondering if their name was spelled right.",
              ]}
              imageSide="right"
              imageWeight="wide"
            />
            <TourRow
              src="/work/chaptermade/admin-features.gif"
              alt="Admin walking through roster, composite builder, pricing, and Stripe checkout"
              eyebrow="Admin"
              title="From roster to Stripe, in one window."
              body={[
                "The admin lands in the roster and sees photo status across the chapter at a glance. In this clip nobody has been photographed yet, the natural state at the start of a season.",
                "On the purchasing side, exec boards build their custom composite layout, watch pricing update in real time, drop in a discount code, and complete checkout through Stripe. Roster, design, and money in one place.",
              ]}
              imageSide="left"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-edge py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>Deep dive 01</p>
            <h2 className={headingClass}>The on-set tether.</h2>
          </motion.div>

          <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <motion.div
              className="space-y-5"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <p className={proseClass}>
                Every member receives a personal QR code the morning of their
                shoot. When they sit down on set, the photographer scans it
                before pressing the shutter. From that moment forward, every
                file from that camera position is tagged to that member&apos;s
                account, automatically.
              </p>
              <p className={proseClass}>
                It looks small, but it is the move that breaks the old
                workflow. There is no spreadsheet to reconcile, no roster to
                cross-reference, and no way to mislabel a shot. By the time a
                member stands up from the stool, their photos are already
                where they need to be.
              </p>
              <p className={proseClass}>
                For the photographer it means leaving a shoot with a finished
                deliverable instead of three days of post-shoot data entry.
                For the chapter it means seeing their composite take shape in
                near real time.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <PlaceholderCallout
                label="Asset slot"
                hint="Short clip (6 to 10 seconds) of a photographer scanning a member's QR code on set, or a stylized still"
                suggestedPath="/public/work/chaptermade/qr-scan.mp4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-edge py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>Deep dive 02</p>
            <h2 className={headingClass}>Composites that hand off cleanly.</h2>
          </motion.div>

          <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              <PlaceholderCallout
                label="Asset slot"
                hint="Photoshop window with the exported PSD open and the layers panel visible. Layer names are the interesting part"
                suggestedPath="/public/work/chaptermade/psd-layers.png"
              />
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <p className={proseClass}>
                The final composite does not ship as a flat JPG. It ships as a
                fully layered Photoshop document, with every member portrait,
                name plate, frame element, and background on its own labeled
                layer.
              </p>
              <p className={proseClass}>
                That choice exists because retouchers should not have to ask
                questions. A consistent layer order and naming convention
                means anyone on the team can open a file from any chapter and
                start working in seconds. No briefing call, no
                back-and-forth, no &quot;which file is the latest&quot;.
              </p>
              <p className={proseClass}>
                It also means a chapter can request a small edit two years
                later and the work is still trivial to pick up.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-edge py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>The outcome</p>
            <h2 className={headingClass}>
              A whole season, run by one person.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 max-w-3xl space-y-5"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <p className={proseClass}>
              ChapterMade now serves 22 chapters and over 2,200 members across
              Boulder. Photographers leave shoots with finished, tagged work.
              Exec boards approve composites in days, not months. The work
              that used to need a designer, a coordinator, and a project
              manager is now run end-to-end by a single operator.
            </p>
            <p className={proseClass}>
              The platform is the operations team. The platform is also the
              quality control. Most of all, the platform is the reason a
              one-person business can deliver work that used to require a
              studio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-edge bg-surface/40 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className={eyebrowClass}>Stack</p>
            <h2 className={headingClass}>Built to ship and stay shipped.</h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-8 md:grid-cols-[1fr_1fr] md:gap-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <div className="space-y-5">
              <p className={proseClass}>
                The whole stack is opinionated and small. Next.js for the
                front end and the API surface, Tailwind for styles, Vercel
                for hosting and previews. One person can hold the entire
                system in their head, which matters when one person is the
                whole company.
              </p>
              <p className={proseClass}>
                Most of the architectural energy went into the parts that are
                not visible on the marketing site. The roster, the QR
                lifecycle, and the export pipeline are the moving parts that
                make the rest possible.
              </p>
            </div>

            <ul className="space-y-3 font-mono text-[12px] uppercase tracking-[0.18em] text-secondary">
              <StackRow label="Framework" value="Next.js" />
              <StackRow label="Styling" value="Tailwind CSS" />
              <StackRow label="Hosting" value="Vercel" />
              <StackRow label="Brand font" value="Inter" />
              <StackRow label="Role" value="Founder, designer, developer" />
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-edge py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-300 px-5 sm:px-6">
          <motion.div
            className="flex flex-col items-center gap-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-serif text-2xl italic leading-snug text-primary sm:text-3xl md:text-4xl">
              Want something like this for your own business?
            </p>

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

            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em]">
              <a
                href="https://chaptermadecomposites.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
              >
                View live site &rarr;
              </a>
              <Link
                href="/"
                className="text-secondary transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent focus:outline-none"
              >
                &larr; All work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <span className="gold-foil font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl">
        {number}
      </span>
      <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-secondary sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function FeatureCard({
  num,
  title,
  description,
  delay = 0,
}: {
  num: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-card border border-edge bg-surface/60 p-6 sm:p-8"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          {num}
        </span>
        <span
          aria-hidden="true"
          className="h-px flex-1 gold-foil-divider opacity-60"
        />
      </div>
      <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-primary sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 font-display text-sm font-light leading-relaxed text-secondary sm:text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}

function StackRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-edge pb-3 last:border-b-0 last:pb-0">
      <span className="text-secondary/70">{label}</span>
      <span className="text-right text-primary normal-case tracking-normal">
        {value}
      </span>
    </li>
  );
}

function TourRow({
  src,
  alt,
  eyebrow,
  title,
  body,
  imageSide,
  imageWeight = "regular",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string[];
  imageSide: "left" | "right";
  imageWeight?: "regular" | "wide";
}) {
  const imageOrder = imageSide === "right" ? "md:order-2" : "md:order-1";
  const textOrder = imageSide === "right" ? "md:order-1" : "md:order-2";
  const gridCols =
    imageWeight === "wide"
      ? "md:grid-cols-[14fr_6fr]"
      : "md:grid-cols-[11fr_9fr]";

  return (
    <div className={`grid items-center gap-8 ${gridCols} md:gap-12 lg:gap-16`}>
      <motion.div
        className={imageOrder}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-card border border-edge bg-surface shadow-[0_24px_60px_-24px_rgba(0,0,0,0.5)]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className={textOrder}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent sm:text-[11px]">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-3xl md:text-[32px]">
          {title}
        </h3>
        <div className="mt-5 space-y-4">
          {body.map((para, i) => (
            <p key={i} className={proseClass}>
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function PlaceholderCallout({
  label,
  hint,
  suggestedPath,
}: {
  label: string;
  hint: string;
  suggestedPath: string;
}) {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-card border border-dashed border-edge bg-surface/40">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
          {label}
        </p>
        <p className="max-w-xs font-serif italic text-secondary sm:text-lg">
          {hint}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary/70">
          {suggestedPath}
        </p>
      </div>
    </div>
  );
}
