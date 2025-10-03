import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Technology from "@/components/home/Technology";
import OurValue from "@/components/home/OurValue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "KodKraft - شركة تطوير البرمجيات الرائدة في لبنان",
  description:
    "KodKraft تصنع مواقع ويب وتطبيقات مذهلة وسهلة الاستخدام. مطورون ومصممون وأخصائيو UX مهرة متحدون لدفع نجاحك الرقمي. دعنا نبني شيئاً رائعاً!",
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

        </div>

        <Footer hasMarginTop={false} />
      </div>
    </>
  );
}