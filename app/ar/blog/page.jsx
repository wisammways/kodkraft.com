import Footer from "@/components/used/Footer";
import Header from "@/components/used/Header";
import BlogIndex from "@/app/blog/page/shared/BlogIndex";
import React from "react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title: "المدونة - KodKraft - أحدث رؤى تطوير الويب",
  description:
    "اكتشف أحدث الاتجاهات في تطوير الويب، من الأدوات المدعومة بالذكاء الاصطناعي مثل GitHub Copilot إلى الأطر الحديثة مثل Laravel و React.js و Next.js و WordPress.",
  alternates: {
    canonical: 'https://kodkraft.com/ar/blog',
    languages: {
      'en': 'https://kodkraft.com/blog',
      'de': 'https://kodkraft.com/de/blog',
      'ar': 'https://kodkraft.com/ar/blog',
      'x-default': 'https://kodkraft.com/blog',
    },
  },
};

export default function BlogAR() {
  return (
    <>
      <div className="grow shrink-0" dir="rtl">
        <Header />

        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 !text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)]"
          style={{ backgroundImage: "url(/assets/img/photos/bg4.jpg)" }}
        >
          <div className="container pt-28 pb-40 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                  مدونتنا
                </h1>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !text-white">
                  اكتشف أحدث الاتجاهات والرؤى في تكنولوجيا تطوير الويب
                </p>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <Link className="!text-white hover:text-white" href="/ar">
                        الرئيسية
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      المدونة
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <BlogIndex page={1} basePath="/ar/blog" />
          </div>
        </section>
      </div>
      <Footer hasMarginTop={false} />
    </>
  );
}
