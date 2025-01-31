import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Home.css"; // Import a separate CSS file for animations

function Home() {
  // Create references for the typing elements
  const welcomeEl = useRef(null);
  const aadiEl = useRef(null);

  useEffect(() => {
    // Initialize typed.js for the Welcome text
    const typedWelcome = new Typed(welcomeEl.current, {
      strings: ["Welcome to Whimsy Wave,"],
      typeSpeed: 50,
      showCursor: false,
    });

    // Initialize typed.js for the "A place where creativity meets innovation!" text with delay
    const typedAadi = new Typed(aadiEl.current, {
      strings: ["A place where creativity meets innovation!"],
      typeSpeed: 80,
      startDelay: 2000,
      showCursor: false,
    });

    // Cleanup the Typed instances when the component unmounts
    return () => {
      typedWelcome.destroy();
      typedAadi.destroy();
    };
  }, []);

  return (
    <div className="py-32 px-6 sm:py-56 sm:px-12 text-center animate-fadeIn font-sans">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto mb-16">
        <h1
          style={{ fontFamily: "Kelly Slab, cursive" }}
          className="text-2xl sm:text-4xl mb-6 tracking-wide text-gray-900 dark:text-gray-100 text-justify"
        >
          <span ref={welcomeEl}></span> {/* Typed.js will type here */}
        </h1>
        <h1
          style={{ fontFamily: "Kelly Slab, cursive" }}
          className="text-2xl sm:text-4xl px-2 sm:px-8 mb-6 tracking-wide text-gray-900 dark:text-gray-100  text-justify"
        >
          <span ref={aadiEl}></span>
        </h1>
      </div>

      {/* Paragraphs Section */}
      <div className="max-w-screen-lg mx-auto mt-8 px-4 sm:px-6 md:px-12">
        <p className="text-lg sm:text-2xl text-gray-900 dark:text-gray-100 leading-relaxed italic text-justify">
          Hey there! I'm Patel Aadi, the creative force behind Whimsy Wave. This
          blog is born out of a passion for the whimsical, the imaginative, and
          the inspiring. Whimsy Wave isn't just another blog, it's a haven for
          those who crave a touch of magic in their everyday life. Whether
          you're here to immerse yourself in personal reflections, get lost in
          creative musings, or find inspiration in unique ideas, you're in the
          right place. Join me as we ride the waves of thought, creativity, and
          discovery.
        </p>
        <p className="text-lg sm:text-2xl text-gray-900 dark:text-gray-100 mt-6 leading-relaxed italic text-justify">
          So, sit back, relax, and let your mind drift with the currents of
          Whimsy Wave. Together, we'll explore ideas that stir the soul and
          inspire the heart. Welcome aboard, and let the journey begin!
        </p>
      </div>

      {/* Blog Titles with Dates and Descriptions Section */}
      <div className="max-w-screen-lg mx-auto mt-16 px-4 sm:px-6 md:px-12">
        <h2
           style={{ fontFamily: "Kenia" }}
          className="text-4xl sm:text-6xl mb-6 tracking-wide text-gray-900 dark:text-gray-100 pb-10"
        >
          Newest Blogs
        </h2>

        {/* Blog 1 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/chess" className="hover:underline">
              The Art of Chess Strategy
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            October 27, 2024
          </span>
        </div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pb-5 text-justify">
          Discover the intricate strategies of chess that elevate your game.
          Master the opening, mid-game tactics, and endgame techniques.
        </p>

        {/* Blog 2 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/maths" className="hover:underline">
              Unraveling the Mysteries of Mathematics
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            October 25, 2024
          </span>
        </div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pb-5 text-justify">
          Dive deep into the wonders of mathematics, from basic principles to
          complex equations that shape the world.
        </p>

        {/* Blog 3 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/technology" className="hover:underline">
              Emerging Technologies: The Future of Innovation
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            October 22, 2024
          </span>
        </div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pb-5 text-justify">
          Explore cutting-edge technologies that are transforming industries and
          shaping the future, including AI, robotics, and more.
        </p>

        {/* Blog 4 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/productivity" className="hover:underline">
              Maximizing Productivity: Tips for Efficiency
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            October 20, 2024
          </span>
        </div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed pb-5 text-justify">
          Learn strategies to stay focused, manage time efficiently, and boost
          productivity to achieve your goals.
        </p>

        {/* Blog 5 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/travel" className="hover:underline">
              Travel Diaries: Exploring the World
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
            October 18, 2024
          </span>
        </div>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          Join us on a journey to explore new destinations and cultures, and get
          travel tips for your next adventure.
        </p>
      </div>
    </div>
  );
}

export default Home;
