"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelect({ color = "#605dba" }) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeLang, setActiveLang] = useState("En");

  // Define language mappings
  // Arabic and French are supported in routing but hidden from selector
  const languages = [
    { code: "En", label: "English" },
    { code: "De", label: "Deutsch" }
    // Arabic and French translations supported but not shown in selector yet
    // { code: "Ar", label: "العربية" }
    // { code: "Fr", label: "Français" }
  ];

  // Detect current language based on pathname
  useEffect(() => {
    if (pathname.startsWith('/de')) {
      setActiveLang("De");
    } else if (pathname.startsWith('/ar')) {
      setActiveLang("Ar");
    } else if (pathname.startsWith('/fr')) {
      setActiveLang("Fr");
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
      } else if (pathname.startsWith('/fr')) {
        newPath = pathname.replace('/fr', '/de');
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
      } else if (pathname.startsWith('/fr')) {
        newPath = pathname.replace('/fr', '/ar');
      } else {
        newPath = `/ar${pathname}`;
      }
    } else if (langCode === "Fr") {
      // Switch to French
      if (pathname === "/" || pathname === "") {
        newPath = "/fr";
      } else if (pathname.startsWith('/fr')) {
        newPath = pathname; // Already on French
      } else if (pathname.startsWith('/de')) {
        newPath = pathname.replace('/de', '/fr');
      } else if (pathname.startsWith('/ar')) {
        newPath = pathname.replace('/ar', '/fr');
      } else {
        newPath = `/fr${pathname}`;
      }
    } else {
      // Switch to English
      if (pathname.startsWith('/de')) {
        newPath = pathname.replace('/de', '') || '/';
      } else if (pathname.startsWith('/ar')) {
        newPath = pathname.replace('/ar', '') || '/';
      } else if (pathname.startsWith('/fr')) {
        newPath = pathname.replace('/fr', '') || '/';
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
