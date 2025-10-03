import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects4 from "@/components/projects/Projects4";
import React from "react";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title:
    "Projekte - KodKraft - Führendes Softwareentwicklungsunternehmen im Libanon",
  description:
    "Sehen Sie KodKrafts Portfolio – wunderschön gestaltete Websites, Apps und Branding-Projekte, die auf Benutzerfreundlichkeit, Leistung und Geschäftswachstum ausgelegt sind.",
  alternates: {
    canonical: 'https://kodkraft.com/de/projects',
    languages: {
      'en': 'https://kodkraft.com/projects',
      'de': 'https://kodkraft.com/de/projects',
      'x-default': 'https://kodkraft.com/projects',
    },
  },
};
export default function ProjectsPage() {
  return (
    <>
      <div className="grow shrink-0">

        <Header />

        <ProjectsPageContent />

        <Projects4 />
      </div>

      <Footer hasMarginTop={false} />
    </>
  );
}
