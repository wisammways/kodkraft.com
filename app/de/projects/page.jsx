import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects4 from "@/components/projects/Projects4";
import React from "react";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata = {
  title:
    "Projects - KodKraft - Leading Software Development Company in Lebanon",
  description:
    "See KodKraft’s portfolio – beautifully crafted websites, apps, and branding projects designed for usability, performance, and business growth.",
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
