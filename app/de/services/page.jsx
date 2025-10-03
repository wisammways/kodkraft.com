import Pricing from "@/components/used/common/Pricing";
import Footer5 from "@/components/used/footers/Footer5";
import Header from "@/components/used/Header";
import Services from "@/components/used/home/Services";
import About from "@/components/used/homes/home-13/About";
import Cta from "@/components/used/homes/home-4/Cta";
import React from "react";
import ServicesPageContent from "./ServicesPageContent";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title:
    "Dienstleistungen - KodKraft - Führendes Softwareentwicklungsunternehmen im Libanon",
  description:
    "Von responsiver Webentwicklung bis zu SEO & Branding liefert KodKraft leistungsstarke digitale Lösungen, die auf Ihre Geschäftsziele zugeschnitten sind.",
  alternates: {
    canonical: 'https://kodkraft.com/de/services',
    languages: {
      'en': 'https://kodkraft.com/services',
      'de': 'https://kodkraft.com/de/services',
      'x-default': 'https://kodkraft.com/services',
    },
  },
};
export default function ServicesPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        <ServicesPageContent />

        <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
        </section>

        <Services />

        <About />

      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
