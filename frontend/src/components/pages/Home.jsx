import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Home.css'; // Import a separate CSS file for animations

function Home() {
  // Create references for the typing elements
  const welcomeEl = useRef(null);
  const aadiEl = useRef(null);

  useEffect(() => {
    // Initialize typed.js for the Welcome text
    const typedWelcome = new Typed(welcomeEl.current, {
      strings: ['Welcome to Whimsy Wave,'],
      typeSpeed: 50,
      showCursor: false,
    });

    // Initialize typed.js for the "A place where creativity meets innovation!" text with delay
    const typedAadi = new Typed(aadiEl.current, {
      strings: ["A place where creativity meets innovation!"],
      typeSpeed: 50,
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
    <div className="py-56 px-12 text-center animate-fadeIn">
      {/* Title Section */}
      <div className="max-w-screen-lg mx-auto mb-16">
        <h1 className="text-6xl font-serif mb-6 tracking-wide text-gray-900 dark:text-gray-100">
          <span ref={welcomeEl}></span> {/* Typed.js will type here */}
        </h1>
        <h1 className="text-5xl px-8 font-serif mb-6 tracking-wide text-gray-900 dark:text-gray-100 text-right">
          <span ref={aadiEl}></span>
        </h1>
      </div>

      {/* Paragraphs Section */}
      <div className="max-w-screen-lg mx-auto mt-8 px-6 md:px-12">
        <p className="text-2xl text-gray-900 dark:text-gray-100 leading-relaxed italic font-serif">
          Hey there! I'm Patel Aadi, the creative force behind Whimsy Wave. This blog is born out of a passion for the whimsical, 
          the imaginative, and the inspiring. Whimsy Wave isn't just another blog, it's a haven for those who crave a touch of magic 
          in their everyday life. Whether you're here to immerse yourself in personal reflections, get lost in creative musings, or 
          find inspiration in unique ideas, you're in the right place. Join me as we ride the waves of thought, creativity, and discovery.
        </p>
        <p className="text-2xl text-gray-900 dark:text-gray-100 mt-6 leading-relaxed italic font-serif">
          So, sit back, relax, and let your mind drift with the currents of Whimsy Wave. Together, we'll explore ideas that stir 
          the soul and inspire the heart. Welcome aboard, and let the journey begin!
        </p>
      </div>

      {/* Blog Titles with Dates and Descriptions Section */}
      <div className="max-w-screen-lg mx-auto mt-16 px-6 md:px-12">
        {/* Blog 1 */}
        <div className="flex justify-between items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/chess" className="hover:underline">
              The Art of Chess Strategy
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm">October 27, 2024</span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Discover the intricate strategies of chess that elevate your game. Master the opening, mid-game tactics, and endgame techniques.
        </p>

        {/* Blog 2 */}
        <div className="flex justify-between items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/maths" className="hover:underline">
              Unraveling the Mysteries of Mathematics
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm">October 25, 2024</span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Dive deep into the wonders of mathematics, from basic principles to complex equations that shape the world.
        </p>

        {/* Blog 3 */}
        <div className="flex justify-between items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/technology" className="hover:underline">
              Emerging Technologies: The Future of Innovation
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm">October 22, 2024</span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Explore cutting-edge technologies that are transforming industries and shaping the future, including AI, robotics, and more.
        </p>

        {/* Blog 4 */}
        <div className="flex justify-between items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/productivity" className="hover:underline">
              Maximizing Productivity: Tips for Efficiency
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm">October 20, 2024</span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Learn strategies to stay focused, manage time efficiently, and boost productivity to achieve your goals.
        </p>

        {/* Blog 5 */}
        <div className="flex justify-between items-center border-t-2 border-gray-300 dark:border-gray-600 py-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            <Link to="/blog/travel" className="hover:underline">
              Travel Diaries: Exploring the World
            </Link>
          </h3>
          <span className="text-gray-600 dark:text-gray-400 text-sm">October 18, 2024</span>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Join us on a journey to explore new destinations and cultures, and get travel tips for your next adventure.
        </p>
      </div>
    </div>
  );
}

export default Home;
