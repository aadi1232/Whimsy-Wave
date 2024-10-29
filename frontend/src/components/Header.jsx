import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For routing
import { IoSunny, IoMoon } from 'react-icons/io5'; // Light/Dark mode icons

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply the saved or system default theme when the app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or system preference
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);


  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
       
      <Link to="/" className="flex items-center space-x-4">
        {/* Dummy Logo */}
        <img 
           src={require('./pages/Assests/LOGO.avif')} // Dummy logo image
          alt="Whimsy Wave Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* Website Name */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Whimsy Wave
        </h1>
      </Link> 

      {/* Right side: About button and Dark/Light mode toggle */}
      <div className="flex space-x-4 items-center">
        {/* About Button */}
        <Link to="/blog">
          <button className="text-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            Blogs
          </button>
        </Link>

        <Link to="/about">
          <button className="text-xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            About Me
          </button>
        </Link>

        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
