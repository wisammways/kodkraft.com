"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer19() {
  return (
    <footer className="bg-[#21262c] opacity-100 section-frame xl:mx-6 xl:rounded-[1rem] lg:mx-6 lg:rounded-[1rem] md:mx-6 md:rounded-[1rem]">
      <div className="container pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay -translate-y-2/4 xl:mx-5 lg:mx-5 md:mx-5 [background-size:100%] bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)] before:rounded-[0.4rem]"
          style={{ backgroundImage: "url(/assets/img/photos/bg27.jpg)" }}
        >
          <div className="card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:!flex xl:!items-center lg:!flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left">
            <h3 className="xl:!text-[1.9rem] !text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] !mb-6 lg:!mb-0 xl:!mb-0 lg:!pr-[2.5rem] xl:!pr-[1.25rem] xxl:!pr-[8rem] !text-white">
              We are trusted by over 5000+ clients. Join them by using our
              services and grow your business.
            </h3>
            <a
              href="#"
              className="btn btn-lg btn-white rounded !mb-0 whitespace-nowrap"
            >
              Join Us
            </a>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
        <div className="!text-[#cacaca] xl:mx-5 lg:mx-5 md:mx-5 !mt-[-5rem] xl:!mt-0 lg:!mt-0">
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
              <div className="widget !text-[#cacaca]">
                <Image
                  className="!mb-4"
                  srcSet="/assets/img/logo-light@2x.png 2x"
                  alt="image"
                  src="/assets/img/logo-light.png"
                  width={134}
                  height={26}
                />
                <p className="!mb-4">
                  © {new Date().getFullYear()} Sandbox.
                  <br className="hidden xl:block lg:block !text-[#cacaca]" />
                  All rights reserved.
                </p>
                <nav className="nav social social-white">
                  {socialLinks.map((elm, i) => (
                    <a
                      key={i}
                      className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
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
              <div className="widget !text-[#cacaca]">
                <h4 className="widget-title !text-white !mb-3">Get in Touch</h4>
                <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                  Moonshine St. 14/05 Light City, London, United Kingdom
                </address>
                <a
                  className="!text-[#cacaca] hover:!text-[#747ed1]"
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
              <div className="widget !text-[#cacaca]">
                <h4 className="widget-title !text-white !mb-3">Learn More</h4>
                <ul className="pl-0 list-none !mb-0">
                  {footerLinks.map((elm, i) => (
                    <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                      <Link
                        className="!text-[#cacaca] hover:!text-[#747ed1]"
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
              <div className="widget !text-[#cacaca]">
                <h4 className="widget-title !text-white !mb-3">
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
                            className="required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)]"
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
                            className="btn btn-purple !text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:!border-[#747ed1] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !relative z-[2] hover:!transform-none hover:!translate-none border-0"
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
      </div>
      {/* /.container */}
    </footer>
  );
}
