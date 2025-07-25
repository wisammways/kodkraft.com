"use client";

import { blogPosts } from "@/data/blogs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Blogs() {
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end relative border-0 before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-y-transparent before:border-[#fefefe] before:border-0 before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#54a8c7] !text-[#54a8c7] !mb-3">
              Case Studies
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-9">
              Check out some of our awesome projects with creative ideas and
              great design.
            </h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="swiper-container blog grid-view !mb-10 relative z-10">
          <Swiper
            className="swiper"
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd33",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {blogPosts.map((blog, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <article>
                  <figure className="overlay overlay-1 hover-scale rounded !mb-6 group">
                    <a href="#">
                      <Image
                        className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                        alt="image"
                        src={blog.imageUrl}
                        width={560}
                        height={350}
                      />
                    </a>
                    <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                      <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                        Read More
                      </h5>
                    </figcaption>
                  </figure>
                  <div className="post-header">
                    <h2 className="post-title h3 !mb-3 !text-[1.15rem] !leading-[1.4]">
                      <Link
                        className="!text-[#343f52] hover:!text-[#54a8c7]"
                        href={`/blog-post`}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                  </div>
                  {/* /.post-header */}
                  <div className="post-footer">
                    <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none">
                      <li className="post-date inline-block">
                        <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                        <span>{blog.date}</span>
                      </li>
                      <li className="post-comments inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:mx-[0.6rem] before:my-0 before:rounded-[100%] before:bg-[#aab0bc] before:align-[0.15rem] !text-[.75rem]">
                        <a
                          className="!text-[#aab0bc] hover:!text-[#54a8c7]"
                          href="#"
                        >
                          <i className="uil uil-file-alt !text-[.75rem] pr-[0.2rem] align-[-.05rem] before:content-['\eaec']" />
                          {blog.category}
                        </a>
                      </li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.post-footer */}
                </article>
                {/* /article */}
              </SwiperSlide>
            ))}

            {/* /.swiper-wrapper */}
          </Swiper>
          <div className="swiper-controls">
            <div className="swiper-pagination spd33"></div>
          </div>
          {/* /.swiper */}
        </div>
        {/* /.swiper-container */}
      </div>
      {/* /.container */}
    </section>
  );
}
