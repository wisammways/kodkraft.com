import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import OurValue from "@/components/home/OurValue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Clients3 from "@/components/blocks/clients/Clients3";
import { useTranslations } from 'next-intl';

export const metadata = {
  title:
    "KodKraft - Leading Software Development Company in Lebanon",
  description:
    "KodKraft crafts stunning, user-friendly websites & apps. Skilled developers, designers, and UX specialists united to drive your digital success. Let’s build something great!",
};

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <h1>{t('About')}</h1>
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
