import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found - KodKraft Blog",
    };
  }

  return {
    metadataBase: new URL('https://kodkraft.com'),
    title: `${post.title} - KodKraft Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://kodkraft.com/blog/${params.slug}`,
      languages: {
        'en': `https://kodkraft.com/blog/${params.slug}`,
        'de': `https://kodkraft.com/de/blog/${params.slug}`,
        'x-default': `https://kodkraft.com/blog/${params.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.hero],
      type: 'article',
      publishedTime: post.date,
      authors: ['KodKraft Team'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.hero],
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

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
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="inline-flex !mb-[.4rem] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[rgba(255,255,255,.5)] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-white">
                  <span>{post.category}</span>
                </div>
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                  {post.title}
                </h1>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <Link className="!text-white hover:text-white" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item flex !text-[rgba(255,255,255,.5)] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons">
                      <Link className="!text-white hover:text-white" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      {post.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto">
                <div className="blog single !mt-[-7rem]">
                  <div className="card">
                    <figure className="card-img-top">
                      <Image
                        alt={post.title}
                        src={post.hero}
                        width={960}
                        height={600}
                        className="w-full h-auto"
                      />
                    </figure>
                    <div className="card-body flex-[1_1_auto] p-[40px] xl:!p-[2.5rem] lg:!p-[2.5rem] md:!p-[2.5rem]">
                      <div className="classic-view">
                        <article className="post">
                          <div className="post-content !mb-5">
                            <div className="!relative">
                              <div 
                                className="blog-content prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                              />
                            </div>
                          </div>
                          <div className="post-footer xl:!flex xl:!flex-row xl:!justify-between lg:!flex lg:!flex-row lg:!justify-between md:!flex md:!flex-row md:!justify-between !items-center !mt-8">
                            <div>
                              <ul className="pl-0 list-none tag-list !mb-0">
                                <li className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                                  <span className="!text-[0.7rem] font-bold uppercase !tracking-[0.02rem] !text-[#aab0bc]">
                                    Tags:
                                  </span>
                                </li>
                                {post.tags.map((tag, index) => (
                                  <li key={index} className="!mt-0 !mb-[0.45rem] !mr-[0.2rem] inline-block">
                                    <span className="btn btn-soft-ash btn-sm !rounded-[50rem] !text-[0.7rem] !mb-0 !mr-[0.2rem]">
                                      {tag}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="!mb-0 !mt-2 xl:!mt-0 lg:!mt-0 md:!mt-0">
                              <div className="dropdown share-dropdown btn-group">
                                <span className="!text-[0.7rem] font-bold uppercase !tracking-[0.02rem] !text-[#aab0bc] !mr-3">
                                  Published: {formatDate(post.date)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>

                <nav className="flex !justify-between !items-center !mt-12" aria-label="pagination">
                  <Link
                    href="/blog"
                    className="btn btn-soft-primary !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    <i className="uil uil-arrow-left before:content-['\e949'] !text-[0.7rem] !mr-1" />
                    Back to Blog
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