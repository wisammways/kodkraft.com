import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center xl:!mb-[5rem] lg:!mb-[5rem] md:!mb-[5rem]">
      <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
        <figure className="m-0 p-0">
          <Image
            className="w-auto"
            srcSet="/assets/img/illustrations/i17@2x.png 2x"
            alt="image"
            src="/assets/img/illustrations/i17.png"
            width={800}
            height={531}
          />
        </figure>
      </div>
      {/*/column */}
      <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
        <h2 className="!text-[.75rem] uppercase !text-[#747ed1] !tracking-[0.02rem] !leading-[1.35] !mb-3">
          Our Solutions
        </h2>
        <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-5">
          We make your spending stress-free for you to have the perfect control.
        </h3>
        <p className="!mb-6">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus.
        </p>
        <div className="flex flex-wrap mx-[-15px] !mt-[-15px]">
          <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                </span>
                <span>Aenean quam ornare. Curabitur blandit.</span>
              </li>
              <li className="relative !pl-6 !mt-3">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                </span>
                <span>Nullam quis risus eget urna mollis ornare</span>
              </li>
            </ul>
          </div>
          {/*/column */}
          <div className="xl:w-6/12 w-full flex-[0_0_auto] !mt-[15px] xl:!px-[20px] !px-[15px] max-w-full">
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
              <li className="relative !pl-6">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                </span>
                <span>Etiam porta euismod malesuada mollis.</span>
              </li>
              <li className="relative !pl-6 !mt-3">
                <span>
                  <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex justify-center items-center bg-[#e6e8f7] !text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0" />
                </span>
                <span>Vivamus sagittis lacus vel augue rutrum.</span>
              </li>
            </ul>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/*/column */}
    </div>
  );
}
