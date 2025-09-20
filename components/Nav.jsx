"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  blockItems,
  blogItems,
  demos,
  docsPages,
  otherPages,
  projectPages,
} from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import LanguageSelect from "./headers/LanguageSelect";
import { t, getBasePath } from "@/utlis/translations";

export default function Nav() {
  const pathname = usePathname();
  
  // Get base path for current language
  const basePath = getBasePath(pathname);
  
  const getActiveParent = (menuLinks) => {
    return menuLinks.find((parent) => {
      if (parent.links) {
        return parent.links.some((link) => link.href === pathname);
      }
      return parent.href === pathname;
    });
  };
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap").then((Bootstrap) => {
      const CLASS_NAME = "has-child-dropdown-show";

      // Save the original toggle function
      const originalToggle = Bootstrap.Dropdown.prototype.toggle;

      // Override the toggle function
      Bootstrap.Dropdown.prototype.toggle = function () {
        // Remove the CLASS_NAME from all dropdowns
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });

        // Traverse up through the closest dropdown parents
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
          dd.classList.add(CLASS_NAME);
        }

        // Call the original toggle function
        return originalToggle.call(this);
      };

      // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    });

    // Optional cleanup function for any potential side effects
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown dropdown-mega">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal]   ${demos.some((link) => link.href == pathname) ? "!text-[#54a8c7]" : ""
            } `}
          href={basePath === '' ? '/' : basePath}
        >
          {t(pathname, 'nav.home')}
        </Link>
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal]   ${demos.some((link) => link.href == pathname) ? "!text-[#54a8c7]" : ""
            } `}
          href={`${basePath}/about`}
        >
          {t(pathname, 'nav.about')}
        </Link>
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal]   ${demos.some((link) => link.href == pathname) ? "!text-[#54a8c7]" : ""
            } `}
          href={`${basePath}/services`}
        >
          {t(pathname, 'nav.services')}
        </Link>
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal]   ${demos.some((link) => link.href == pathname) ? "!text-[#54a8c7]" : ""
            } `}
          href={`${basePath}/projects`}
        >
          {t(pathname, 'nav.projects')}
        </Link>
      </li>
      <li className="nav-item dropdown dropdown-mega">
        <Link
          className={`nav-link !text-[.85rem] !tracking-[normal]   ${demos.some((link) => link.href == pathname) ? "!text-[#54a8c7]" : ""
            } `}
          href={`${basePath}/contact`}
        >
          {t(pathname, 'nav.contact')}
        </Link>
      </li>
      <li className="nav-item dropdown">
        <LanguageSelect />
      </li>
    </ul>
  );
}
