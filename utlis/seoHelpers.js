/**
 * SEO Helper utilities for generating canonical URLs and hreflang tags
 */

const SITE_URL = 'https://kodkraft.com';

/**
 * Generate canonical URL for a given path
 * @param {string} path - The page path (e.g., '/about', '/de/about')
 * @returns {string} - The full canonical URL
 */
export function getCanonicalUrl(path) {
  // Remove trailing slash except for root
  const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
  return `${SITE_URL}${cleanPath}`;
}

/**
 * Generate alternate language URLs for hreflang tags
 * @param {string} path - The current page path
 * @returns {Array} - Array of objects with locale and url for each language
 */
export function getAlternateUrls(path) {
  // Remove language prefix and trailing slash
  let basePath = path.replace(/^\/(de|ar)/, '').replace(/\/$/, '');
  if (!basePath) basePath = '/';
  
  const alternates = [];
  
  // Always include English (default)
  alternates.push({
    locale: 'en',
    url: `${SITE_URL}${basePath}`
  });
  
  // Check if German version should exist
  // Blog pages are available in German
  const hasGermanVersion = checkGermanPageExists(basePath);
  if (hasGermanVersion) {
    alternates.push({
      locale: 'de',
      url: `${SITE_URL}/de${basePath}`
    });
  }
  
  // Add x-default (points to English)
  alternates.push({
    locale: 'x-default',
    url: `${SITE_URL}${basePath}`
  });
  
  return alternates;
}

/**
 * Check if a German version of the page exists
 * @param {string} path - The base path without language prefix
 * @returns {boolean} - True if German version exists
 */
function checkGermanPageExists(path) {
  // List of pages that have German versions
  const germanPages = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/blog',
  ];
  
  // Check if it's a project detail page
  if (path.startsWith('/projects/')) {
    return true; // All projects have German versions
  }
  
  // Check if it's a blog page
  if (path.startsWith('/blog/')) {
    return true; // Blog pages have German versions
  }
  
  // Check static pages
  return germanPages.includes(path);
}

/**
 * Generate metadata with canonical and alternate URLs
 * @param {string} path - The current page path
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {Object} additionalMetadata - Any additional metadata to merge
 * @returns {Object} - Complete metadata object
 */
export function generateMetadata(path, title, description, additionalMetadata = {}) {
  const canonicalUrl = getCanonicalUrl(path);
  const alternates = getAlternateUrls(path);
  
  // Build alternates object for Next.js metadata
  const alternatesObj = {
    canonical: canonicalUrl,
    languages: {}
  };
  
  alternates.forEach(alt => {
    if (alt.locale === 'x-default') {
      alternatesObj.languages['x-default'] = alt.url;
    } else {
      alternatesObj.languages[alt.locale] = alt.url;
    }
  });
  
  return {
    title,
    description,
    alternates: alternatesObj,
    ...additionalMetadata
  };
}
