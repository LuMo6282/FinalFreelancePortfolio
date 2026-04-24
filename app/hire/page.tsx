import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Values from "@/components/Values";

export default function HirePage() {
  return (
    <>
      <main className="flex flex-col pt-20 sm:pt-28 md:pt-32">
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
