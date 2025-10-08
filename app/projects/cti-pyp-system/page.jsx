"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import Footer5 from "@/components/used/footers/Footer5";
import Header from "@/components/used/Header";
import ProjectNavigation from "@/components/used/projects/ProjectNavigation";
import Link from "next/link";
import React from "react";

const images = [
  { src: "/assets/images/projects/cti-pyp/c1.png", alt: "CTI PYP Grading System" },
  { src: "/assets/images/projects/cti-pyp/c2.png", alt: "CTI PYP Dashboard" },
  { src: "/assets/images/projects/cti-pyp/c3.png", alt: "CTI PYP Analytics" },
  { src: "/assets/images/projects/cti-pyp/c4.png", alt: "CTI PYP Reports" },
];

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title: "CTI PYP Grading System - Custom Web Application for Academic Management",
  description: "Discover the CTI PYP Grading System, a custom web application designed to streamline academic management processes. Built with user experience and efficiency in mind.",
  alternates: {
    canonical: 'https://kodkraft.com/projects/cti-pyp-system',
    languages: {
      'en': 'https://kodkraft.com/projects/cti-pyp-system',
      'de': 'https://kodkraft.com/de/projects/cti-pyp-system',
      'x-default': 'https://kodkraft.com/projects/cti-pyp-system',
    },
  },
};

export default function CTIPYPSystemProjectPage() {
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
                      <Link className="!text-white hover:text-white" href="/">
                        Home
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
                        About the Project
                      </h2>
                      <div className="flex flex-wrap mx-0">
                        <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">
                          <p className="!mb-6">
                            The CTI PYP Grading Platform was developed as a custom web application to streamline grading and academic management for an international school. Built with Laravel (backend) and React.js (frontend), the platform provides a secure, role-based system for administrators, teachers, coordinators, students, and parents.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Objectives
                          </h3>
                          <p className="!mb-6">
                            Create a centralized system to manage student grades, subjects, and semester data. Provide different access levels for admin, teachers, coordinators, and parents. Improve efficiency and accuracy in grade reporting. Ensure long-term data management across academic years. Deliver a user-friendly interface accessible to non-technical staff and parents.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Key Features
                          </h3>
                          <p className="!mb-6">
                            <strong>Role-Based Access Control:</strong> Admins, coordinators, and teachers each have dedicated panels with tailored permissions.
                          </p>
                          <p className="!mb-6">
                            <strong>Teacher Access:</strong> Each teacher manages only their assigned students and subjects.
                          </p>
                          <p className="!mb-6">
                            <strong>Admin & Coordinator Tools:</strong> Manage subjects, semesters, students, and overall academic data across multiple years.
                          </p>
                          <p className="!mb-6">
                            <strong>Parent Portal:</strong> Parents can log in to view their children's academic results and download PDF reports.
                          </p>
                          <p className="!mb-6">
                            <strong>Data Continuity:</strong> Historical academic records are preserved, allowing smooth management over years.
                          </p>
                          <p className="!mb-6">
                            <strong>Ease of Use:</strong> Clean UI/UX with an intuitive dashboard for fast adoption.
                          </p>
                          <p className="!mb-6">
                            <strong>Training Sessions:</strong> Delivered hands-on training for teachers and school staff to ensure smooth onboarding.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Impact
                          </h3>
                          <p className="!mb-6">
                            Increased efficiency in managing grades and reports. Reduced errors by eliminating manual grading processes. Improved transparency for parents, who can now track progress online anytime. Empowered teachers and coordinators with tools that save time and reduce administrative load.
                          </p>

                          <h3 className="!text-[calc(1.235rem_+_0.06vw)] font-bold xl:!text-[1.25rem] !leading-[1.4] !mb-3">
                            Technology Stack
                          </h3>
                          <p className="!mb-6">
                            <strong>Frontend:</strong> React.js<br />
                            <strong>Backend:</strong> Laravel<br />
                            <strong>Database:</strong> MySQL<br />
                            <strong>Other:</strong> Secure authentication, PDF generation, role-based permissions
                          </p>
                        </div>
                        {/*/column */}
                        <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                          <ul className="pl-0 list-none">
                            <li>
                              <h5 className="!mb-1">Date</h5>
                              <p>July 2025</p>
                            </li>
                            <li>
                              <h5 className="!mb-1">Client Name</h5>
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