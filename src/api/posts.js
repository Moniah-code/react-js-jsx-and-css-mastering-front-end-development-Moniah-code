// src/api/posts.js
export async function fetchPosts(limit = 10) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    return await res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
