import Footer from "@/components/used/Footer";
import Header from "@/components/used/Header";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "404 - KodKraft - Leading Software Development Company in Lebanon",
  description:
    "KodKraft crafts stunning, user-friendly websites & apps. Skilled developers, designers, and UX specialists united to drive your digital success. Let’s build something great!",
};

export default function NotFoundPage() {
  return (
    <div className="color-purple demo11">

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
                  Oops! Page Not Found.
                </h1>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <section className="wrapper !bg-[#ffffff]">
          <div className="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                <p className="lead !leading-[1.65] text-[0.9rem] font-medium !mb-7 md:!px-14 lg:!px-5 xl:!px-7">
                  The page you are looking for is not available or has been
                  moved. Try a different page or go to homepage with the button
                  below.
                </p>
                <Link
                  href={`/`}
                  className="btn btn-primary !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Go to Homepage
                </Link>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

      </div>

      <Footer hasMarginTop={false} />

    </div>
  );
}
