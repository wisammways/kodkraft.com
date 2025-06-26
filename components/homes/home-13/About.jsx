import React from "react";
import Image from "next/image";
import { facts } from "@/data/facts";
import Counter from "@/components/common/Counter";
import { features } from "@/data/features";
import { steps } from "@/data/process";
export default function About() {
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0">
      <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">


        <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
          How We Do It?
        </h2>
        <p className="lead !mb-8 !text-[1.05rem] !leading-[1.6]">
          We make your
          <span className="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:!mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(116,126,209,.12)]">
            vision
          </span>
          reality for you to achieve digital success.
        </p>
        <div
          className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-30px] process-wrapper line"
          data-cues="slideInUp"
          data-group="process"
        >
          <div
            className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden`}
          >
            <span
              className={`icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]`}
            >
              <span className="number">01</span>
            </span>
            <h4 className="!mb-1">Discovery & Planning</h4>
            <p>We define your goals, scope, and requirements to create a clear project roadmap.</p>
          </div>
          <div
            className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden`}
          >
            <span
              className={`icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]`}
            >
              <span className="number">02</span>
            </span>
            <h4 className="!mb-1">Design & Prototyping</h4>
            <p>We craft user-friendly, responsive designs and interactive prototypes for your approval.</p>
          </div>
          <div
            className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden`}
          >
            <span
              className={`icon btn btn-circle btn-lg btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]`}
            >
              <span className="number">03</span>
            </span>
            <h4 className="!mb-1">Development & Testing</h4>
            <p>We build and rigorously test your application to ensure performance, security, and scalability.</p>
          </div>
          <div
            className={`md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[35px] lg:!px-[20px] !mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit max-lg:after:!hidden`}
          >
            <span
              className={`icon btn btn-circle btn-lg btn-soft-purple pointer-events-none !mb-4 !relative z-[2] xl:!text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]`}
            >
              <span className="number">04</span>
            </span>
            <h4 className="!mb-1">Launch & Support</h4>
            <p>We deploy your application and provide ongoing support to keep it running smoothly.</p>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
