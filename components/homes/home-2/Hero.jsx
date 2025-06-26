import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex flex-wrap mx-[-15px] lg:mx-0 xl:mx-[-20px] !mb-7 md:!mb-10 lg:!mb-[6rem] xl:!mb-[6rem] items-center">
      <div
        className="md:w-8/12 md:!ml-[16.66666667%] lg:w-6/12 lg:!ml-[8.33333333%] xl:w-6/12 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] lg:px-0 xl:!px-[20px] max-w-full !relative lg:!order-2 xl:!order-2"
        data-cue="zoomIn"
      >
        <div
          className="shape bg-dot primary rellax !w-[7rem] !h-[9rem] absolute z-[1] opacity-50 !bg-[radial-gradient(#605dba_2px,transparent_2.5px)]"
          data-rellax-speed={1}
          style={{ top: "-1.7rem", left: "-1.5rem" }}
        />
        <div
          className="shape rounded !bg-[#edf2fc] rellax xl:block lg:block md:block absolute z-[1]"
          data-rellax-speed={0}
          style={{
            bottom: "-1.8rem",
            right: "-0.8rem",
            width: "85%",
            height: "90%",
          }}
        />
        <figure className="rounded-[0.4rem] relative z-[2]">
          <Image
            className="rounded-[0.4rem]"
            srcSet="/assets/img/photos/about7@2x.jpg 2x"
            alt="image"
            width={575}
            height={550}
            src="/assets/img/photos/about7.jpg"
          />
        </figure>
      </div>
      {/*/column */}
      <div
        className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] !px-[15px] lg:px-0 xl:!px-[20px] max-w-full xl:!mt-[-2.5rem] lg:!mt-[-2.5rem] !mt-[4rem] text-center lg:text-left xl:text-left"
        data-cues="slideInDown"
        data-group="page-title"
        data-delay={600}
      >
        <h1 className="!text-[calc(1.385rem_+_1.62vw)] !font-normal !tracking-[normal] font-DMSerif !leading-[1.1] xl:!text-[2.6rem] !mb-5">
          We bring solutions to make life easier for our customers.
        </h1>
        <p className="lead text-[1.25rem] leading-normal !mb-7 md:!px-10 lg:!px-0">
          We have considered our solutions to support every stage of your
          growth.
        </p>
        <div
          className="flex justify-center lg:!justify-start xl:!justify-start"
          data-cues="slideInDown"
          data-group="page-title-buttons"
          data-delay={900}
        >
          <span>
            <Link
              href={`/projects`}
              className="btn btn-lg btn-primary !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[50rem] !mr-2"
            >
              Explore Now
            </Link>
          </span>
          <span>
            <Link
              href={`/contact`}
              className="btn btn-lg btn-outline-primary !rounded-[50rem]"
            >
              Free Trial
            </Link>
          </span>
        </div>
      </div>
      {/*/column */}
    </div>
  );
}
