import Cta from "@/components/common/Cta";
import Contact1 from "@/components/contact/Contact1";
import Footer5 from "@/components/footers/Footer5";
import Header from "@/components/Header";
import React from "react";
import ContactPageContent from "./ContactPageContent";

export const metadata = {
  metadataBase: new URL('https://kodkraft.com'),
  title:
    "Kontakt - KodKraft - Führendes Softwareentwicklungsunternehmen im Libanon",
  description:
    "Bereit, Ihre digitale Präsenz zu steigern? Kontaktieren Sie das KodKraft-Team noch heute für maßgeschneiderte Web-, Mobile- und Branding-Lösungen.",
  alternates: {
    canonical: 'https://kodkraft.com/de/contact',
    languages: {
      'en': 'https://kodkraft.com/contact',
      'de': 'https://kodkraft.com/de/contact',
      'x-default': 'https://kodkraft.com/contact',
    },
  },
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
