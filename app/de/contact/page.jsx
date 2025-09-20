import Cta from "@/components/common/Cta";
import Contact1 from "@/components/contact/Contact1";
import Footer5 from "@/components/footers/Footer5";
import Header from "@/components/Header";
import React from "react";
import ContactPageContent from "./ContactPageContent";

export const metadata = {
  title:
    "Contact us - KodKraft - Leading Software Development Company in Lebanon",
  description:
    "Ready to elevate your digital presence? Contact KodKraft’s team today for custom web, mobile, and branding solutions. Let’s collaborate!",
};
export default function ContactPage() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        <ContactPageContent />
        <Contact1 />
        <Cta />
      </div>
      <Footer5 hasMarginTop={false} />
    </>
  );
}
