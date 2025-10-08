"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import Footer5 from "@/components/used/footers/Footer5";
import Header from "@/components/used/Header";
import ProjectNavigation from "@/components/used/projects/ProjectNavigation";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { t, getBasePath } from "@/utlis/translations";

const images = [
  { src: "/assets/images/projects/cti-pyp/c1.png", alt: "CTI PYP Grading System" },
  { src: "/assets/images/projects/cti-pyp/c2.png", alt: "CTI PYP Dashboard" },
  { src: "/assets/images/projects/cti-pyp/c3.png", alt: "CTI PYP Analytics" },
  { src: "/assets/images/projects/cti-pyp/c4.png", alt: "CTI PYP Reports" },
];

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title: "CTI PYP Benotungssystem - Maßgeschneiderte Webanwendung für akademische Verwaltung",
  description: "Entdecken Sie das CTI PYP Benotungssystem, eine maßgeschneiderte Webanwendung zur Optimierung akademischer Verwaltungsprozesse. Entwickelt mit Fokus auf Benutzererfahrung und Effizienz.",
  alternates: {
    canonical: 'https://kodkraft.com/de/projects/cti-pyp-system',
    languages: {
      'en': 'https://kodkraft.com/projects/cti-pyp-system',
      'de': 'https://kodkraft.com/de/projects/cti-pyp-system',
      'x-default': 'https://kodkraft.com/projects/cti-pyp-system',
    },
  },
};

export default function CTIPYPSystemProjectPage() {
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
                  CTI PYP Grading System
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
                      CTI PYP Grading System
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
                      alt="CTI PYP Grading System"
                      src="/assets/images/projects/cti-pyp/main.jpg"
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
                          <p className="!mb-6">
                            Die CTI PYP Grading Platform wurde als maßgeschneiderte Webanwendung entwickelt, um die Benotung und akademische Verwaltung für eine internationale Schule zu optimieren. Gebaut mit Laravel (Backend) und React.js (Frontend), bietet die Plattform ein sicheres, rollenbasiertes System für Administratoren, Lehrer, Koordinatoren, Schüler und Eltern.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Zielsetzungen
                          </h3>
                          <p className="!mb-6">
                            Erstellung eines zentralisierten Systems zur Verwaltung von Schülernoten, Fächern und Semesterdaten. Bereitstellung unterschiedlicher Zugriffsebenen für Administratoren, Lehrer, Koordinatoren und Eltern. Verbesserung der Effizienz und Genauigkeit bei der Notenberichterstattung. Gewährleistung einer langfristigen Datenverwaltung über akademische Jahre hinweg. Bereitstellung einer benutzerfreundlichen Oberfläche, die für nicht-technisches Personal und Eltern zugänglich ist.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Hauptfunktionen
                          </h3>
                          <p className="!mb-6">
                            <strong>Rollenbasierte Zugriffskontrolle:</strong> Administratoren, Koordinatoren und Lehrer haben jeweils dedizierte Panels mit maßgeschneiderten Berechtigungen.
                          </p>
                          <p className="!mb-6">
                            <strong>Lehrerzugang:</strong> Jeder Lehrer verwaltet nur seine zugewiesenen Schüler und Fächer.
                          </p>
                          <p className="!mb-6">
                            <strong>Admin- & Koordinator-Tools:</strong> Verwaltung von Fächern, Semestern, Schülern und gesamten akademischen Daten über mehrere Jahre hinweg.
                          </p>
                          <p className="!mb-6">
                            <strong>Elternportal:</strong> Eltern können sich anmelden, um die akademischen Ergebnisse ihrer Kinder einzusehen und PDF-Berichte herunterzuladen.
                          </p>
                          <p className="!mb-6">
                            <strong>Datenkontinuität:</strong> Historische akademische Aufzeichnungen werden bewahrt, was eine reibungslose Verwaltung über Jahre hinweg ermöglicht.
                          </p>
                          <p className="!mb-6">
                            <strong>Benutzerfreundlichkeit:</strong> Saubere UI/UX mit intuitivem Dashboard für schnelle Akzeptanz.
                          </p>
                          <p className="!mb-6">
                            <strong>Schulungssitzungen:</strong> Praktische Schulungen für Lehrer und Schulpersonal wurden durchgeführt, um eine reibungslose Einführung zu gewährleisten.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Auswirkungen
                          </h3>
                          <p className="!mb-6">
                            Erhöhte Effizienz bei der Verwaltung von Noten und Berichten. Reduzierte Fehler durch Eliminierung manueller Benotungsprozesse. Verbesserte Transparenz für Eltern, die jetzt jederzeit online den Fortschritt verfolgen können. Lehrer und Koordinatoren wurden mit Tools ausgestattet, die Zeit sparen und die Verwaltungslast reduzieren.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Technologie-Stack
                          </h3>
                          <p className="!mb-6">
                            <strong>Frontend:</strong> React.js<br />
                            <strong>Backend:</strong> Laravel<br />
                            <strong>Datenbank:</strong> MySQL<br />
                            <strong>Sonstiges:</strong> Sichere Authentifizierung, PDF-Generierung, rollenbasierte Berechtigungen
                          </p>
                        </div>
                        {/*/column */}
                        <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                          <ul className="pl-0 list-none">
                            <li>
                              <h5 className="!mb-1">Datum</h5>
                              <p>Juli 2025</p>
                            </li>
                            <li>
                              <h5 className="!mb-1">Kundenname</h5>
                              <p>CTI School</p>
                            </li>
                          </ul>
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
                                <a onClick={open} data-gallery="project-cti">
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