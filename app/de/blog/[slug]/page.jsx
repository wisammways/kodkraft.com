import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const LANGUAGE = 'de';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts(LANGUAGE);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug, LANGUAGE);
  
  if (!post) {
    return {
      title: "Beitrag nicht gefunden - KodKraft Blog",
    };
  }

  return {
    metadataBase: new URL('https://kodkraft.com'),
    title: `${post.title} - KodKraft Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://kodkraft.com/de/blog/${params.slug}`,
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

export default function BlogPostDE({ params }) {
  const post = getPostBySlug(params.slug, LANGUAGE);

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
                      <Link className="!text-white hover:text-white" href="/de">
                        Startseite
                      </Link>
                    </li>
                    <li className="breadcrumb-item flex !text-[rgba(255,255,255,.5)] !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons">
                      <Link className="!text-white hover:text-white" href="/de/blog">
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
                <article className="!mb-[4.5rem] xl:!mb-24 lg:!mb-24 md:!mb-24">
                  {/* Hero Image */}
                  <figure className="!mb-10">
                    <Image
                      src={post.hero}
                      alt={post.title}
                      width={1200}
                      height={600}
                      className="rounded-lg"
                    />
                  </figure>

                  {/* Post Meta */}
                  <div className="post-meta !mb-6 flex flex-wrap items-center gap-4 text-[0.8rem]">
                    <span className="flex items-center">
                      <i className="uil uil-calendar-alt mr-2"></i>
                      {formatDate(post.date, LANGUAGE)}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center gap-2">
                        <i className="uil uil-tag-alt"></i>
                        {post.tags.map((tag, index) => (
                          <span key={index} className="badge bg-[#e5e5e5] text-[#60697b] !px-3 !py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                  />
                </article>

                {/* Back to Blog */}
                <div className="!mt-10">
                  <Link
                    href="/de/blog"
                    className="btn btn-sm btn-soft-primary rounded-pill"
                  >
                    ← Zurück zum Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer hasMarginTop={false} />
    </>
  );
}
