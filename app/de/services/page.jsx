import Pricing from "@/components/common/Pricing";
import Footer5 from "@/components/footers/Footer5";
import Header from "@/components/Header";
import Services from "@/components/home/Services";
import About from "@/components/homes/home-13/About";
import Cta from "@/components/homes/home-4/Cta";
import React from "react";
import ServicesPageContent from "./ServicesPageContent";

export const metadata = {
  title:
    "Services - KodKraft - Leading Software Development Company in Lebanon",
  description:
    "From responsive web development to SEO & branding, KodKraft delivers high-performance digital solutions tailored to your business goals. Explore our services.",
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
