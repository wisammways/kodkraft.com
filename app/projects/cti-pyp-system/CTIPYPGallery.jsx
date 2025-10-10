"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  { src: "/assets/images/projects/cti-pyp/c1.png", alt: "CTI PYP Grading System" },
  { src: "/assets/images/projects/cti-pyp/c2.png", alt: "CTI PYP Dashboard" },
  { src: "/assets/images/projects/cti-pyp/c3.png", alt: "CTI PYP Analytics" },
  { src: "/assets/images/projects/cti-pyp/c4.png", alt: "CTI PYP Reports" },
];

export default function CTIPYPGallery() {
  return (
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
                  <a onClick={open} data-gallery="project-cti">
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
      </div>
    </Gallery>
  );
}
