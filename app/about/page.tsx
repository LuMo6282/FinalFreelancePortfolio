import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Values from "@/components/Values";

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-col pt-24 sm:pt-32">
        <About />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
