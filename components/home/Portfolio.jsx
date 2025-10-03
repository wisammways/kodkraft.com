"use client";
import { projectData } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, getBasePath } from "@/utlis/translations";

import React, { useEffect, useRef } from "react";

// Project slug mapping for routing
const projectSlugs = {
  1: "cti-pyp-system", // CTI PYP Grading
  2: "jimmy-blink",    // JimmyBlink
  3: "mmc-lebanon",    // MMC Lebanon
  4: "merrycare",      // MerryCare
};

// Only show these 4 projects on home page
const homePageProjects = [1, 2, 3, 4]; // CTI PYP, Jimmy Blink, MMC Lebanon, MerryCare

export default function Portfolio() {
  const pathname = usePathname();
  const basePath = getBasePath(pathname);
  
  const getTranslatedCategory = (category) => {
    switch (category) {
      case 'Web Platform':
        return t(pathname, 'projectCategories.webPlatform');
      case 'Landing Page':
        return t(pathname, 'projectCategories.landingPage');
      case 'Website':
        return t(pathname, 'projectCategories.website');
      default:
        return category;
    }
  };

  const isotopContainer = useRef();
  const isotopRef = useRef(null);
  
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotopRef.current = new Isotope(isotopContainer.current, {
      itemSelector: ".item",
      layoutMode: "masonry",
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotopRef.current.layout();
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);

  // Filter projects to only show the 4 specified projects
  const filteredProjects = projectData.filter(project => 
    homePageProjects.includes(project.projectId)
  );

  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px] !text-center !mb-12">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              {t(pathname, 'portfolio.title')}
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-0">
              {t(pathname, 'portfolio.subtitle')}
            </h3>
          </div>
        </div>

        <div className="itemgrid grid-view projects-masonry">
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope"
          >
            {filteredProjects.map((project) => {
              const projectSlug = projectSlugs[project.projectId];
              
              return (
                <div
                  key={project.projectId}
                  className={`project item xl:w-3/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!mt-[80px] xl:!px-[20px] lg:!mt-[80px] lg:!px-[20px] md:!mt-[80px] md:!px-[20px] !px-[15px] !mt-[50px] max-w-full ${project.projectType}`}
                >
                  <figure className="lift rounded !mb-6 group overflow-hidden">
                    <Link href={`${basePath}/projects/${projectSlug}`}>
                      <Image
                        alt={project.title}
                        src={project.imageUrl}
                        width={project.imageWidth}
                        height={project.imageHeight}
                      />
                    </Link>
                  </figure>
                  <div className="project-details flex justify-center flex-col">
                    <div className="post-header">
                      <div
                        className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold relative align-top !pl-[1.4rem] opacity-100  before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#7cb798] !mb-2"
                        style={{ color: project.categoryColor }}
                      >
                        <span
                          className="before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4"
                          style={{ color: project.categoryColor }}
                        >
                          {getTranslatedCategory(project.category)}
                        </span>
                      </div>
                      <h3 className="post-title">
                        <Link 
                          href={`${basePath}/projects/${projectSlug}`}
                          className="!text-[#353451] !hover:text-[var(--current-color)] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
