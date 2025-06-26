import React from "react";

export default function Services() {
  return (
    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] !mb-[4.5rem] !mt-[-9rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
      <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
          <div className="card-body flex-[1_1_auto] p-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/edit.svg"
              className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#e668b3] text-fuchsia !mb-3"
            >
              <path
                className="fill-primary"
                d="M152 0H29.33A29.32 29.32 0 000 29.33v165.33A29.32 29.32 0 0029.33 224h78.72l2.35-13.12a29.71 29.71 0 018.11-15.68l62.83-62.72V29.33A29.33 29.33 0 00152 0zM42.67 42.67h42.67a10.67 10.67 0 110 21.33H42.66a10.67 10.67 0 010-21.33zM96 149.33H42.67a10.67 10.67 0 110-21.33H96a10.67 10.67 0 110 21.33zm42.67-42.66h-96a10.67 10.67 0 010-21.34h96a10.67 10.67 0 110 21.34z"
              />
              <path
                className="fill-secondary"
                d="M133.63 256a8 8 0 01-7.89-9.38l5.67-32.06a8 8 0 012.22-4.27l79.2-79.2c9.73-9.75 19.28-7.12 24.51-1.89l13.2 13.2a18.69 18.69 0 010 26.4l-79.2 79.2a7.83 7.83 0 01-4.27 2.22l-32 5.67a10.71 10.71 0 01-1.44.11zm32.05-13.65z"
              />
            </svg>
            <h4>Content Marketing</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#e668b3] focus:!text-[#e668b3] hover:!text-[#e668b3]"
            >
              Learn More
            </a>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
      <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
          <div className="card-body flex-[1_1_auto] p-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 255.98 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/team.svg"
              className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#a07cc5] text-violet !mb-3"
            >
              <circle className="fill-primary" cx={128} cy="26.67" r="26.67" />
              <circle className="fill-primary" cx="202.67" cy={176} r="26.67" />
              <circle className="fill-primary" cx="53.33" cy={176} r="26.67" />
              <path
                className="fill-primary"
                d="M173.33 106.67H82.66a8 8 0 01-8-8v-5.33A29.35 29.35 0 01104 64h48a29.35 29.35 0 0129.33 29.32v5.33a8 8 0 01-8 8.02zM248 256h-90.67a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48A29.36 29.36 0 01256 242.67V248a8 8 0 01-8 8zm-149.33 0H8a8 8 0 01-8-8v-5.33a29.36 29.36 0 0129.33-29.33h48a29.37 29.37 0 0129.33 29.33V248a8 8 0 01-8 8z"
              />
              <path
                className="fill-secondary"
                d="M29.33 136.13a8 8 0 01-8-8 107.1 107.1 0 0161.73-96.77 8 8 0 116.73 14.51 91 91 0 00-52.48 82.26 8 8 0 01-7.98 8zm197.34 0a8 8 0 01-8-8 91 91 0 00-52.48-82.26 8 8 0 116.74-14.51 107.09 107.09 0 0161.73 96.77 8 8 0 01-8 8zM128 234.8a105.08 105.08 0 01-11.15-.58 8 8 0 011.66-15.9 93.73 93.73 0 0019.6-.06 8 8 0 011.76 15.9 110.68 110.68 0 01-11.87.64z"
              />
            </svg>
            <h4>Social Engagement</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#a07cc5] focus:!text-[#a07cc5] hover:!text-[#a07cc5]"
            >
              Learn More
            </a>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
      <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
          <div className="card-body flex-[1_1_auto] p-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/lamp.svg"
              className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#f78b77] text-orange !mb-3"
            >
              <path
                className="fill-secondary"
                d="M128 36.86a8 8 0 01-8-8V8a8 8 0 0116 0v20.86a8 8 0 01-8 8zm70.1 29.04a8 8 0 01-5.67-13.64l14.77-14.77a8 8 0 1111.31 11.31l-14.77 14.77a8 8 0 01-5.64 2.33zM248 136h-20.86a8 8 0 010-16H248a8 8 0 010 16zm-35.15 84.85a8.06 8.06 0 01-5.67-2.34l-14.76-14.77a8 8 0 0111.31-11.31l14.77 14.77a8 8 0 010 11.31 7.92 7.92 0 01-5.65 2.34zm-169.7 0a8 8 0 01-5.66-13.65l14.77-14.77a8 8 0 0111.31 11.31L48.8 218.51a7.93 7.93 0 01-5.65 2.34zM28.86 136H8a8 8 0 010-16h20.86a8 8 0 110 16zM57.9 65.9a8 8 0 01-5.66-2.33L37.47 48.8a8 8 0 1111.31-11.31l14.77 14.77A8 8 0 0157.9 65.9z"
              />
              <path
                className="fill-primary"
                d="M160 224v13.33A18.76 18.76 0 01141.33 256h-26.67c-9 0-18.66-6.83-18.66-21.76V224zm15-154a74.93 74.93 0 00-63-15c-28.27 5.91-51.2 29-57.07 57.21a74.74 74.74 0 0028.16 75.41A32.19 32.19 0 0195.25 208v.12A2 2 0 0196 208h64a.93.93 0 01.53.11V208c1.49-8.11 6.29-15.57 13.65-21.33A74.72 74.72 0 00175 70zm-7 63.36a8.06 8.06 0 01-8-8A29.32 29.32 0 00130.67 96a8 8 0 110-16A45.43 45.43 0 01176 125.33a8.06 8.06 0 01-8 8z"
              />
              <path
                className="fill-secondary"
                d="M95.25 208H96a1.8 1.8 0 00-.75.11z"
              />
              <path
                className="fill-primary"
                d="M160.53 208v.11a.93.93 0 00-.53-.11z"
              />
            </svg>
            <h4>Identity &amp; Branding</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#f78b77] focus:!text-[#f78b77] hover:!text-[#f78b77]"
            >
              Learn More
            </a>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
      <div className="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] max-w-full !px-[15px] xl:!px-[12.5px] lg:!px-[12.5px] md:!px-[12.5px] !mt-[25px]">
        <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
          <div className="card-body flex-[1_1_auto] p-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/solid/delivery-box.svg"
              className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem] solid-mono text-[#45c4a0] text-green !mb-3"
            >
              <path
                className="fill-secondary"
                d="M172 20.57L55.79 80 9.6 57.32 123.71 1A9.43 9.43 0 01132 1zm74.27 36.75l-118.21 58.56-44.27-21.8-6.38-3.25L193.7 31.36l6.4 3.24z"
              />
              <path
                className="fill-primary"
                d="M118.59 132.76L118.46 256 5.23 196.91A9.89 9.89 0 010 188.22V74.2l48 23.64v41.55a9.6 9.6 0 1019.2 0v-31.94l6.4 3.12zm137.28-58.43l-118.08 58.31-.13 123.23L256 194.08z"
              />
            </svg>
            <h4>Product Design</h4>
            <p className="!mb-2">
              Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
              porta gravida at eget metus cras justo.
            </p>
            <a
              href="#"
              className="more hover !text-[#45c4a0] focus:!text-[#45c4a0] hover:!text-[#45c4a0]"
            >
              Learn More
            </a>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
    </div>
  );
}
