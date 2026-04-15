import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
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
            subtitle="AI Training Advisor"
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
            subtitle="Wholesale Fitness Attire"
            techStack={["Next.js", "Tailwind", "Shopify API"]}
            description="Wholesale storefront for women's premium branded fitness attire. Boutique buyers browse collections and submit custom quote requests, while a bespoke admin dashboard lets the owner field responses and manage every photo, product, and collection on the site."
            href="https://lilocurated.com"
            external
            frameType="lilo-strip"
          />

          <ProjectCard
            index={3}
            label="What's Next?"
            title="Your Project"
            subtitle="Have an idea? Let's build it."
            href="/about#contact"
            isPlaceholder
            className="sm:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
