import type { Metadata } from "next";
import ChapterMadeCaseStudy from "@/components/ChapterMadeCaseStudy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ChapterMade case study | Lucas Moraca",
  description:
    "How I built ChapterMade, an end-to-end composite platform for Greek life that replaces spreadsheets, mismatched filenames, and reshoots with one tethered workflow.",
};

export default function ChapterMadeCaseStudyPage() {
  return (
    <>
      <main className="flex flex-col pt-20 sm:pt-28 md:pt-32">
        <ChapterMadeCaseStudy />
      </main>
      <Footer />
    </>
  );
}
