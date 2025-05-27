import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../../data/blogData.json";

function BlogPost() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const headerRef = useRef(null);

  useEffect(() => {
    // Find the blog post
    const foundBlog = blogData.find((blog) => blog.id === blogId);
    if (foundBlog) {
      setBlog(foundBlog);
    }
    setLoading(false);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Header animation
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.style.opacity = "1";
        headerRef.current.style.transform = "translateY(0)";
      }
    }, 100);
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-black dark:border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-black dark:text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Article Not Found</h2>
          <p className="mb-6">
            Sorry, we couldn't find the article you're looking for.
          </p>
          <Link
            to="/blog"
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <header
          ref={headerRef}
          className="mb-12 opacity-0 transform translate-y-4 transition-all duration-1000"
        >
          {/* Meta Info */}
          <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              {blog.category}
            </span>
            <span>{blog.publishDate}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {blog.title}
          </h1>

          {/* Hero Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img
              src={blog.heroImage}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Intro */}
          <div className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 border-l-4 border-black dark:border-white pl-6 italic">
            {blog.intro}
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {blog.sections.map((section, index) => (
            <section key={index} className="mb-16">
              {/* Section Title */}
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-black dark:border-white pb-2">
                {section.title}
              </h2>

              {/* Section Content */}
              <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                {section.content}
              </p>

              {/* Section Image */}
              {section.image && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* List Items */}
              {section.list && (
                <div className="mb-8">
                  <ul className="space-y-6">
                    {section.list.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 hover:border-black dark:hover:border-white transition-colors"
                      >
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section Conclusion */}
              {section.conclusion && (
                <div className="bg-gray-50 dark:bg-gray-900 p-6 border-l-4 border-black dark:border-white rounded-r-lg">
                  <p className="text-lg leading-relaxed">
                    {section.conclusion}
                  </p>
                </div>
              )}

              {/* Final Thought */}
              {section.finalThought && (
                <blockquote className="text-xl italic text-center py-6 border-t border-b border-gray-300 dark:border-gray-600 my-8">
                  "{section.finalThought}"
                </blockquote>
              )}
            </section>
          ))}

          {/* Article Conclusion */}
          {blog.conclusion && (
            <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 border-l-4 border-black dark:border-white rounded-r-lg">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p className="text-lg leading-relaxed">{blog.conclusion}</p>
            </div>
          )}
        </div>

        {/* Back to Blog Button */}
        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-md shadow-lg hover:shadow-xl"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
