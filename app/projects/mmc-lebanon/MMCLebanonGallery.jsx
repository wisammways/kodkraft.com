"use client";

import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  { src: "/assets/images/projects/mmc-lebanon/1.jpg", alt: "MMC Lebanon Website" },
  { src: "/assets/images/projects/mmc-lebanon/2.jpg", alt: "MMC Lebanon Design" },
  { src: "/assets/images/projects/mmc-lebanon/3.jpg", alt: "MMC Lebanon Mobile" },
  { src: "/assets/images/projects/mmc-lebanon/4.jpg", alt: "MMC Lebanon Features" },
];

export default function MMCLebanonGallery() {
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
                  <a onClick={open} data-gallery="project-mmc">
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
