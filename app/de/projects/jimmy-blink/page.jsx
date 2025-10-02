"use client";
import Footer5 from "@/components/footers/Footer5";

import { usePathname } from "next/navigation";
import { t, getBasePath } from "@/utlis/translations";
import Header from "@/components/Header";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import Link from "next/link";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

import React from "react";

const images = [
  { src: "/assets/images/projects/jimmy-blink/j1.jpg", alt: "image" },
  { src: "/assets/images/projects/jimmy-blink/j2.jpg", alt: "image" },
  { src: "/assets/images/projects/jimmy-blink/j3.jpg", alt: "image" },
  { src: "/assets/images/projects/jimmy-blink/j4.jpg", alt: "image" },
];

export default function SingleProjectPage() {
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
                  Jimmy Blink Website
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
                      Jimmy Blink Website
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

        {/* Project Details */}
        <div className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
          <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <article className="!mt-[-12.5rem]">
                  <figure className="!rounded-[.4rem] !mb-8 xl:!mb-[3.5rem] lg:!mb-[3.5rem] md:!mb-[3.5rem]">
                    <Image
                      className="!rounded-[.4rem]"
                      alt="image"
                      src="/assets/images/projects/jimmy-blink/main.jpg"
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
                          <p>
                            „Sound Smart" ist ein illustriertes Buch, das Schülern hilft, lustige lokale Phrasen und Redewendungen auf Französisch und Spanisch zu lernen. Unsere Aufgabe war es, eine Landing Page zu erstellen, die genauso ansprechend und zugänglich ist wie das Buch selbst.
                          </p>
                          <p>
                            Wir haben das Innenleben des Buches zum Leben erweckt, indem wir seine charmanten Illustrationen als zentrale Designelemente verwendet haben, um sofortige Anziehungskraft für das junge Publikum zu gewährleisten. Leichte, verspielte Animationen verbessern das Erlebnis und machen die Seite selbst unterhaltsam und interaktiv.
                          </p>
                          <p>
                            Die Website wurde vollständig responsiv entwickelt und bietet ein nahtloses Erlebnis für Schüler, egal ob sie am Computer oder am Mobiltelefon arbeiten. Um die internationale Reichweite zu unterstützen, haben wir die Website in vier Sprachen bereitgestellt: Englisch, Französisch, Spanisch und Chinesisch, was perfekt zum Ziel des Buches passt, mit der lokalen Kultur in Verbindung zu treten.
                          </p>
                        </div>
                        {/*/column */}
                        <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                          <ul className="pl-0 list-none">
                            <li>
                              <h5 className="!mb-1">Datum</h5>
                              <p>Feb 2025</p>
                            </li>
                            <li>
                              <h5 className="!mb-1">Kundenname</h5>
                              <p>Jimmy Blink</p>
                            </li>
                          </ul>
                          <a href="https://jimmyblink.com/" target="_blank" className="more hover">
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
                                <a onClick={open} data-gallery="project-1">
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
                    </div>{" "}
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
