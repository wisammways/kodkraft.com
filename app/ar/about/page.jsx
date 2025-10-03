import Footer from "@/components/used/Footer";
import Header from "@/components/used/Header";
import Contact from "@/components/used/homes/home-15/Contact";
import Image from "next/image";
import React from "react";

export const metadata = {
  title:
    "من نحن - KodKraft - شركة تطوير البرمجيات الرائدة في لبنان",
  description:
    "تعرف على KodKraft – فريق متحمس من المطورين والمصممين وخبراء تجربة المستخدم يقوم بصياغة تجارب رقمية مخصصة تجمع بين الإبداع والدقة والابتكار.",
};

export default function About() {
  return (
    <>
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
                  من نحن
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a className="!text-white hover:text-white" href="/ar">
                        الرئيسية
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      من نحن
                    </li>
                  </ol>
                </nav>
                {/* /nav */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>

        <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">

            {/* Who we are section + */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
                <div
                  className="shape bg-dot primary bg-[radial-gradient(#605dba_2px,transparent_2.5px)] rellax !w-[6rem] !h-[10rem] absolute z-[1] opacity-50"
                  data-rellax-speed={1}
                  style={{ top: "3rem", left: "5.5rem" }}
                />
                <div className="flex flex-wrap !relative overlap-grid-2">
                  <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:!mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:!mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:!mt-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <Image
                        className="!rounded-[.4rem]"
                        srcSet="/assets/img/photos/about2@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/about2.jpg"
                        width={450}
                        height={450}
                      />
                    </figure>
                  </div>
                  <div className="item xl:w-[55%] xl:!mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:!mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:!mt-[-45%] md:z-[4] md:ml-0">
                    <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                      <Image
                        className="!rounded-[.4rem]"
                        srcSet="/assets/img/photos/about3@2x.jpg 2x"
                        alt="image"
                        src="/assets/img/photos/about3.jpg"
                        width={450}
                        height={450}
                      />
                    </figure>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 409.6 362.5"
                  className="icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4"
                >
                  <path
                    className="lineal-stroke"
                    d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
                  />
                  <path
                    className="lineal-fill"
                    d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
                  />
                  <path
                    className="lineal-stroke"
                    d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
                  />
                </svg>
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-3">
                  من نحن؟
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                  نحن وكالة تجمع بين الاستراتيجية المبتكرة وخبرة التصميم والتطوير المتطورة.
                </p>
                <p className="!mb-6">
                  نحن فريق من المطورين المهرة ومصممي الجرافيك وأخصائيي تجربة المستخدم متحدون بشغف مشترك لصياغة تجارب رقمية استثنائية. في KodKraft، نجلب الإبداع والدقة والابتكار إلى كل مشروع، مما يضمن أن كل حل مصمم لتلبية احتياجاتك الفريدة. معاً، نسعى لإنشاء مواقع ويب وتطبيقات مذهلة بصرياً وسهلة الاستخدام ومصممة لدفع النجاح.
                </p>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/* Who we are section - */}

            {/* Our Proccess + */}
            <div className="flex flex-wrap mx-[-15px] !mb-5">
              <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 447"
                  data-inject-url="https://sandbox-tailwind-template.netlify.app/assets/img/icons/lineal/list.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] !mb-4 m-[0_auto]"
                >
                  <path
                    className="lineal-stroke"
                    d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
                  />
                  <circle className="lineal-fill" cx="102.4" cy="102.4" r="87.8" />
                  <path
                    className="lineal-stroke"
                    d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
                  />
                </svg>
                <h2 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 xl:!px-[4.5rem] lg:!px-[4.5rem]">
                  إليك 3 خطوات مبسطة لإحياء مشاريعك الرقمية.
                </h2>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] !mt-[-50px] items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full xl:!order-2 lg:!order-2">
                <div className="card xl:!mr-6 lg:!mr-6">
                  <div className="card-body p-6">
                    <div className="flex flex-row">
                      <div>
                        <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                          <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                            01
                          </span>
                        </span>
                      </div>
                      <div>
                        <h4 className="!mb-1">تحديد وتخطيط</h4>
                        <p className="!mb-0">
                          نتعاون لتحديد أهدافك ونطاق العمل والمتطلبات.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
                <div className="card !mt-6 xl:!ml-16 lg:!ml-16">
                  <div className="card-body p-6">
                    <div className="flex flex-row">
                      <div>
                        <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                          <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                            02
                          </span>
                        </span>
                      </div>
                      <div>
                        <h4 className="!mb-1">تصميم وتطوير</h4>
                        <p className="!mb-0">
                          ننشئ تصاميم مذهلة ونبني حلولاً قوية وقابلة للتوسع.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
                <div className="card !mt-6 xl:mx-6 lg:mx-6">
                  <div className="card-body p-6">
                    <div className="flex flex-row">
                      <div>
                        <span className="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none !mr-4 xl:!text-[1.3rem] !w-12 !h-12 !text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                          <span className="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]">
                            03
                          </span>
                        </span>
                      </div>
                      <div>
                        <h4 className="!mb-1">اختبار وإطلاق</h4>
                        <p className="!mb-0">
                          نختبر بدقة وننشر مشروعك لضمان أداء سلس.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*/.card-body */}
                </div>
                {/*/.card */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full">
                <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-3">
                  كيف نعمل؟
                </h2>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium xl:!pr-5 lg:!pr-5">
                  اكتشف كيف نحول أفكارك إلى حلول قوية بعمليتنا المثبتة.
                </p>
                <p>
                  نجمع بين الإبداع والتكنولوجيا والاستراتيجية لتقديم نتائج استثنائية. يعمل فريقنا عن كثب معك لضمان أن كل تفصيل يتماشى مع رؤيتك وأهداف عملك. من المفهوم إلى الإطلاق، نعطي الأولوية للجودة والابتكار وتجربة المستخدم.
                </p>
                <a
                  href="/ar/contact"
                  className="btn btn-primary !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:bg-[#605dba] hover:!border-[#605dba] active:text-white active:bg-[#605dba] active:border-[#605dba] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  احجز استشارة
                </a>
              </div>
              {/*/column */}
            </div>
            {/* Our Proccess + */}


          </div>
          {/* /.container */}
        </section>

        <div className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"></div>
      </div>
      <Footer hasMarginTop={false} />
    </>
  );
}