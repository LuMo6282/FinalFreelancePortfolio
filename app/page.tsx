import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Hero />
        <ProjectGrid />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
