# Deleted Data Files

This folder contains data files that were not actively being used in the codebase as of October 2024.

## Files Moved Here

The following files have been moved to this folder:

- `blogs.js` - Blog data (replaced by `posts.json`)
- `experiences.js` - Experience/timeline data
- `faqs.js` - FAQ data
- `gallery.js` - Gallery/image data
- `innerpages.js` - Inner pages configuration
- `jobs.js` - Job/career listings
- `products.js` - Product catalog data
- `progress.js` - Progress/stats data
- `services.js` - Services data (static version)
- `steps.js` - Process steps data
- `stories.js` - Stories/case studies data
- `team.js` - Team member data
- `testimonials.js` - Testimonials data

## Why These Files Were Moved

These files were identified as unused based on:
1. No imports found in the active codebase (`app/`, `components/`, `lib/`)
2. No references in component files
3. Redundant with other data sources (e.g., `blogs.js` vs `posts.json`)

## If You Need These Files

If you need to use any of these files in the future:
1. Move the file back to the `data/` directory
2. Import it in your component: `import dataFile from '@/data/filename';`
3. Use the data as needed

## Archival

These files are kept for reference and potential future use. They can be:
- Restored if needed
- Used as templates for new data structures
- Referenced for historical data
- Permanently deleted if confirmed no longer needed

Last updated: October 2024
