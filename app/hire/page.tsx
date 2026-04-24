import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Values from "@/components/Values";

export default function HirePage() {
  return (
    <>
      <main className="flex flex-col pt-24 sm:pt-32">
        <Services />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
