import React from "react";
import Link from "next/link";

export default function Pagination({ currentPage = 1, totalPages = 1, basePath = "/blog" }) {
  // Generate page numbers to show (show up to 5 pages around current page)
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  // Generate href for page
  const getPageHref = (page) => {
    if (page === 1) {
      return basePath;
    }
    return `${basePath}/page/${page}`;
  };

  return (
    <ul className="pagination">
      {/* Previous page link */}
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        {currentPage === 1 ? (
          <span className="page-link" aria-label="Previous">
            <span aria-hidden="true">
              <i className="uil uil-arrow-left before:content-['\e949']" />
            </span>
          </span>
        ) : (
          <Link
            href={getPageHref(prevPage)}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">
              <i className="uil uil-arrow-left before:content-['\e949']" />
            </span>
          </Link>
        )}
      </li>

      {/* Page number links */}
      {pageNumbers.map((page) => (
        <li
          key={page}
          className={`page-item ${currentPage === page ? "active" : ""}`}
        >
          {currentPage === page ? (
            <span className="page-link">{page}</span>
          ) : (
            <Link href={getPageHref(page)} className="page-link">
              {page}
            </Link>
          )}
        </li>
      ))}

      {/* Next page link */}
      <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
        {currentPage === totalPages ? (
          <span className="page-link" aria-label="Next">
            <span aria-hidden="true">
              <i className="uil uil-arrow-right before:content-['\e94c']" />
            </span>
          </span>
        ) : (
          <Link
            href={getPageHref(nextPage)}
            className="page-link"
            aria-label="Next"
          >
            <span aria-hidden="true">
              <i className="uil uil-arrow-right before:content-['\e94c']" />
            </span>
          </Link>
        )}
      </li>
    </ul>
  );
}
