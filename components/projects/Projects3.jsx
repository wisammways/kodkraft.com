"use client";
import { projects8 } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
const filters = [
  { name: "All", filter: "*", active: true },
  { name: "Concept", filter: ".concept" },
  { name: "Product", filter: ".product" },
  { name: "Workshop", filter: ".workshop" },
  { name: "Still Life", filter: ".still-life" },
];
export default function Projects3() {
  const [activeFilter, setActiveFilter] = useState("*");

  const isotopRef = useRef(null);
  // Handle filter item click
  const updateCategory = (val) => {
    isotopRef.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  const handleFilterClick = (dataFilter) => {
    setActiveFilter(dataFilter);
    updateCategory(dataFilter);
    // You can add additional logic here, like filtering content based on the selected filter
  };
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotopRef.current = new Isotope(isotopContainer.current, {
      itemSelector: ".item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotopRef.current.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);
  return (
    <section className="wrapper !bg-[#ffffff]">
      <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div className="itemgrid grid-view projects-masonry">
          <div className="isotope-filter !relative !z-[5] filter !mb-10">
            <p className="inline m-[0_1rem_0_0] uppercase !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc]">
              Filter:
            </p>
            <ul className="inline m-0 p-0 list-none">
              {filters.map(({ name, filter }) => (
                <li
                  key={filter}
                  className={`inline ${
                    filter !== "*" &&
                    "before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:ml-2 before:mr-[0.8rem] before:my-0 before:rounded-[100%] before:bg-[rgba(30,34,40,.2)] before:align-[.15rem]"
                  }`}
                >
                  <a
                    className={`filter-item uppercase !tracking-[0.02rem] text-[0.7rem] font-bold cursor-pointer ${
                      activeFilter === filter
                        ? "active"
                        : "hover:!text-[#605dba]"
                    }`}
                    data-filter={filter}
                    onClick={() => handleFilterClick(filter)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            ref={isotopContainer}
            className="flex flex-wrap mx-[-15px] xl:mx-[-25px] lg:mx-[-25px] md:mx-[-25px] !mt-[-50px] xl:!mt-[-80px] lg:!mt-[-80px] md:!mt-[-80px] isotope"
          >
            {projects8.map((project, index) => (
              <div
                key={index}
                className={`project item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:!mt-[80px] xl:!px-[25px] lg:!mt-[80px] lg:!px-[25px] md:!mt-[80px] md:!px-[25px] !px-[15px] !mt-[50px] max-w-full ${project.className}`}
              >
                <figure className="lift rounded !mb-6">
                  <Link href={`/single-project`}>
                    <Image
                      alt="image"
                      src={project.imgSrc}
                      width={project.width}
                      height={project.height}
                    />
                  </Link>
                </figure>
                <div className="project-details flex justify-center flex-col">
                  <div className="post-header">
                    <div
                      className="inline-flex uppercase !tracking-[0.02rem] text-[0.7rem] font-bold relative align-top !pl-[1.4rem] opacity-100 before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 !mb-2"
                      style={{
                        color: project.color,
                        borderColor: project.color,
                      }}
                    >
                      {project.category}
                    </div>
                    <h3 className="post-title">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* /.row */}
        </div>
        {/* /.grid */}
      </div>
      {/* /.container */}
    </section>
  );
}
