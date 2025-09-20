"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from 'next-intl';

export default function LanguageSelect({ color = "#605dba" }) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  
  const languages = [
    { code: "en", label: "En" },
    { code: "de", label: "De" },
  ];
  
  const [activeLang, setActiveLang] = useState(
    languages.find(lang => lang.code === locale)?.label || "En"
  );

  const handleLanguageChange = (langCode, langLabel) => {
    setActiveLang(langLabel);
    
    // Get the current pathname without the locale prefix
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    
    // Navigate to the new locale
    if (langCode === 'en') {
      // For English, we want to redirect to the [locale] route
      router.push(`/en${currentPath}`);
    } else {
      router.push(`/${langCode}${currentPath}`);
    }
  };

  return (
    <>
      {" "}
      <a
        className={`nav-link dropdown-item dropdown-toggle hover:!text-[${color}] after:!text-[${color}]`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {activeLang}
      </a>
      <ul className="dropdown-menu group-hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
        {languages.map((lang) => (
          <li className="nav-item" key={lang.code}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLanguageChange(lang.code, lang.label);
              }}
              className={`dropdown-item hover:!text-[${color}] hover:bg-[inherit] ${
                activeLang === lang.label ? `!text-[${color}]` : ""
              }`}
            >
              {lang.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
