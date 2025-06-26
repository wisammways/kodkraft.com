"use client";
import { posts3 } from "@/data/blogs";
import { socialLinks } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar2() {
  return (
    <aside className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] max-w-full sidebar !mt-[3rem] xl:!mt-6 lg:!mt-6">
      <div className="widget">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="search-form relative before:content-['\eca5'] before:block before:absolute before:-translate-y-2/4 before:text-[0.9rem] before:!text-[#959ca9] before:z-[9] before:right-3 before:top-2/4 font-Unicons"
        >
          <div className="form-floating relative !mb-0">
            <input
              id="search-form"
              type="text"
              className="form-control relative block w-full text-[.75rem] font-medium !text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus-visible:!border-[rgba(63,120,224,0.5)] placeholder:!text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] !leading-[1.25]"
              placeholder=""
            />
            <label
              htmlFor="search-form"
              className="inline-block !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
            >
              Search
            </label>
          </div>
        </form>
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">About Us</h4>
        <p>
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec
          id elit non mi porta gravida at eget metus.
        </p>
        <nav className="nav social">
          {socialLinks.map((elm, i) => (
            <a
              key={i}
              className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              href={elm.href}
            >
              <i
                className={`text-[1rem] !text-[${elm.color}] before:content-[${elm.unicode}] uil ${elm.icon}`}
              />
            </a>
          ))}
        </nav>
        {/* /.social */}
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Popular Posts</h4>
        <ul className="m-0 p-0 after:content-[''] after:block after:h-0 after:clear-both after:invisible">
          {posts3.map((post, i) => (
            <li
              key={post.id}
              className={`clear-both block overflow-hidden ${
                i !== 0 ? "!mt-4" : ""
              }`}
            >
              <figure className="!rounded-[.4rem] float-left w-14 !h-[4.5rem]">
                <Link href={`/blog-post`}>
                  <Image
                    className="!rounded-[.4rem]"
                    alt="image"
                    src={post.image}
                    width={100}
                    height={100}
                  />
                </Link>
              </figure>
              <div className="!relative !ml-[4.25rem] !mb-0">
                <h6 className="!mb-2">
                  <Link
                    className="!text-[#343f52] hover:!text-[#605dba]"
                    href={`/blog-post`}
                  >
                    {post.title}
                  </Link>
                </h6>
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                  <li className="post-date inline-block">
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    <span>{post.date}</span>
                  </li>
                  <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                    <a
                      className="!text-[#aab0bc] hover:!text-[#605dba] hover:!border-[#605dba]"
                      href="#"
                    >
                      <i className="uil uil-comment pr-[0.2rem] align-[-.05rem] before:content-['\ea54']" />
                      {post.comments}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
        {/* /.image-list */}
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Categories</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              Teamwork (21)
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              Ideas (19)
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              Workspace (16)
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              Coding (7)
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              Meeting (12)
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              Business Tips (14)
            </a>
          </li>
        </ul>
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Tags</h4>
        <ul className="pl-0 list-none tag-list">
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Still Life
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Urban
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Nature
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Landscape
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Macro
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Fun
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Workshop
            </a>
          </li>
          <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
            <a
              href="#"
              className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:!pr-[0.2rem]"
            >
              Photography
            </a>
          </li>
        </ul>
      </div>
      {/* /.widget */}
      <div className="widget !mt-[40px]">
        <h4 className="widget-title !mb-3">Archive</h4>
        <ul className="pl-0 list-none bullet-primary !text-inherit">
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              February 2019
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              January 2019
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              December 2018
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              November 2018
            </a>
          </li>
          <li className="relative !pl-[1rem] before:absolute before:top-[-0.15rem] before:text-[1rem] before:content-['\2022'] before:left-0 before:font-SansSerif !mt-[.35rem]">
            <a className="!text-[#60697b] hover:!text-[#605dba]" href="#">
              October 2018
            </a>
          </li>
        </ul>
      </div>
      {/* /.widget */}
    </aside>
  );
}
