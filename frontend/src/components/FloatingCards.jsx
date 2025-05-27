import React, { useState } from "react";
import { Link } from "react-router-dom";

const FloatingCards = ({ blogData }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of thoughtful articles and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.slice(0, 6).map((blog, index) => (
            <div
              key={blog.id}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/blog/${blog.id}`}>
                <article
                  className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 transform ${
                    hoveredCard === index
                      ? "scale-105 shadow-2xl"
                      : "hover:shadow-xl"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.heroImage}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {blog.intro.substring(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <span>{blog.publishDate}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingCards;
