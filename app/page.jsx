import React from "react";
import Hero from "@/components/used/home/Hero";
import Services from "@/components/used/home/Services";
import Portfolio from "@/components/used/home/Portfolio";
import Technology from "@/components/used/home/Technology";
import OurValue from "@/components/used/home/OurValue";
import Header from "@/components/used/Header";
import Footer from "@/components/used/Footer";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title:
    "KodKraft - Leading Software Development Company in the Middle East (MENA)",
  description:
    "KodKraft crafts stunning, user-friendly websites & apps. Skilled developers, designers, and UX specialists united to drive your digital success. Let's build something great!",
  alternates: {
    canonical: 'https://kodkraft.com',
    languages: {
      'en': 'https://kodkraft.com',
      'de': 'https://kodkraft.com/de',
      'x-default': 'https://kodkraft.com',
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="color-purple demo11">

        <div className="grow shrink-0">

          <Header />

          <Hero />

          <Services />

          <Portfolio />

          <Technology />

          <OurValue />

          {/* <Clients3 /> */}

        </div>

        <Footer hasMarginTop={false} />
      </div>
    </>
  );
}
