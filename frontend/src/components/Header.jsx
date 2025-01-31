import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For routing
import { IoSunny, IoMoon, IoMenu } from 'react-icons/io5'; // Icons for light/dark mode and menu

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For handling the mobile menu
  const navigate = useNavigate(); // To navigate to the clicked route

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (path) => {
    setMenuOpen(false); // Close the menu after clicking
    navigate(path); // Navigate to the clicked page
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
      {/* Left Side: Logo and Website Name */}
      <Link to="/" className="flex items-center space-x-4">
        {/* Dummy Logo */}
        <img 
          src={require('./pages/Assests/LOGO.avif')} // Dummy logo image
          alt="Whimsy Wave Logo"
          className="w-10 h-10 sm:w-8 sm:h-8 rounded-full object-cover"
        />
        {/* Website Name */}
        <h1 
        style={{fontFamily:"'Joti One', cursive"}}
        className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Whimsy Wave
        </h1>
      </Link> 

      {/* Right side: Blog, About, Dark/Light mode toggle */}
      <div className="hidden sm:flex space-x-4 items-center">
        {/* For larger screens, show Blogs and About Me as normal buttons */}
        <Link to="/blog">
          <button
           style={{ fontFamily: "'Irish Grover', cursive" }}
           className="text-xl sm:text-lg text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            Blogs
          </button>
        </Link>

        <Link to="/about">
          <button 
          style={{ fontFamily: "'Irish Grover', cursive" }}
          className="text-xl sm:text-lg text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            About Me
          </button>
        </Link>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <IoSunny className="text-2xl sm:text-xl" /> : <IoMoon className="text-2xl sm:text-xl" />}
        </button>
      </div>

      {/* For small screens: Show menu button and dark mode toggle */}
      <div className="flex sm:hidden space-x-4 items-center">
        {/* Dark/Light Mode Toggle for mobile */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
        </button>

        {/* Menu button */}
        <button
          onClick={toggleMenu}
          className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        >
          <IoMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-4 sm:hidden transition-all">
          <button
            className="block text-lg text-gray-800 dark:text-gray-100 mb-3 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition"
            onClick={() => handleMenuClick('/blog')}
          >
            Blogs
          </button>
          <button
            className="block text-lg text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition"
            onClick={() => handleMenuClick('/about')}
          >
            About Me
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
