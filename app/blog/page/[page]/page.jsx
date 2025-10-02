import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BlogIndex from "../shared/BlogIndex";
import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

const PAGE_SIZE = 6;

export async function generateStaticParams() {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  
  const params = [];
  for (let i = 2; i <= totalPages; i++) {
    params.push({ page: i.toString() });
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const page = parseInt(params.page);
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  
  if (page < 2 || page > totalPages) {
    return {
      title: "Page Not Found - KodKraft Blog",
    };
  }
  
  return {
    metadataBase: new URL('https://kodkraft.com'),
    title: `Blog - Page ${page} - KodKraft`,
    description: `Page ${page} of KodKraft's web development blog featuring insights on Laravel, React.js, Next.js, and modern web technologies.`,
    alternates: {
      canonical: `https://kodkraft.com/blog/page/${page}`,
      languages: {
        'en': `https://kodkraft.com/blog/page/${page}`,
        'de': `https://kodkraft.com/de/blog/page/${page}`,
        'x-default': `https://kodkraft.com/blog/page/${page}`,
      },
    },
  };
}

export default function BlogPage({ params }) {
  const page = parseInt(params.page);
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  
  // Redirect page 1 to main blog route and 404 for invalid pages
  if (page < 2 || page > totalPages) {
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
                <h1 className="!text-[calc(1.365rem_+_1.38vw)] font-bold !leading-[1.2] xl:!text-[2.4rem] !mb-3 !text-white">
                  Our Blog
                </h1>
                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium !text-white">
                  Discover the latest trends and insights in web development technology
                </p>
                <nav className="inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb flex flex-wrap bg-[none] p-0 !rounded-none list-none !mb-[20px]">
                    <li className="breadcrumb-item flex !text-[#60697b]">
                      <a className="!text-white hover:text-white" href="/">
                        Home
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item flex !text-white !pl-2 before:font-normal before:!flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-['\e931'] before:text-[0.9rem] before:-mt-px before:!pr-2 before:font-Unicons active"
                      aria-current="page"
                    >
                      Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <BlogIndex page={page} />
          </div>
        </section>
      </div>
      <Footer hasMarginTop={false} />
    </>
  );
}