import ChapterMarkers from "@/components/ChapterMarkers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <ChapterMarkers />
      <main className="flex flex-col">
        <Hero />
        <ProjectGrid />
        <Services />
      </main>
      <Footer />
    </>
  );
}
