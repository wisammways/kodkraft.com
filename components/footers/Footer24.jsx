"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer24() {
  return (
    <footer className="bg-[rgba(246,247,249,1)]">
      <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
        <div className="xl:!flex lg:!flex flex-row xl:!items-center lg:!items-center">
          <h3 className="xl:!text-[2rem] !text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] !tracking-[-0.03em] !mb-6 lg:!mb-0 xl:!mb-0 lg:!pr-40 xl:!pr-60 xxl:!pr-[22.5rem]">
            Join our community by using our services and grow your business.
          </h3>
          <a
            href="#"
            className="btn btn-lg btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] rounded !mb-0 whitespace-nowrap"
          >
            Try It For Free
          </a>
        </div>
        {/*/div */}
        <hr className="!mt-[3rem] !mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]" />
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <Image
                className="!mb-4"
                srcSet="/assets/img/logo-dark@2x.png 2x"
                alt="image"
                src="/assets/img/logo-dark.png"
                width={134}
                height={26}
              />
              <p className="!mb-4">
                © {new Date().getFullYear()} Sandbox.{" "}
                <br className="hidden xl:block lg:block" />
                All rights reserved.
              </p>
              <nav className="nav social social-muted">
                {socialLinks.map((elm, i) => (
                  <a
                    key={i}
                    className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                    href={elm.href}
                  >
                    <i
                      className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-[${elm.color}] text-[1rem]`}
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
            <div className="widget">
              <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                Get in Touch
              </h4>
              <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </address>
              <a
                className="!text-[#60697b] hover:!text-[#60697b]"
                href="mailto:first.last@email.com"
              >
                info@email.com
              </a>
              <br />
              00 (123) 456 78 90
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                Learn More
              </h4>
              <ul className="pl-0 list-none !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#60697b] hover:!text-[#343f52]"
                      href={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget">
              <h4 className="widget-title !mb-3 !tracking-[-0.03em]">
                Our Newsletter
              </h4>
              <p className="!mb-5">
                Subscribe to our newsletter to get our news &amp; deals
                delivered to you.
              </p>
              <div className="newsletter-wrapper">
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup2">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate dark-fields"
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                        <input
                          type="email"
                          defaultValue=""
                          name="EMAIL"
                          className="required form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:bg-[#ffffff] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
                          placeholder=""
                          id="mce-EMAIL2"
                        />
                        <label
                          className="!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                          htmlFor="mce-EMAIL2"
                        >
                          Email Address
                        </label>
                        <input
                          type="submit"
                          defaultValue="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-navy !text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:!border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52] !relative z-[2] focus:z-[5] hover:!transform-none hover:!translate-none border-0"
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
  );
}
