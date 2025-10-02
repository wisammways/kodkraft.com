"use client";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/common/Pagination";
import { getPaginatedPosts, formatDateShort } from "@/lib/posts";
import { usePathname } from "next/navigation";
import { t, getBasePath } from "@/utlis/translations";

export default function BlogIndex({ page = 1, basePath = "/blog" }) {
  const pathname = usePathname();
  const language = pathname.startsWith('/de') ? 'de' : pathname.startsWith('/ar') ? 'ar' : 'en';
  const { posts, totalPages, currentPage } = getPaginatedPosts({ page, language });

  return (
    <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
      <div className="blog classic-view !mt-[-7rem]">
        {posts.map((post) => (
          <article key={post.slug} className="post !mb-8">
            <div className="card">
              <figure className="card-img-top overlay overlay-1 hover-scale group">
                <Link
                  className="!text-[#343f52] hover:!text-[#605dba]"
                  href={`${basePath}/${post.slug}`}
                >
                  <Image
                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                    alt={post.title}
                    src={post.hero}
                    width={960}
                    height={600}
                  />
                </Link>
                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                  <h5 className="from-top !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                    {t(pathname, 'blog.readMore')}
                  </h5>
                </figcaption>
              </figure>

              <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2rem_2.5rem_1.25rem] lg:!p-[2rem_2.5rem_1.25rem] md:!p-[2rem_2.5rem_1.25rem] max-md:pb-4">
                <div className="post-header !mb-[.9rem]">
                  <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#605dba]">
                    <span className="hover" rel="category">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="post-title !mt-1 !leading-[1.35] !mb-0">
                    <Link
                      className="!text-[#343f52] hover:!text-[#605dba]"
                      href={`${basePath}/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>
                <div className="!relative">
                  <p>{post.excerpt}</p>
                </div>
              </div>

              <div className="card-footer xl:!p-[1.25rem_2.5rem_1.25rem] lg:!p-[1.25rem_2.5rem_1.25rem] md:!p-[1.25rem_2.5rem_1.25rem] p-[18px_40px]">
                <ul className="!text-[0.7rem] !text-[#aab0bc] m-0 p-0 list-none flex !mb-0">
                  <li className="post-date inline-block">
                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                    <span>{formatDateShort(post.date, language)}</span>
                  </li>
                  <li className="post-author inline-block !ml-4">
                    <i className="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\eb3f']" />
                    <span>KodKraft Team</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex" aria-label="pagination">
          <ul className="pagination">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={basePath}
            />
          </ul>
        </nav>
      )}
    </div>
  );
}