"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, getBasePath } from "@/utlis/translations";
export default function Footer({ hasMarginTop = true }) {
  const pathname = usePathname();
  const basePath = getBasePath(pathname);

  // Define footer links with translations
  const footerLinksWithTranslations = [
    { href: "/about", textKey: "footer.links.aboutUs" },
    { href: "/services", textKey: "footer.links.services" },
    { href: "/projects", textKey: "footer.links.projects" },
    { href: "/contact", textKey: "footer.links.contactUs" },
  ];

  return (
    <>
      <div className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"></div>
      <footer
        className={`bg-[#252628] opacity-100 !text-[#cacaca] ${hasMarginTop ? "!mt-5 xl:!mt-24 lg:!mt-24 md:!mt-24" : ""
          } `}
      >
        <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
              <div className="widget !text-[#cacaca]">
                <Image
                  className="!mb-4"
                  alt="image"
                  src="/assets/img/logo.svg"
                  width={134}
                  height={26}
                />
                <p className="!mb-4">
                  © {new Date().getFullYear()} KodKraft.
                  <br className="hidden xl:block lg:block !text-[#cacaca]" />
                  {t(pathname, 'footer.copyright')}
                </p>
                <nav className="nav social social-white">
                  {socialLinks.map((elm, i) => (
                  <a
                    key={i}
                    className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href={elm.href}
                    target="_blank"
                  >
                    <i
                      className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem] hover:!text-[#ef3f6e]`}
                    />
                  </a>
                ))}
                </nav>
                {/* /.social */}
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
              <div className="widget !text-[#cacaca]">
                <h4 className="widget-title !text-white !mb-3">{t(pathname, 'footer.getInTouch')}</h4>
                <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                  Mar Mekhael, Beirut, Lebanon
                </address>
                <a
                  className="!text-[#cacaca] hover:!text-[#ef3f6e]"
                  href="mailto:info@kodkraft.com"
                >
                  info@kodkraft.com
                </a>
                <br />
                <a
                  className="!text-[#cacaca] hover:!text-[#ef3f6e]"
                  href="tel:+96181206923"
                >
                  +961 81 206 923
                </a>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
              <div className="widget !text-[#cacaca]">
                <h4 className="widget-title !text-white !mb-3">{t(pathname, 'footer.learnMore')}</h4>
                <ul className="pl-0 list-none !mb-0">
                  {footerLinksWithTranslations.map((elm, i) => (
                    <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                      <Link
                        className="!text-[#cacaca] hover:!text-[#ef3f6e]"
                        href={`${basePath}${elm.href}`}
                      >
                        {t(pathname, elm.textKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
              <div className="widget !text-[#cacaca]">
                <h4 className="widget-title !text-white !mb-3">{t(pathname, 'footer.ourNewsletter')}</h4>
                <p className="!mb-5">
                  {t(pathname, 'footer.newsletterDescription')}
                </p>
                <div className="newsletter-wrapper">
                  {/* Begin Mailchimp Signup Form */}
                  <div id="mc_embed_signup2">
                    <form
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      className="validate dark-fields"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div id="mc_embed_signup_scroll2">
                        <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                          <input
                            type="email"
                            defaultValue=""
                            name="EMAIL"
                            className="required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]"
                            placeholder=""
                            id="mce-EMAIL2"
                          />
                          <label
                            className="!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                            htmlFor="mce-EMAIL2"
                          >
                            {t(pathname, 'footer.emailAddress')}
                          </label>
                          <input
                            type="submit"
                            defaultValue={t(pathname, 'footer.join')}
                            name="subscribe"
                            id="mc-embedded-subscribe2"
                            className="btn btn-primary !text-white !bg-[#605dba] border-[#605dba] hover:text-white hover:!bg-[#ef3f6e] hover:!border-[#ef3f6e] active:text-white active:bg-[#ef3f6e] active:border-[#ef3f6e] disabled:text-white disabled:bg-[#605dba] disabled:border-[#605dba] !relative z-[2] focus:z-[5] hover:!transform-none hover:!translate-none border-0"
                          />
                        </div>
                        <div id="mce-responses2" className="clear">
                          <div
                            className="response"
                            id="mce-error-response2"
                            style={{ display: "none" }}
                          />
                          <div
                            className="response"
                            id="mce-success-response2"
                            style={{ display: "none" }}
                          />
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                            tabIndex={-1}
                            defaultValue=""
                          />
                        </div>
                        <div className="clear" />
                      </div>
                    </form>
                  </div>
                  {/*End mc_embed_signup*/}
                </div>
                {/* /.newsletter-wrapper */}
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
          </div>
          {/*/.row */}
        </div>
        {/* /.container */}
      </footer>
    </>
  );
}
