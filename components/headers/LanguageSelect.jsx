"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelect({ color = "#605dba" }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLang, setActiveLang] = useState("En");

  // Define language mappings
  const languages = [
    { code: "En", label: "English" },
    { code: "De", label: "Deutsch" },
    {/* code: "Ar", label: "العربية" */}
  ];

  // Detect current language based on pathname
  useEffect(() => {
    if (pathname.startsWith('/de')) {
      setActiveLang("De");
    } else if (pathname.startsWith('/ar')) {
      setActiveLang("Ar");
    } else {
      setActiveLang("En");
    }
  }, [pathname]);

  // Handle language switch
  const handleLanguageSwitch = (langCode) => {
    let newPath;
    
    if (langCode === "De") {
      // Switch to German
      if (pathname === "/" || pathname === "") {
        newPath = "/de";
      } else if (pathname.startsWith('/de')) {
        newPath = pathname; // Already on German
      } else if (pathname.startsWith('/ar')) {
        newPath = pathname.replace('/ar', '/de');
      } else {
        newPath = `/de${pathname}`;
      }
    } else if (langCode === "Ar") {
      // Switch to Arabic
      if (pathname === "/" || pathname === "") {
        newPath = "/ar";
      } else if (pathname.startsWith('/ar')) {
        newPath = pathname; // Already on Arabic
      } else if (pathname.startsWith('/de')) {
        newPath = pathname.replace('/de', '/ar');
      } else {
        newPath = `/ar${pathname}`;
      }
    } else {
      // Switch to English
      if (pathname.startsWith('/de')) {
        newPath = pathname.replace('/de', '') || '/';
      } else if (pathname.startsWith('/ar')) {
        newPath = pathname.replace('/ar', '') || '/';
      } else {
        newPath = pathname; // Already on English
      }
    }
    
    if (newPath !== pathname) {
      router.push(newPath);
    }
    setActiveLang(langCode);
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
                handleLanguageSwitch(lang.code);
              }}
              className={`dropdown-item hover:!text-[${color}] hover:bg-[inherit] ${
                activeLang === lang.code ? `!text-[${color}]` : ""
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
