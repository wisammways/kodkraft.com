"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  { src: "/assets/images/projects/jimmy-blink/j1.jpg", alt: "image" },
  { src: "/assets/images/projects/jimmy-blink/j2.jpg", alt: "image" },
  { src: "/assets/images/projects/jimmy-blink/j3.jpg", alt: "image" },
  { src: "/assets/images/projects/jimmy-blink/j4.jpg", alt: "image" },
];
export default function ProjectDetails() {
  return (
    <div className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <div className="flex flex-wrap mx-[-15px]">
          <div className="w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <article className="!mt-[-12.5rem]">
              <figure className="!rounded-[.4rem] !mb-8 xl:!mb-[3.5rem] lg:!mb-[3.5rem] md:!mb-[3.5rem]">
                <Image
                  className="!rounded-[.4rem]"
                  alt="image"
                  src="/assets/images/projects/jimmy-blink/main.jpg"
                  width={2400}
                  height={1640}
                />
              </figure>
              <div className="flex flex-wrap mx-[-15px]">
                <div className="xl:w-10/12 xl:!ml-[8.33333333%] rtl:xl:!ml-0 rtl:xl:!mr-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] rtl:lg:!ml-0 rtl:lg:!mr-[8.33333333%] w-full flex-[0_0_auto] !px-[15px] max-w-full">
                  <h2 className="!text-[calc(1.265rem_+_0.18vw)] font-bold xl:!text-[1.4rem] !leading-[1.35] !mb-4">
                    About the Project
                  </h2>
                  <div className="flex flex-wrap mx-0">
                    <div className="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">
                      <p>
                        "Sound Smart" is an illustrated book that helps school students learn fun local phrases and idioms in French and Spanish. Our task was to create a landing page that felt as engaging and accessible as the book itself.
                      </p>
                      <p>
                        We brought the book's interior to life by using its charming illustrations as the core design elements, ensuring immediate appeal for its young audience. Light, playful animations enhance the experience, making the page itself feel fun and interactive.
                      </p>
                      <p>
                        Built to be fully responsive, the site provides a seamless experience for students whether they're on a computer or a mobile phone. To support its international reach, we delivered the site in four languages: English, French, Spanish, and Chinese, perfectly mirroring the book's goal of connecting with local culture.
                      </p>
                    </div>
                    {/*/column */}
                    <div className="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto rtl:!ml-0 rtl:!mr-auto">
                      <ul className="pl-0 rtl:pl-0 list-none">
                        <li>
                          <h5 className="!mb-1">Date</h5>
                          <p>Feb 2025</p>
                        </li>
                        <li>
                          <h5 className="!mb-1">Client Name</h5>
                          <p>Jimmy Blink</p>
                        </li>
                      </ul>
                      <a href="https://jimmyblink.com/" target="_blank" className="more hover">
                        See Project
                      </a>
                    </div>
                    {/*/column */}
                  </div>
                  {/*/.row */}
                </div>
                {/* /column */}
              </div>
              {/*/.row */}
              <Gallery>
                <div className="flex flex-wrap mx-[-15px] md:mx-[-15px] !mt-[25px]">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]"
                    >
                      <Item
                        original={image.src}
                        thumbnail={image.src}
                        width={960}
                        height={640}
                      >
                        {({ ref, open }) => (
                          <figure className="overflow-hidden translate-y-0 group rounded cursor-dark">
                            <a onClick={open} data-gallery="project-1">
                              <Image
                                className="transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                                alt={image.alt}
                                src={image.src}
                                width={960}
                                ref={ref}
                                height={640}
                              />
                            </a>
                          </figure>
                        )}
                      </Item>
                    </div>
                  ))}
                </div>{" "}
              </Gallery>
            </article>
            {/* /.project */}
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
}
