import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"; // Assuming Footer component is in the 'components' directory
import Home from "./components/pages/Home"; // Example Home component
import About from "./components/pages/about"; // Example About component
import Header from "./components/Header"; // Assuming Header component is in the 'components' directory
import Blog from './components/pages/Blog';
import ChessBlog from './components/pages/ChessBlog';
import MathBlog from './components/pages/MathBlog';
import TechnologyBlog from './components/pages/TechnologyBlog';
import ProductivityBlog from './components/pages/ProductivityBlog';
import TravelBlog from './components/pages/TravelBlog';
export default function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for saved theme and apply it on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
        {/* Pass darkMode and toggleDarkMode to Header so it can toggle the theme */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Define the routes for the application */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/blog/chess" element={<ChessBlog/>} />
          <Route path="/blog/maths" element={<MathBlog />} />
          <Route path="/blog/technology" element={<TechnologyBlog />} />
          <Route path="/blog/productivity" element={<ProductivityBlog />} />
          <Route path="/blog/travel" element={<TravelBlog />} />
        </Routes>

        {/* Render Footer component on all routes */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
