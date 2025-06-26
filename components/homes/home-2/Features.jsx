import { services } from "@/data/services";
import React from "react";

export default function Features() {
  return (
    <>
      <div className="flex flex-wrap mx-[-15px]">
        <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
          <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
            What We Do?
          </h2>
          <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-DMSerif !font-normal xl:!text-[2rem] !leading-[1.2] !mb-10">
            The service we offer is specifically designed to meet your needs.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] !mt-[-40px] !text-center !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
        {services.map((elm, i) => (
          <div
            key={i}
            className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] !px-[15px] xl:!px-[20px] lg:!px-[20px] md:!px-[20px] !mt-[40px] max-w-full"
          >
            <div className="icon btn btn-circle btn-lg btn-primary !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] pointer-events-none !mb-5 !w-[3rem] !h-[3rem] xl:!text-[1.3rem] !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%]">
              <i className={elm.iconClass} />
            </div>
            <h4>{elm.title}</h4>
            <p className="!mb-3">{elm.description}</p>
            <a href="#" className="more hover">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
