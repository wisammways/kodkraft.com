"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import Footer5 from "@/components/footers/Footer5";
import Header from "@/components/Header";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import Link from "next/link";
import React from "react";

const images = [
  { src: "/assets/images/projects/merrycare/m1.jpg", alt: "MerryCare Platform" },
  { src: "/assets/images/projects/merrycare/m2.jpg", alt: "MerryCare Dashboard" },
  { src: "/assets/images/projects/merrycare/m3.jpg", alt: "MerryCare Mobile App" },
  { src: "/assets/images/projects/merrycare/m4.jpg", alt: "MerryCare Features" },
];



export default function MerryCareProjectPage() {
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
                      <Link className="!text-white hover:text-white" href="/">
                        Home
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
                        About the Project
                      </h2>
                      <div className="flex flex-wrap mx-0">
                        <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">

                          <p>Merry Care is a Melbourne-based service provider dedicated to supporting people with disabilities in their daily lives. Their services cover essential areas such as Household Tasks, Daily Living and Life Skills, Innovative Community Participation, Travel and Transport, and more.</p>

                          <h3>Project Goal</h3>

                          <p>Merry Care approached us with a clear mission: to build a user-friendly, inclusive, and accessible website that reflects their values of care, community, and empowerment. The site needed to cater to a wide range of users, including individuals with disabilities, their families, and carers.</p>

                          <h3>Our Approach</h3>

                          <p>We designed and developed a website that prioritizes accessibility, clarity, and inclusivity. Our focus was not just on visual appeal, but also on ensuring the site is functional, intuitive, and easy to navigate for all users.</p>

                          <h3>Key Features</h3>

                          <p>Accessibility Switcher: Custom settings for high contrast, sharper and larger fonts, and adaptable layouts to ensure the site is usable for people with varying visual needs.</p>

                          <p>Inclusive Design: Careful choice of fonts, color palettes, and layouts to meet accessibility standards (WCAG compliance) while maintaining a clean and professional aesthetic.</p>

                          <p>Easy Information Access: Clear navigation structure and service descriptions that make information readily understandable and reachable with minimal clicks.</p>

                          <p>Multilingual Support: English and Arabic language versions to serve Melbourne's diverse community.</p>

                          <p>Mobile-Friendly: Fully responsive design ensuring smooth experience on mobile phones and tablets.</p>

                          <h3>Outcome</h3>

                          <p>The final website provides Merry Care with a digital presence that is both inclusive and professional. It reflects their commitment to supporting individuals with disabilities while ensuring that their services and resources are accessible to everyone, anytime, anywhere.</p>

                        </div>
                        <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto">
                          <ul className="pl-0 list-none">
                            <li>
                              <h5 className="!mb-1">Date</h5>
                              <p>Nov 2022</p>
                            </li>
                            <li>
                              <h5 className="!mb-1">Client Name</h5>
                              <p>Merry Care, Melbourne, Australia</p>
                            </li>
                          </ul>
                          <a href="https://merrycare.net.au/" target="_blank" className="more hover">
                            See Project
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