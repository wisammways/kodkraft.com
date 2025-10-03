import Cta from "@/components/used/common/Cta";
import Contact1 from "@/components/used/contact/Contact1";
import Footer5 from "@/components/used/footers/Footer5";
import Header from "@/components/used/Header";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title: "Contact Us - KodKraft - Let's Build Something Great Together",
  description:
    "Get in touch with KodKraft to discuss your project. Our team is ready to help you achieve your digital goals with innovative solutions.",
  alternates: {
    canonical: 'https://kodkraft.com/contact',
    languages: {
      'en': 'https://kodkraft.com/contact',
      'de': 'https://kodkraft.com/de/contact',
      'x-default': 'https://kodkraft.com/contact',
    },
  },
};
export default function ContactPage() {
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
                  Get in Touch
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a className="!text-white hover:text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Contact
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
        <Contact1 />
        <Cta />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
