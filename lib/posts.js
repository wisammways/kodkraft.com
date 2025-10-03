import postsDataEn from '@/data/posts.json';
import postsDataDe from '@/data/posts-de.json';
import postsDataAr from '@/data/posts-ar.json';
import postsDataFr from '@/data/posts-fr.json';

const PAGE_SIZE = 6;

// Map of language codes to post data
const postsMap = {
  'en': postsDataEn,
  'de': postsDataDe,
  'ar': postsDataAr,
  'fr': postsDataFr,
};

// Helper to get language from pathname
function getLanguageFromPath(pathname) {
  if (!pathname) return 'en';
  if (pathname.startsWith('/de/')) return 'de';
  if (pathname.startsWith('/ar/')) return 'ar';
  if (pathname.startsWith('/fr/')) return 'fr';
  return 'en';
}

// Get all posts sorted by date (newest first), with optional language support
export function getAllPosts(language = 'en') {
  const postsData = postsMap[language] || postsDataEn;
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get a single post by slug, with optional language support
export function getPostBySlug(slug, language = 'en') {
  const postsData = postsMap[language] || postsDataEn;
  return postsData.find(post => post.slug === slug);
}

// Get paginated posts
export function getPaginatedPosts({ page = 1, pageSize = PAGE_SIZE, language = 'en' }) {
  const allPosts = getAllPosts(language);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  
  const posts = allPosts.slice(startIndex, endIndex);
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);
  
  return {
    posts,
    totalPosts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}

// Format date for display
export function formatDate(dateString, language = 'en') {
  const date = new Date(dateString);
  const locale = language === 'de' ? 'de-DE' : 
                 language === 'ar' ? 'ar-EG' : 
                 language === 'fr' ? 'fr-FR' : 'en-US';
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format date for display (short format like "14 Apr 2024")
export function formatDateShort(dateString, language = 'en') {
  const date = new Date(dateString);
  const locale = language === 'de' ? 'de-DE' : 
                 language === 'ar' ? 'ar-EG' : 
                 language === 'fr' ? 'fr-FR' : 'en-US';
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Get recent posts (for sidebar, related posts, etc.)
export function getRecentPosts(limit = 5, excludeSlug = null) {
  const allPosts = getAllPosts();
  const filteredPosts = excludeSlug 
    ? allPosts.filter(post => post.slug !== excludeSlug)
    : allPosts;
  
  return filteredPosts.slice(0, limit);
}

// Get posts by category
export function getPostsByCategory(category, limit = null) {
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
  
  return limit ? categoryPosts.slice(0, limit) : categoryPosts;
}

// Search posts by title or content
export function searchPosts(query) {
  const allPosts = getAllPosts();
  const searchTerm = query.toLowerCase();
  
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}

// Get all unique categories
export function getAllCategories() {
  const allPosts = getAllPosts();
  const categories = [...new Set(allPosts.map(post => post.category))];
  return categories.sort();
}

// Get all unique tags
export function getAllTags() {
  const allPosts = getAllPosts();
  const tags = [...new Set(allPosts.flatMap(post => post.tags))];
  return tags.sort();
}