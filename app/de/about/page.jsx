import Footer from "@/components/used/Footer";
import Header from "@/components/used/Header";
import Contact from "@/components/used/homes/home-15/Contact";
import Image from "next/image";
import React from "react";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title:
    "Über uns - KodKraft - Führendes Softwareentwicklungsunternehmen im Libanon",
  description:
    "Lernen Sie KodKraft kennen – ein leidenschaftliches Team aus Entwicklern, Designern und UX-Experten, die maßgeschneiderte digitale Erfahrungen schaffen, die Kreativität, Präzision und Innovation verbinden.",
  alternates: {
    canonical: 'https://kodkraft.com/de/about',
    languages: {
      'en': 'https://kodkraft.com/about',
      'de': 'https://kodkraft.com/de/about',
      'x-default': 'https://kodkraft.com/about',
    },
  },
};

export default function About() {
  return (
    <>
      <div className="grow shrink-0">

        <Header />

        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
          style={{ backgroundImage: "url(/assets/img/photos/bg4.jpg)" }}
        >
          <div className="container pt-28 pb-40 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                  Über uns
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a className="!text-white hover:text-white" href="/de">
                        Startseite
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Über uns
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container !pt-20 !pb-[4.5rem] xl:!pt-28 lg:!pt-28 md:!pt-28 xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                  Wer sind wir
                </h2>
                <h3 className="text-[calc(1.3rem_+_0.6vw)] font-bold !leading-[1.25] xl:text-[1.75rem] !mb-10">
                  Ein Team von Entwicklern, Designern und digitalen Strategen, die sich der Schaffung außergewöhnlicher digitaler Erfahrungen widmen.
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap mx-[-15px] xl:mx-0">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!px-[35px] lg:!px-[20px] px-[15px] mt-[40px]">
                <figure className="rounded-[0.4rem]">
                  <Image
                    width={900}
                    height={1200}
                    src="/assets/img/photos/about26.jpg"
                    className="!rounded-[0.4rem]"
                    alt="about"
                  />
                </figure>
              </div>
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full xl:!px-[35px] lg:!px-[20px] px-[15px] mt-[40px]">
                <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
                  Unsere Mission
                </h2>
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] mb-5">
                  Wir stellen uns vor, Unternehmen mit innovativen digitalen Lösungen zu stärken.
                </h3>
                <p className="!mb-6">
                  Bei KodKraft glauben wir an die Kraft der Technologie, Unternehmen zu transformieren und Menschen weltweit zu verbinden. Unsere Mission ist es, außergewöhnliche digitale Lösungen zu liefern, die nicht nur Ihre Geschäftsziele erfüllen, sondern sie übertreffen.
                </p>
                <p className="!mb-6">
                  Von maßgeschneiderter Webentwicklung bis hin zur strategischen Markenbildung sind wir Ihr Partner auf dem Weg zum digitalen Erfolg. Wir kombinieren Kreativität mit technischem Können, um Erlebnisse zu schaffen, die bei Ihrem Publikum Anklang finden.
                </p>
                <div className="flex flex-wrap mx-[-15px] mb-6">
                  <div className="md:w-6/12 xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[.5rem]">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                      <li className="relative pl-6">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle absolute left-0" />
                        </span>
                        <span>Leidenschaftliches Team</span>
                      </li>
                      <li className="relative pl-6 mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle absolute left-0" />
                        </span>
                        <span>Maßgeschneiderte Lösungen</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-6/12 xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[.5rem]">
                    <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                      <li className="relative pl-6">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle absolute left-0" />
                        </span>
                        <span>Nachgewiesene Erfolgsbilanz</span>
                      </li>
                      <li className="relative pl-6 mt-3">
                        <span>
                          <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#dce7f9] text-[#3f78e0] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle absolute left-0" />
                        </span>
                        <span>Innovative Ansätze</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </div>
      <Footer hasMarginTop={false} />
    </>
  );
}
