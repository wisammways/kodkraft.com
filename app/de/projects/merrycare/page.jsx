"use client";

import { usePathname } from "next/navigation";
import { t, getBasePath } from "@/utlis/translations";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import Footer5 from "@/components/used/footers/Footer5";
import Header from "@/components/used/Header";
import ProjectNavigation from "@/components/used/projects/ProjectNavigation";
import Link from "next/link";
import React from "react";

const images = [
  { src: "/assets/images/projects/merrycare/m1.jpg", alt: "MerryCare Platform" },
  { src: "/assets/images/projects/merrycare/m2.jpg", alt: "MerryCare Dashboard" },
  { src: "/assets/images/projects/merrycare/m3.jpg", alt: "MerryCare Mobile App" },
  { src: "/assets/images/projects/merrycare/m4.jpg", alt: "MerryCare Features" },
];

/*export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title: "MerryCare Website - KodKraft",
  description: "Merry Care ist ein in Melbourne ansässiger Dienstleister, der sich der Unterstützung von Menschen mit Behinderungen in ihrem täglichen Leben widmet.",
  alternates: {
    canonical: 'https://kodkraft.com/de/projects/merrycare',
    languages: {
      'en': 'https://kodkraft.com/projects/merrycare',
      'de': 'https://kodkraft.com/de/projects/merrycare',
      'x-default': 'https://kodkraft.com/projects/merrycare',
    },
  },
};*/

export default function MerryCareProjectPage() {
  const pathname = usePathname();
  const basePath = getBasePath(pathname);
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
                  MerryCare Website
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <Link className="!text-white hover:text-white" href={basePath === '' ? '/' : basePath}>
                        {t(pathname, 'pages.home')}
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      MerryCare Website
                    </li>
                  </ol>
                </nav>
                {/* /nav */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        {/* Inlined Project Details Component */}
        <div className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
          <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <article className="!mt-[-12.5rem]">
                  <figure className="!rounded-[.4rem] !mb-8 xl:!mb-[3.5rem] lg:!mb-[3.5rem] md:!mb-[3.5rem]">
                    <Image
                      className="!rounded-[.4rem]"
                      alt="MerryCare Platform"
                      src="/assets/images/projects/merrycare/main.jpg"
                      width={2400}
                      height={1640}
                    />
                  </figure>
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="xl:w-10/12 xl:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full">
                      <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-4">
                        Über das Projekt
                      </h2>
                      <div className="flex flex-wrap mx-0">
                        <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">

                          <p>Merry Care ist ein in Melbourne ansässiger Dienstleister, der sich der Unterstützung von Menschen mit Behinderungen in ihrem täglichen Leben widmet. Ihre Dienstleistungen umfassen wesentliche Bereiche wie Haushaltsaufgaben, tägliche Lebensführung und Lebenskompetenzen, innovative Gemeinschaftsteilnahme, Reise und Transport und mehr.</p>

                          <h3>Projektziel</h3>

                          <p>Merry Care kam mit einer klaren Mission zu uns: eine benutzerfreundliche, inklusive und barrierefreie Website zu erstellen, die ihre Werte von Fürsorge, Gemeinschaft und Empowerment widerspiegelt. Die Website musste ein breites Spektrum von Nutzern ansprechen, darunter Menschen mit Behinderungen, ihre Familien und Betreuer.</p>

                          <h3>Unser Ansatz</h3>

                          <p>Wir haben eine Website entworfen und entwickelt, die Barrierefreiheit, Klarheit und Inklusivität priorisiert. Unser Fokus lag nicht nur auf visueller Attraktivität, sondern auch darauf, sicherzustellen, dass die Website funktional, intuitiv und für alle Benutzer leicht zu navigieren ist.</p>

                          <h3>Hauptfunktionen</h3>

                          <p>Barrierefreiheits-Umschalter: Benutzerdefinierte Einstellungen für hohen Kontrast, schärfere und größere Schriftarten und anpassbare Layouts, um sicherzustellen, dass die Website für Menschen mit unterschiedlichen visuellen Bedürfnissen nutzbar ist.</p>

                          <p>Inklusives Design: Sorgfältige Auswahl von Schriftarten, Farbpaletten und Layouts, um Barrierefreiheitsstandards (WCAG-Konformität) zu erfüllen und gleichzeitig eine saubere und professionelle Ästhetik beizubehalten.</p>

                          <p>Einfacher Informationszugriff: Klare Navigationsstruktur und Servicebeschreibungen, die Informationen leicht verständlich und mit minimalen Klicks erreichbar machen.</p>

                          <p>Mehrsprachige Unterstützung: Englische und arabische Sprachversionen, um Melbournes vielfältige Gemeinschaft zu bedienen.</p>

                          <p>Mobilfreundlich: Vollständig responsives Design, das ein reibungsloses Erlebnis auf Mobiltelefonen und Tablets gewährleistet.</p>

                          <h3>Ergebnis</h3>

                          <p>Die fertige Website bietet Merry Care eine digitale Präsenz, die sowohl inklusiv als auch professionell ist. Sie spiegelt ihr Engagement für die Unterstützung von Menschen mit Behinderungen wider und stellt gleichzeitig sicher, dass ihre Dienstleistungen und Ressourcen für jeden, jederzeit und überall zugänglich sind.</p>

                        </div>
                        {/*/column */}
                        <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                          <ul className="pl-0 list-none">
                            <li>
                              <h5 className="!mb-1">Datum</h5>
                              <p>Nov 2022</p>
                            </li>
                            <li>
                              <h5 className="!mb-1">Kundenname</h5>
                              <p>Merry Care, Melbourne, Australien</p>
                            </li>
                          </ul>
                          <a href="https://merrycare.net.au/" target="_blank" className="more hover">
                            Projekt ansehen
                          </a>
                        </div>
                        {/*/column */}
                      </div>
                      {/*/.row */}
                    </div>
                    {/* /column */}
                  </div>
                  {/*/.row */}
                  <Gallery>
                    <div className="flex flex-wrap mx-[-15px] md:mx-[-15px] !mt-[25px]">
                      {images.map((image, index) => (
                        <div
                          key={index}
                          className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                        >
                          <Item
                            original={image.src}
                            thumbnail={image.src}
                            width={960}
                            height={640}
                          >
                            {({ ref, open }) => (
                              <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                                <a onClick={open} data-gallery="project-merrycare">
                                  <Image
                                    className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                                    alt={image.alt}
                                    src={image.src}
                                    width={960}
                                    ref={ref}
                                    height={640}
                                  />
                                </a>
                              </figure>
                            )}
                          </Item>
                        </div>
                      ))}
                    </div>
                  </Gallery>
                </article>
                {/* /.project */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>

        <ProjectNavigation />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}