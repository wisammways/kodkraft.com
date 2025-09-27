import postsData from '@/data/posts.json';

const PAGE_SIZE = 6;

// Get all posts sorted by date (newest first)
export function getAllPosts() {
  return postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get a single post by slug
export function getPostBySlug(slug) {
  return postsData.find(post => post.slug === slug);
}

// Get paginated posts
export function getPaginatedPosts({ page = 1, pageSize = PAGE_SIZE }) {
  const allPosts = getAllPosts();
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
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Format date for display (short format like "14 Apr 2024")
export function formatDateShort(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
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