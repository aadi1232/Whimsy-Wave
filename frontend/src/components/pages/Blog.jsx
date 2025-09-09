import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import blogData from "../../data/blogData.json";

function Blog() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Header entrance animation
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.transform = "translateY(0)";
      }
    }, 100);

    // Staggered card animations
    cardsRef.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 200 + index * 100);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 opacity-0 transform translate-y-4 transition-all duration-1000"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="border-b-4 border-black dark:border-white pb-2">
              My Blogs
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of articles on various topics
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <article
              key={blog.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 transform translate-y-4 transition-all duration-500 group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800/50"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.heroImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category */}
                <span className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium">
                  {blog.category}
                </span>

                {/* Title */}
                <h2 className="text-2xl font-bold leading-tight group-hover:underline">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h2>

                {/* Intro */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {blog.intro.substring(0, 120)}...
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{blog.publishDate}</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center space-x-2 text-black dark:text-white font-medium hover:underline group/link"
                >
                  <span>Read Article</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
