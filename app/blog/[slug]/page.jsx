import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { trendingTechPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return trendingTechPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = trendingTechPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found - KodKraft Blog",
    };
  }

  return {
    title: `${post.title} - KodKraft Blog`,
    description: post.content.substring(0, 160) + "...",
  };
}

export default function BlogPost({ params }) {
  const post = trendingTechPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

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
              <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="post-header !mb-[.9rem]">
                  <div className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] !mb-[0.4rem] text-line relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#605dba]">
                    <a href="#" className="hover" rel="category">
                      {post.category}
                    </a>
                  </div>
                  <h1 className="!text-white !text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-4">
                    {post.title}
                  </h1>
                  <ul className="!text-[0.8rem] !text-white m-0 p-0 list-none !mb-5">
                    <li className="post-date inline-block">
                      <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']" />
                      <span>{post.date}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper !bg-[#ffffff]">
          <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="blog single !mt-[-7rem]">
                  <div className="card">
                    <figure className="card-img-top">
                      <Image
                        alt={post.title}
                        src={post.image}
                        width={960}
                        height={600}
                        className="w-full h-auto"
                      />
                    </figure>
                    <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.8rem_3rem_2.8rem] lg:!p-[2.8rem_3rem_2.8rem] md:!p-[2.8rem_3rem_2.8rem]">
                      <div className="classic-view">
                        <article className="post !mb-8">
                          <div className="relative !mb-5">
                            <div className="!mb-6">
                              <p className="lead !text-[1.05rem] !leading-[1.6]">
                                {post.content}
                              </p>
                            </div>

                            <div className="!mb-6">
                              <p>
                                This article explores the key concepts and practical applications that make this technology essential for modern web development. We'll dive deep into best practices, implementation strategies, and real-world use cases that demonstrate its value in today's development ecosystem.
                              </p>
                              
                              <p>
                                Whether you're a seasoned developer or just starting your journey in web development, understanding these concepts will help you build more efficient, scalable, and maintainable applications. Let's explore the fundamentals and advanced techniques that will elevate your development skills.
                              </p>
                            </div>

                            <h3 className="h2 !mb-4">Key Features and Benefits</h3>
                            <p>
                              The modern development landscape demands tools and frameworks that can handle complex requirements while maintaining developer productivity. This technology addresses these challenges by providing:
                            </p>
                            
                            <ul className="!mb-6 !pl-0 list-none">
                              <li className="relative !pl-6 before:content-['✓'] before:absolute before:left-0 before:text-[#605dba] before:font-bold !mb-2">
                                Enhanced developer experience with intuitive APIs
                              </li>
                              <li className="relative !pl-6 before:content-['✓'] before:absolute before:left-0 before:text-[#605dba] before:font-bold !mb-2">
                                Improved performance and optimization capabilities
                              </li>
                              <li className="relative !pl-6 before:content-['✓'] before:absolute before:left-0 before:text-[#605dba] before:font-bold !mb-2">
                                Scalable architecture for enterprise applications
                              </li>
                              <li className="relative !pl-6 before:content-['✓'] before:absolute before:left-0 before:text-[#605dba] before:font-bold !mb-2">
                                Strong community support and comprehensive documentation
                              </li>
                            </ul>

                            <h3 className="h2 !mb-4">Getting Started</h3>
                            <p>
                              To begin implementing these concepts in your projects, start by understanding the core principles and gradually incorporate advanced features. The learning curve is manageable, and the benefits become apparent quickly as you build more sophisticated applications.
                            </p>
                            
                            <p>
                              Remember that staying current with development trends and best practices is crucial for success in the rapidly evolving tech landscape. Continuous learning and experimentation will help you leverage these tools effectively in your projects.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>

                <nav className="flex !justify-between !items-center !mt-12" aria-label="pagination">
                  <Link
                    href="/blog"
                    className="btn btn-soft-ash !bg-[#fefefe] border-[#fefefe] text-[#343f52] hover:text-[#343f52] hover:bg-[#e9ecef] hover:border-[#e9ecef] focus:shadow-[rgba(92,140,229,1)] active:text-[#343f52] active:bg-[#e9ecef] active:border-[#e9ecef] disabled:text-[#343f52] disabled:bg-[#fefefe] disabled:border-[#fefefe] !rounded-[50rem] btn-icon btn-icon-start !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    <i className="uil uil-arrow-left before:content-['\e949']" /> Back to Blog
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer hasMarginTop={false} />
    </>
  );
}