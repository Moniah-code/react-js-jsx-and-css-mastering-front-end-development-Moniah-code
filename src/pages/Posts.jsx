import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";
import Button from "../components/Button";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts(limit);
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [limit]);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading posts...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Posts</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-5 shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2 text-blue-600">
              {post.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {post.body}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="primary" onClick={() => setLimit((prev) => prev + 6)}>
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Posts;
