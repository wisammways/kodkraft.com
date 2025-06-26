import React from "react";
import Image from "next/image";
export default function Team() {
  return (
    <section className="wrapper bg-[rgba(246,247,249,1)]">
      <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <h2 className="!text-[0.8rem] uppercase !text-[#605dba] !mb-3 !leading-[1.35] !tracking-[0.02rem]">
              Our Team
            </h2>
            <h3 className="xl:!text-[2rem] !leading-[1.2] !text-[calc(1.325rem_+_0.9vw)] font-semibold lg:!px-32 xl:!px-14 xxl:!px-20 !mb-6">
              Save your time and money by choosing our professional team.
            </h3>
            <p className="!mb-8 lg:!px-10 xl:!px-0">
              Curabitur blandit tempus porttitor. Maecenas faucibus mollis
              interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </p>
            <a
              href="#"
              className="btn btn-primary !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba]"
            >
              Read More
            </a>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
      <figure className="m-0 p-0">
        <Image
          className="w-full max-w-full !h-auto"
          alt="image"
          src="/assets/img/photos/bg12.jpg"
          width={2800}
          height={1000}
        />
      </figure>
    </section>
  );
}
