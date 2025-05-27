import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NeonNavigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About", path: "/about", icon: "👨‍💻" },
    { name: "Blog", path: "/blog", icon: "📝" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex items-center space-x-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full p-2 border border-gray-200 dark:border-gray-700 shadow-lg">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative group"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`relative px-4 py-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : hoveredItem === index
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <span className="text-xl">{item.icon}</span>

                {/* Tooltip */}
                <div
                  className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded transition-all duration-200 ${
                    hoveredItem === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  {item.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black dark:border-t-white"></div>
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NeonNavigation;
