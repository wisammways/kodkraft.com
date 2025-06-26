"use client";

import { blogPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedBlogs() {
  return (
    <div className="swiper-container blog grid-view !mb-24 relative z-10">
      <Swiper
        className="swiper"
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spdb2",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {blogPosts.map((post, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <article>
              <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                <a href="#">
                  <Image
                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                    alt="image"
                    src={post.imageUrl}
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
              <div className="post-header !mb-[.9rem]">
                <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#605dba]">
                  <a href="#" className="hover" rel="category">
                    {post.category}
                  </a>
                </div>
                {/* /.post-category */}
                <h2 className="post-title h3 !mt-1 !mb-3">
                  <Link
                    className="!text-[#343f52] hover:!text-[#605dba]"
                    href={`/blog-post`}
                  >
                    {post.title}
                  </Link>
                </h2>
              </div>
              {/* /.post-header */}
              <div className="post-footer">
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none !mb-0">
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
                      4
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

        {/*/.swiper-wrapper */}
      </Swiper>
      <div className="swiper-controls">
        <div className="swiper-pagination spdb2"></div>
      </div>
      {/* /.swiper */}
    </div>
  );
}
