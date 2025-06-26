import React from "react";
import Image from "next/image";
import ProgressCircle from "@/components/common/CircularProgress";
import { listFeatures } from "@/data/features";
export default function Features() {
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container pt-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 pb-[4.5rem] xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px] !text-center">
          <div className="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              Our Services
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-9 xl:!px-12">
              Driving Growth Through Digital Solutions.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="flex flex-wrap mx-[-15px] !mt-[-40px] !mb-[7rem]">
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.02 213.34" data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/script.svg" className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia !mr-4"><path class="fill-secondary" d="M162.66 106.34a8 8 0 01-6.06-13.2l11.54-13.47-11.54-13.45a8 8 0 1112.14-10.42l16 18.67a8 8 0 010 10.42l-16 18.67a8 8 0 01-6.08 2.78zm-69.31 0a8 8 0 01-6.08-2.78l-16-18.67a8 8 0 010-10.42l16-18.67a8 8 0 0112.15 10.42L87.88 79.67l11.54 13.46a8 8 0 01-6.07 13.21zm24.87 15.8a8 8 0 01-6-9.6l16-69.33a8 8 0 1115.6 3.6l-16 69.33a8 8 0 01-9.6 6z"></path><path class="fill-primary" d="M237.33 0H18.67A18.76 18.76 0 000 18.67v144a18.76 18.76 0 0018.67 18.67h81.68c-1.25 5.35-4.57 14-13.45 22.9a5.33 5.33 0 003.77 9.1h74.67a5.33 5.33 0 003.78-9.1c-8.86-8.86-12.27-17.54-13.6-22.9h81.82A18.77 18.77 0 00256 162.67v-144A18.79 18.79 0 00237.33 0zm-2.66 138.67H21.33V21.34h213.33v117.33z"></path></svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">
                  Web Development
                </h3>
                <p className="!mb-0">
                  Creating responsive, user-friendly websites tailored to your business needs and goals.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" data-inject-url="https://kodkraft.com/assets/img/icons/solid/devices.svg" className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mr-4"><path class="fill-primary" d="M226.67 0H80a29.35 29.35 0 00-29.33 29.33v13.33H72v-8a13.34 13.34 0 0113.33-13.33h136a13.34 13.34 0 0113.33 13.33v186.67a13.35 13.35 0 01-13.33 13.33h-82.74A44.07 44.07 0 01132.7 256h94a29.33 29.33 0 0029.3-29.33V29.33A29.35 29.35 0 00226.67 0z"></path><path class="fill-secondary" d="M97.17 64h-77C9 64 0 73.87 0 86v148c0 12.13 9 22 20.16 22h77c11.12 0 20.16-9.87 20.16-22V86c.01-12.13-9.03-22-20.15-22zm5.5 168c0 4.42-3.28 8-7.33 8H22c-4.05 0-7.33-3.58-7.33-8V85.33c0-4.42 3.28-8 7.33-8h3.66c4.05 0 7.33 3.58 7.33 8s3.28 8 7.33 8H77c4.05 0 7.33-3.59 7.33-8s3.28-8 7.33-8h3.66c4 0 7.33 3.58 7.33 8V232z"></path><path class="fill-primary" d="M154.67 186.67A13.33 13.33 0 10168 200a13.35 13.35 0 00-13.33-13.33z"></path></svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Mobile App Development</h3>
                <p className="!mb-0">
                  Building intuitive, high-performing mobile applications for iOS and Android platforms.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.99 256.01" data-inject-url="https://kodkraft.com/assets/img/icons/solid/rocket.svg" className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mr-4"><path class="fill-primary" d="M250.75 0c-50-.89-107 25.22-143 65.75a135.36 135.36 0 00-92.77 39.5 5.32 5.32 0 003 9.07L59 120.23l-5 5.68a5.34 5.34 0 00.2 7.33l68.56 68.56a5.32 5.32 0 007.33.21l5.68-5.08 5.86 41.07a5.31 5.31 0 003.78 4.11 4.88 4.88 0 001.52.24 6.06 6.06 0 004.12-1.71 135 135 0 0039.16-92.42c40.57-36.14 66.89-93.12 65.74-143a5.33 5.33 0 00-5.2-5.2zM201.6 92.1a26.66 26.66 0 110-37.71 26.57 26.57 0 010 37.71z"></path><path class="fill-secondary" d="M29.05 180.31C17.63 191.72 2 243.3.22 249.14A5.36 5.36 0 005.33 256a5.41 5.41 0 001.53-.23c5.84-1.74 57.41-17.42 68.83-28.85a33 33 0 00-46.64-46.62z"></path></svg>

              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Code Review & Maintenance</h3>
                <p className="!mb-0">
                  Ensuring seamless, high-performance code that enhances reliability, security, and user experience.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.34 256" data-inject-url="https://kodkraft.com/assets/img/icons/solid/coffee-cup.svg" className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mr-4"><g data-name="Layer 2"><path class="fill-primary" d="M150.66 256h-88a32.07 32.07 0 01-31.93-30L21.38 78a10.67 10.67 0 1121.29-1.36l9.39 148a10.68 10.68 0 0010.64 10h88a10.68 10.68 0 0010.64-10l9.39-148A10.67 10.67 0 01192 78l-9.39 148a32.07 32.07 0 01-31.95 30z"></path><path class="fill-primary" d="M194.67 85.33h-176A18.69 18.69 0 010 66.66v-5.33a18.69 18.69 0 0118.67-18.67h176a18.68 18.68 0 0118.67 18.67v5.33a18.69 18.69 0 01-18.67 18.67z"></path><path class="fill-primary" d="M181.33 61.34A10.65 10.65 0 01171 53.42l-6.45-24.16a10.67 10.67 0 00-10.3-7.92H59.06a10.69 10.69 0 00-10.31 7.92L42.3 53.42a10.66 10.66 0 11-20.6-5.5l6.44-24.16A32.06 32.06 0 0159.06 0h95.23a32.05 32.05 0 0130.91 23.76l6.45 24.16A10.67 10.67 0 01184.1 61a11.09 11.09 0 01-2.77.34z"></path><path class="fill-secondary" d="M133.62 133.06c-18.2-18.2-45.11-21-60-6.08s-12.12 41.76 6.08 60c10.32 10.32 23.41 15.66 35.54 15.66 9.26 0 18-3.13 24.43-9.57 14.83-14.86 12.11-41.76-6.09-60zm-35.56.33c8 0 17.09 3.84 24.24 11a37 37 0 0110.64 20.13 37.76 37.76 0 00-2.6-2.93c-8.44-8.33-16.52-9-23-9.55-5.28-.43-8.79-.72-13-4.89-3.89-3.94-4.45-7.25-4.88-11.86a19.79 19.79 0 018.6-1.9zm-7 42.24a37.33 37.33 0 01-10.66-20.14c.79 1 1.64 1.95 2.61 2.94 8.43 8.34 16.51 9 23 9.55 5.28.44 8.78.72 13 5 3.89 3.89 4.44 7.21 4.8 11.82-9.1 4.26-22.81.83-32.78-9.12z"></path></g></svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">Branding & Identity</h3>
                <p className="!mb-0">
                  Crafting compelling brand strategies and visuals to distinguish your business.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" data-inject-url="https://kodkraft.com/assets/img/icons/solid/layout-2.svg" className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mr-4"><path class="fill-secondary" d="M0 102.4v141.87A11.73 11.73 0 0011.73 256h51.2a11.73 11.73 0 0011.73-11.73V102.4a11.73 11.73 0 00-11.73-11.73h-51.2A11.73 11.73 0 000 102.4z"></path><path class="fill-primary" d="M244.27 0H11.73A11.73 11.73 0 000 11.73v51.2a11.73 11.73 0 0011.73 11.73h232.53A11.72 11.72 0 00256 62.93v-51.2A11.7 11.7 0 00244.27 0zM102.4 256h141.87A11.73 11.73 0 00256 244.27V102.4a11.73 11.73 0 00-11.73-11.73H102.4a11.73 11.73 0 00-11.73 11.73v141.87A11.73 11.73 0 00102.4 256z"></path></svg>              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">UX/UI Design
                </h3>
                <p className="!mb-0">
                  Designing seamless, user-centered interfaces that enhance engagement and usability.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[40px]">
            <div className="flex flex-row">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 234.67" data-inject-url="https://kodkraft.com/assets/img/icons/solid/search.svg" className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-grape-fuchsia !mr-4"><path class="fill-secondary" d="M117.15 74.85a53.33 53.33 0 1053.33 53.33 53.39 53.39 0 00-53.33-53.33zm0 85.33a32 32 0 1132-32 32 32 0 01-32 32z"></path><path class="fill-secondary" d="M149.7 149.68a10.61 10.61 0 017.53 3.12l31.65 31.65a10.67 10.67 0 01-15.09 15.09l-31.65-31.65a10.67 10.67 0 017.56-18.21z"></path><path class="fill-primary" d="M224 0H32A32 32 0 000 32v170.67a32 32 0 0032 32h192a32 32 0 0032-32V32a32 32 0 00-32-32zm0 213.33H32a10.68 10.68 0 01-10.67-10.67V53.33h213.33v149.33A10.67 10.67 0 01224 213.33z"></path></svg>
              </div>
              <div>
                <h3 className="!text-[1.1rem] !mb-1">SEO, SEM & Social Media
                </h3>
                <p className="!mb-0">
                  Enhancing online visibility and driving targeted traffic through search and social media strategies.
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap bg-[#f7f7fd] mx-[-7.5px] !mt-[-50px] !mb-[5rem] xl:!mb-[8rem] lg:!mb-[8rem] md:!mb-[8rem] items-center">
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
            <figure className="m-0 p-0">
              <Image
                className="w-auto"
                alt="image"
                src="/assets/images/stack2.png"
                width={800}
                height={925}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[7.5px] !mt-[50px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              Our Technology Stack
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4">
              We leverage a robust technology stack to deliver cutting-edge solutions.
            </h3>
            <p className="!mb-6">
              At KodKraft, we believe in harnessing the power of the latest technologies to create innovative and impactful digital experiences. Our skilled developers utilize a diverse set of tools and frameworks to ensure your project is built with efficiency, scalability, and maintainability in mind.
            </p>
            <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  <li className="relative !pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Future-Proof Solutions.</span>
                  </li>
                  <li className="relative !pl-6 !mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>High Performance.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
                <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                  <li className="relative !pl-6">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Seamless Integration.</span>
                  </li>
                  <li className="relative !pl-6 !mt-3">
                    <span>
                      <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                    </span>
                    <span>Cross-Platform Compatibility.</span>
                  </li>
                </ul>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-50px] items-center">
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] xl:!order-2 lg:!order-2 !relative !mt-[50px]">
            <figure className="rounded-[0.4rem]">
              <Image
                className="max-w-full h-auto rounded-[0.4rem]"
                alt="image"
                src="/assets/images/laptop.jpg"
                width={625}
                height={590}
              />
            </figure>
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute xl:block lg:block md:block max-sm:!hidden"
              style={{ top: "15%", left: "-7%" }}
            >
              <div className="card-body py-4 px-5">
                <div className="flex flex-row items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 234.66"
                      data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/cloud-group.svg"
                      className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-duo text-grape-fuchsia mr-3"
                    >
                      <circle
                        className="fill-secondary"
                        cx={128}
                        cy="149.33"
                        r="21.33"
                      />
                      <path
                        className="fill-secondary"
                        d="M162.67 234.66H93.34a8 8 0 01-8-8v-16a29.36 29.36 0 0129.33-29.33h26.67a29.35 29.35 0 0129.33 29.33v16a8 8 0 01-8 8zm32-64h-14.19a55.46 55.46 0 0116.85 40v2.67H216a8.06 8.06 0 008-8V200a29.32 29.32 0 00-29.33-29.34zm-133.34 0A29.31 29.31 0 0032 200v5.35a8.06 8.06 0 008 8h18.67v-2.67a55.46 55.46 0 0116.85-40z"
                      />
                      <circle
                        className="fill-secondary"
                        cx="74.67"
                        cy="138.66"
                        r="21.33"
                      />
                      <circle
                        className="fill-secondary"
                        cx="181.33"
                        cy="138.66"
                        r="21.33"
                      />
                      <path
                        className="fill-primary"
                        d="M27.2 162.94a52.21 52.21 0 018.8-6.56A42.48 42.48 0 01107.73 112a41 41 0 0140.54 0A42.48 42.48 0 01220 156.38a55.09 55.09 0 015.83 4 64.4 64.4 0 00-26.65-118.49A81.31 81.31 0 00128 0C90.19 0 57.39 26.3 49.1 62.18 21.54 65.07 0 88.22 0 116.26c0 19.93 11 37.21 27.2 46.68z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="!text-[1.25rem] counter !leading-[1.4] !mb-0 whitespace-nowrap">
                      100+
                    </h3>
                    <p className="!text-[0.8rem] leading-normal !mb-0 whitespace-nowrap">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
            <div
              className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] !absolute !text-center xl:block lg:block md:block max-sm:!hidden"
              style={{ bottom: "10%", left: "-10%" }}
            >
              <div className="card-body p-6">
                <div className="progressbar semi-circle fuchsia !relative !mb-3 !m-[0_auto_1rem] !w-[8.5rem] !h-[4.25rem]">
                  <ProgressCircle max={80} />
                </div>
                <h4 className="!mb-0">Creativity</h4>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !px-[15px] max-w-full !mt-[50px]">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] !leading-[1.35] uppercase text-gradient gradient-1 !mb-3">
              What Makes Us Different?
            </h2>
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] font-semibold !leading-[1.25] !tracking-[normal] !mb-4 xl:mr-[-1.25rem] lg:mr-[-1.25rem]">
              Crafted with Care,<br />
              Designed for You.
            </h3>
            <p className="!mb-6">
              We believe that every digital experience should be a reflection of its creator. That's why we pour our heart and soul into every project. Our passion for crafting beautiful, intuitive, and effective websites sets us apart. We take pride in paying attention to the smallest details, ensuring that your online presence is not only visually stunning but also user-friendly and accessible worldwide.
            </p>
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary">
              <li className="relative !pl-6">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Every project is a masterpiece, crafted to perfection..
              </li>
              <li className="relative !pl-6">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                From typography to color palettes, we obsess over the details.
              </li>
              <li className="relative !pl-6">
                <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center bg-secondary !text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell" />
                Creating intuitive interfaces that are easy to navigate and enjoyable to use.
              </li>
            </ul>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
