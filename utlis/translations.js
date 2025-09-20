"use client";
import { translations as enTranslations } from '@/data/translations/en';
import { translations as deTranslations } from '@/data/translations/de';

/**
 * Get translations for the current language based on URL path
 * @param {string} pathname - The current URL pathname
 * @returns {object} - The translations object for the current language
 */
export function getTranslations(pathname) {
  const isGerman = pathname?.startsWith('/de');
  return isGerman ? deTranslations : enTranslations;
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
      console.warn(`Translation key "${keyPath}" not found for language ${pathname?.startsWith('/de') ? 'de' : 'en'}`);
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
 * Get the base path for the current language
 * @param {string} pathname - The current URL pathname
 * @returns {string} - The base path ('/de' for German, '' for English)
 */
export function getBasePath(pathname) {
  return isGerman(pathname) ? '/de' : '';
}