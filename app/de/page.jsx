import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import OurValue from "@/components/home/OurValue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Clients3 from "@/components/blocks/clients/Clients3";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title:
    "KodKraft - Führendes Software-Entwicklungsunternehmen im Libanon",
  description:
    "KodKraft erstellt atemberaubende, benutzerfreundliche Websites & Apps. Erfahrene Entwickler, Designer und UX-Spezialisten vereint, um Ihren digitalen Erfolg voranzutreiben.",
  alternates: {
    canonical: 'https://kodkraft.com/de',
    languages: {
      'en': 'https://kodkraft.com',
      'de': 'https://kodkraft.com/de',
      'x-default': 'https://kodkraft.com',
    },
  },
};

export default function HomeDE() {
  return (
    <>
      <div className="color-purple demo11">

        <div className="grow shrink-0">

          <Header />

          <Hero />

          <Services />

          <Technology />

          <OurValue />

          {/* <Clients3 /> */}

        </div>

        <Footer hasMarginTop={false} />
      </div>
    </>
  );
}
