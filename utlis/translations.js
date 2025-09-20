"use client";
import { translations as enTranslations } from '@/data/translations/en';
import { translations as deTranslations } from '@/data/translations/de';
import { translations as arTranslations } from '@/data/translations/ar';

/**
 * Get translations for the current language based on URL path
 * @param {string} pathname - The current URL pathname
 * @returns {object} - The translations object for the current language
 */
export function getTranslations(pathname) {
  if (pathname?.startsWith('/de')) {
    return deTranslations;
  } else if (pathname?.startsWith('/ar')) {
    return arTranslations;
  }
  return enTranslations;
}

/**
 * Get a specific translation by key path
 * @param {string} pathname - The current URL pathname
 * @param {string} keyPath - Dot notation path to the translation key (e.g., 'nav.home')
 * @returns {string} - The translated text
 */
export function t(pathname, keyPath) {
  const translations = getTranslations(pathname);
  
  // Navigate through the object using the key path
  const keys = keyPath.split('.');
  let value = translations;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      const currentLang = pathname?.startsWith('/de') ? 'de' : pathname?.startsWith('/ar') ? 'ar' : 'en';
      console.warn(`Translation key "${keyPath}" not found for language ${currentLang}`);
      return keyPath; // Return the key path as fallback
    }
  }
  
  return typeof value === 'string' ? value : keyPath;
}

/**
 * Check if current path is German
 * @param {string} pathname - The current URL pathname
 * @returns {boolean} - True if German, false if English
 */
export function isGerman(pathname) {
  return pathname?.startsWith('/de');
}

/**
 * Check if current path is Arabic
 * @param {string} pathname - The current URL pathname
 * @returns {boolean} - True if Arabic, false otherwise
 */
export function isArabic(pathname) {
  return pathname?.startsWith('/ar');
}

/**
 * Check if current language is RTL
 * @param {string} pathname - The current URL pathname
 * @returns {boolean} - True if RTL language (Arabic), false otherwise
 */
export function isRTL(pathname) {
  return isArabic(pathname);
}

/**
 * Get current language code
 * @param {string} pathname - The current URL pathname
 * @returns {string} - Language code ('en', 'de', 'ar')
 */
export function getCurrentLanguage(pathname) {
  if (pathname?.startsWith('/de')) return 'de';
  if (pathname?.startsWith('/ar')) return 'ar';
  return 'en';
}

/**
 * Get the base path for the current language
 * @param {string} pathname - The current URL pathname
 * @returns {string} - The base path ('/de' for German, '/ar' for Arabic, '' for English)
 */
export function getBasePath(pathname) {
  if (pathname?.startsWith('/de')) return '/de';
  if (pathname?.startsWith('/ar')) return '/ar';
  return '';
}