import React from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import Nav from "./Nav";
import LanguageSelect from "./headers/LanguageSelect";

export default function Header() {
  return (
    <header className="relative wrapper !bg-[#f2f3fb]">
      <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-dark">
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand">
            <Link href={`/`}>
              <Image
                className="logo-dark"
                srcSet="/assets/img/logo-purple@2x.png 2x"
                alt="image"
                src="/assets/img/logo-purple.png"
                width={134}
                height={26}
              />
              <Image
                className="logo-light"
                alt="image"
                src="/assets/img/logo.svg"
                width={134}
                height={26}
              />
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
              <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                <Image
                  className="logo-light"
                  alt="image"
                  src="/assets/img/logo.svg"
                  width={134}
                  height={26}
                />
              </h3>
              <button
                type="button"
                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
              <Nav />
              {/* /.navbar-nav */}
              <div className="offcanvas-footer xl:!hidden lg:!hidden">
                <div>
                  <a
                    href="mailto:first.last@email.com"
                    className="link-inverse"
                  >
                    info@kodkraft.com
                  </a>
                  <br />
                  <a
                    href="tel:+96170712315"
                    className="link-inverse"
                  >
                  00 (961) 70 712 315 </a><br />
                <nav className="nav social social-white !mt-4">
                  {socialLinks.slice(0, 4).map((elm, i) => (
                    <a
                      key={i}
                      className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                      href={elm.href}
                    >
                      <i
                        className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                      />
                    </a>
                  ))}
                </nav>
                {/* /.social */}
              </div>
            </div>
            {/* /.offcanvas-footer */}
          </div>
          {/* /.offcanvas-body */}
        </div>
        {/* /.navbar-collapse */}
        <div className="navbar-other lg:!ml-4 xl:!ml-4">
          <ul className="navbar-nav !flex-row !items-center !ml-auto">
            <li className="nav-item dropdown language-select uppercase group">
              <LanguageSelect />
            </li>
            <li className="nav-item hidden xl:block lg:block md:block">
              <a href="#" className="btn btn-sm btn-white !rounded-[50rem]">
                Book A Consultancy
              </a>
            </li>
            <li className="nav-item xl:!hidden lg:!hidden">
              <button className="hamburger offcanvas-nav-btn">
                <span />
              </button>
            </li>
          </ul>
          {/* /.navbar-nav */}
        </div>
        {/* /.navbar-other */}
      </div>
      {/* /.container */}
    </nav>
      {/* /.navbar */ }
    </header >
  );
}
