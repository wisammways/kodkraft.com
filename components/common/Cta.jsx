import { facts } from "@/data/facts";
import React from "react";
import Counter from "./Counter";

export default function Cta() {
  return (
    <section
      className="wrapper image-wrapper bg-auto no-overlay bg-image !text-center bg-map bg-[center_center] bg-no-repeat !bg-scroll relative z-[0]"
      style={{ backgroundImage: "url(/assets/img/map.png)" }}
    >
      <div className="container pt-0 pb-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 xl:pb-32 lg:pb-32 md:pb-32">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <h2 className="!text-[.75rem] uppercase !text-[#aab0bc] !mb-3 !tracking-[0.02rem] !leading-[1.35]">
              Hire us
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-8 lg:!px-14 xl:!px-14">
              Trusted by businesses worldwide, we delivers high-quality digital solutions.
            </h3>
          </div>
          {/* /.row */}
        </div>
        {/* /column */}
        <div className="flex flex-wrap mx-[-15px]">
          <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
            <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper !mt-[-20px] xl:!mt-0 lg:!mt-0 md:!mt-0">
                <div
                  className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
                >
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#605dba]">
                    Precision
                  </h3>
                  <p className="text-[0.8rem] font-medium !mb-0">
                    is at the core of our crafted solutions.
                  </p>
                </div>
                <div
                  className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
                >
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#605dba]">
                    Innovation
                  </h3>
                  <p className="text-[0.8rem] font-medium !mb-0">
                    drives our approach to digital solutions.
                  </p>
                </div>
                <div
                  className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !text-center !mt-[20px] xl:!mt-0 lg:!mt-0 md:!mt-0"
                >
                  <h3 className="counter counter-lg !text-[calc(1.345rem_+_1.14vw)] !tracking-[normal] !leading-none !mb-2 xl:!text-[2.2rem] !text-[#605dba]">
                    Excellence
                  </h3>
                  <p className="text-[0.8rem] font-medium !mb-0">
                    defines every project we deliver.
                  </p>
                </div>
            </div>
            {/*/.row */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
