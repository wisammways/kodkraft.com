# Multi-Language Blog Translation Setup

This document explains the multi-language infrastructure that has been set up for blog posts and how to add translations.

## Overview

The website now supports four languages for blog posts:
- **English (en)** - Default language, fully populated
- **German (de)** - Ready for translation, visible in language selector
- **Arabic (ar)** - Ready for translation, hidden from selector (routing supported)
- **French (fr)** - Ready for translation, hidden from selector (routing supported)

## Architecture

### Language-Specific Post Files

Blog posts are stored in separate JSON files for each language:

- `data/posts.json` - English posts (original)
- `data/posts-de.json` - German translations (currently contains English content)
- `data/posts-ar.json` - Arabic translations (currently contains English content)
- `data/posts-fr.json` - French translations (currently contains English content)

### Translation Files

UI strings and text are stored in translation files:

- `data/translations/en.js` - English UI strings
- `data/translations/de.js` - German UI strings (fully translated)
- `data/translations/ar.js` - Arabic UI strings (partially translated)
- `data/translations/fr.js` - French UI strings (currently English, ready for translation)

## How to Add German Blog Post Translations

### Step 1: Open the German Posts File

Edit `data/posts-de.json` and translate the following fields for each blog post:

```json
{
  "title": "Translate to German",
  "slug": "keep-same-as-english",
  "date": "keep-same-as-english",
  "category": "Translate to German",
  "tags": ["Translate", "Each", "Tag", "To", "German"],
  "hero": "keep-same-as-english",
  "excerpt": "Translate to German",
  "bodyHtml": "Translate all HTML content to German"
}
```

### Step 2: Fields to Translate

- **title** - Blog post title
- **category** - Post category name
- **tags** - Array of tag strings
- **excerpt** - Short description/preview text
- **bodyHtml** - Full HTML content of the blog post

### Step 3: Fields to Keep Unchanged

- **slug** - Must remain the same across all languages (used for URL routing)
- **date** - Must remain the same
- **hero** - Image path should remain the same

### Example Translation

English:
```json
{
  "title": "Vibe Coding: A New Way to Build Software",
  "slug": "vibe-coding-new-way-build-software",
  "category": "AI Development",
  "tags": ["AI", "Coding", "Development"],
  "excerpt": "Discover how vibe coding is revolutionizing software development..."
}
```

German:
```json
{
  "title": "Vibe Coding: Eine neue Art, Software zu entwickeln",
  "slug": "vibe-coding-new-way-build-software",
  "category": "KI-Entwicklung",
  "tags": ["KI", "Programmierung", "Entwicklung"],
  "excerpt": "Entdecken Sie, wie Vibe Coding die Softwareentwicklung revolutioniert..."
}
```

## How to Add French UI Translations

Edit `data/translations/fr.js` and translate all strings. The file structure mirrors the English version:

```javascript
export const translations = {
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Projets",
    contact: "Contact"
  },
  // ... translate all sections
}
```

## Enabling Arabic and French in Language Selector

When you're ready to make Arabic and French visible to users, edit `components/headers/LanguageSelect.jsx`:

**Current (hidden):**
```javascript
const languages = [
  { code: "En", label: "English" },
  { code: "De", label: "Deutsch" }
  // { code: "Ar", label: "العربية" }
  // { code: "Fr", label: "Français" }
];
```

**To enable:**
```javascript
const languages = [
  { code: "En", label: "English" },
  { code: "De", label: "Deutsch" },
  { code: "Ar", label: "العربية" },
  { code: "Fr", label: "Français" }
];
```

## RTL Support for Arabic

The infrastructure supports Arabic routing (`/ar/*`), but RTL classes need to be manually implemented in page elements. The `isRTL()` function in `utlis/translations.js` can be used to detect when Arabic is active.

Example usage:
```jsx
import { isRTL } from '@/utlis/translations';

function MyComponent() {
  const pathname = usePathname();
  const rtl = isRTL(pathname);
  
  return (
    <div className={rtl ? 'text-right' : 'text-left'}>
      Content
    </div>
  );
}
```

## URL Structure

The multi-language URLs follow this pattern:

- English: `/blog/[slug]`, `/blog/page/[page]`
- German: `/de/blog/[slug]`, `/de/blog/page/[page]`
- Arabic: `/ar/blog/[slug]`, `/ar/blog/page/[page]`
- French: `/fr/blog/[slug]`, `/fr/blog/page/[page]`

All routing is automatically handled by the infrastructure.

## Testing Your Translations

After adding translations:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Check for errors:**
   - The build will show warnings for missing translation keys
   - Fix any warnings before deploying

3. **Test navigation:**
   - Visit `/de/blog` for German
   - Visit `/ar/blog` for Arabic (if enabled)
   - Visit `/fr/blog` for French (if enabled)

4. **Verify dates:**
   - Check that dates display in the correct locale format

## Files Modified

The following files have been updated to support multi-language blog posts:

- `lib/posts.js` - Loads language-specific post files
- `utlis/translations.js` - Added French support
- `components/headers/LanguageSelect.jsx` - Added Arabic and French routing
- `data/posts-de.json` - German blog posts template
- `data/posts-ar.json` - Arabic blog posts template  
- `data/posts-fr.json` - French blog posts template
- `data/translations/fr.js` - French UI strings template

## Unused Data Files

The following data files were moved to `data/deleted/` as they are not currently used:

- blogs.js, experiences.js, faqs.js, gallery.js, innerpages.js
- jobs.js, products.js, progress.js, services.js, steps.js
- stories.js, team.js, testimonials.js

These files remain available if needed in the future.

## Translation Workflow Recommendation

1. **Start with German blog posts** - Translate `data/posts-de.json`
2. **Test German thoroughly** - Already visible in language selector
3. **Add French UI translations** - Edit `data/translations/fr.js`
4. **Add French blog posts** - Translate `data/posts-fr.json`
5. **Test French** - Enable in language selector when ready
6. **Add Arabic content** - Both UI and blog posts
7. **Implement RTL classes** - For proper Arabic display
8. **Enable Arabic** - Add to language selector when complete

## Support

For questions or issues with the translation infrastructure, refer to:
- `GERMAN_LOCALIZATION_FIXES.md` - Details on the German localization work
- `lib/posts.js` - Post loading and language detection logic
- `utlis/translations.js` - Translation utilities and helpers
