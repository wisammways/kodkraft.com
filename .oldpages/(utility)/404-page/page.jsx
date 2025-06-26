import Footer5 from "@/components/footers/Footer5";
import Header32 from "@/components/headers/Header32";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "Page Not Found || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function NotFoundPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header32
          parentClass="relative wrapper !bg-[#ffffff]"
          navClass="navbar navbar-expand-lg center-nav transparent navbar-light"
        />
        <section className="wrapper !bg-[#ffffff]">
          <div className="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <figure className="!mb-10">
                  <Image
                    className="max-w-full h-auto"
                    srcSet="/assets/img/illustrations/404@2x.png 2x"
                    alt="image"
                    width={800}
                    height={316}
                    src="/assets/img/illustrations/404.png"
                  />
                </figure>
              </div>
              {/* /column */}
              <div className="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                <h1 className="!mb-3">Oops! Page Not Found.</h1>
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
      <Footer5 />
    </>
  );
}
