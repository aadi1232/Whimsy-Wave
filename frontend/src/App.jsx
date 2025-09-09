import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/about";
import Header from "./components/Header";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import Projects from "./components/pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for saved theme and apply it on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
        {/* Pass darkMode and toggleDarkMode to Header so it can toggle the theme */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
