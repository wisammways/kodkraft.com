import Footer17 from "@/components/footers/Footer17";
import Header18 from "@/components/headers/Header18";
import Brands from "@/components/homes/home-20/Brands";
import Facts from "@/components/homes/home-20/Facts";
import Features from "@/components/homes/home-20/Features";
import Hero from "@/components/homes/home-20/Hero";
import Process from "@/components/homes/home-20/Process";
import Projects from "@/components/homes/home-20/Projects";
import Services from "@/components/homes/home-20/Services";
import React from "react";

export const metadata = {
  title:
    "Demo 20 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function DemoPage20() {
  return (
    <>
      <div className="color-purple font-urbanist demo20">
        <div className="!font-Urbanist !text-[0.85rem]">
          <div className="page-frame !bg-[#e1e0fa]">
            <div className="grow shrink-0">
              <Header18 />
              <>
                <Hero />
                {/* /section */}
                <Services />
                {/* /section */}
                <Process />
                {/* /section */}
                <Projects />
                {/* /section */}
                <Brands />
                {/* /section */}
                <section className="wrapper !bg-[#ffffff]">
                  <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
                    <Features />
                    {/*/.row */}
                    <Facts />
                  </div>
                  {/* /.container */}
                </section>
                {/* /section */}
              </>
            </div>
            <Footer17 />
          </div>
        </div>
      </div>
    </>
  );
}
