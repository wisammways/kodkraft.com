import Footer5 from "@/components/footers/Footer5";
import Header31 from "@/components/headers/Header31";

import Breadcumb2 from "@/components/shop/Breadcumb2";
import Features from "@/components/shop/Features";

import Shop2 from "@/components/shop/Shop2";
import React from "react";

export const metadata = {
  title:
    "Shop 02 || Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
  description:
    "Sandbox - Modern & Multipurpose React Next.js Template with Tailwind CSS",
};
export default function ShopPage2() {
  return (
    <>
      <div className="grow shrink-0 shop2">
        <Header31 />
        <Breadcumb2 />
        <Shop2 />
        <Features />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
