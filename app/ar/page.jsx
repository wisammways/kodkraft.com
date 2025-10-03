import React from "react";
import Hero from "@/components/used/home/Hero";
import Services from "@/components/used/home/Services";
import Portfolio from "@/components/used/home/Portfolio";
import Technology from "@/components/used/home/Technology";
import OurValue from "@/components/used/home/OurValue";
import Header from "@/components/used/Header";
import Footer from "@/components/used/Footer";

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