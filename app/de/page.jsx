import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import OurValue from "@/components/home/OurValue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Clients3 from "@/components/blocks/clients/Clients3";

export const metadata = {
  title:
    "KodKraft - Führendes Softwareentwicklungsunternehmen im Libanon",
  description:
    "KodKraft erstellt atemberaubende, benutzerfreundliche Websites und Apps. Erfahrene Entwickler, Designer und UX-Spezialisten vereint, um Ihren digitalen Erfolg voranzutreiben. Lassen Sie uns etwas Großartiges schaffen!",
};

export default function Home() {
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