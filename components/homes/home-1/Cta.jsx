"use client";
import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <section className="wrapper bg-gradient-reverse-primary">
      <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-8 items-center">
          <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
            <figure className="m-0 p-0">
              <Image
                className="w-auto"
                srcSet="/assets/img/illustrations/i3@2x.png 2x"
                alt="image"
                src="/assets/img/illustrations/i3.png"
                width={800}
                height={573}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
            <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
              Analyze Now
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-5">
              Wonder how much faster your website can go? Easily check your SEO
              Score now.
            </h3>
            <p className="!mb-7">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-9/12 lg:w-9/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-floating input-group relative flex flex-wrap items-stretch w-full">
                    <input
                      type="url"
                      className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[#fefefe] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                      placeholder=""
                      id="seo-check"
                    />
                    <label
                      htmlFor="seo-check"
                      className="!text-[#959ca9] !mb-2 !inline-block text-[.75rem] !absolute !z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                    >
                      Enter Website URL
                    </label>
                    <button
                      className="btn btn-yellow !text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:!border-[#fab758] hover:!translate-none active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                      type="button"
                    >
                      Check
                    </button>
                  </div>
                </form>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
