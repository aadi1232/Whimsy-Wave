import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaCalendarAlt } from 'react-icons/fa'; // Importing icons for time and date

function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 pt-32 pb-28">
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="font-serif font-bold text-3xl mb-6 text-center">Explore The Topics</h2>
        <div className="w-48 mx-auto border-t-4 border-gray-300 dark:border-gray-600 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog 1: Chess */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md animate-fadeIn transition duration-500 ease-in-out transform hover:-translate-y-1 hover:rotate-360">
            <h3 className="text-2xl font-bold mb-4">
              <Link to="/blog/chess" className="hover:underline">
                The Art of Chess Strategy
              </Link>
            </h3>
            <p className="text-lg mb-4 font-serif">
              Discover the intricate strategies of chess that elevate your game. Master the opening, mid-game tactics, and endgame techniques.
            </p>

            {/* Time and Date */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <FaClock /> <span>12:30 PM</span>
              <FaCalendarAlt /> <span>October 27, 2024</span>
            </div>

            {/* Read More */}
            <Link to="/blog/chess" className="text-gray-900 dark:text-white hover:underline font-bold font-serif">
              Read more →
            </Link>
          </div>

          {/* Blog 2: Maths */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md animate-fadeIn transition duration-500 ease-in-out transform hover:-translate-y-1 hover:rotate-360">
            <h3 className="text-2xl font-bold mb-4">
              <Link to="/blog/maths" className="hover:underline">
                Unraveling the Mysteries of Mathematics
              </Link>
            </h3>
            <p className="text-lg mb-4 font-serif">
              Dive deep into the wonders of mathematics, from basic principles to complex equations that shape the world.
            </p>

            {/* Time and Date */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <FaClock /> <span>10:00 AM</span>
              <FaCalendarAlt /> <span>October 25, 2024</span>
            </div>

            <Link to="/blog/maths" className="text-gray-900 dark:text-white hover:underline font-bold font-serif">
              Read more →
            </Link>
          </div>

          {/* Blog 3: Technology */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md animate-fadeIn transition duration-500 ease-in-out transform hover:-translate-y-1 hover:rotate-360">
            <h3 className="text-2xl font-bold mb-4">
              <Link to="/blog/technology" className="hover:underline">
                Emerging Technologies: The Future of Innovation
              </Link>
            </h3>
            <p className="text-lg mb-4 font-serif">
              Explore cutting-edge technologies that are transforming industries and shaping the future, including AI, robotics, and more.
            </p>

            {/* Time and Date */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <FaClock /> <span>8:15 AM</span>
              <FaCalendarAlt /> <span>October 22, 2024</span>
            </div>

            <Link to="/blog/technology" className="text-gray-900 dark:text-white hover:underline font-bold font-serif">
              Read more →
            </Link>
          </div>

          {/* Blog 4: Productivity */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md animate-fadeIn transition duration-500 ease-in-out transform hover:-translate-y-1 hover:rotate-360">
            <h3 className="text-2xl font-bold mb-4">
              <Link to="/blog/productivity" className="hover:underline">
                Maximizing Productivity: Tips for Efficiency
              </Link>
            </h3>
            <p className="text-lg mb-4 font-serif">
              Learn strategies to stay focused, manage time efficiently, and boost productivity to achieve your goals.
            </p>

            {/* Time and Date */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <FaClock /> <span>9:45 AM</span>
              <FaCalendarAlt /> <span>October 20, 2024</span>
            </div>

            <Link to="/blog/productivity" className="text-gray-900 dark:text-white hover:underline font-bold font-serif">
              Read more →
            </Link>
          </div>

          {/* Blog 5: Travel */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md animate-fadeIn transition duration-500 ease-in-out transform hover:-translate-y-1 hover:rotate-360">
            <h3 className="text-2xl font-bold mb-4">
              <Link to="/blog/travel" className="hover:underline">
                Travel Diaries: Exploring the World
              </Link>
            </h3>
            <p className="text-lg mb-4 font-serif">
              Join us on a journey to explore new destinations and cultures, and get travel tips for your next adventure.
            </p>

            {/* Time and Date */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <FaClock /> <span>11:00 AM</span>
              <FaCalendarAlt /> <span>October 18, 2024</span>
            </div>

            <Link to="/blog/travel" className="text-gray-900 dark:text-white hover:underline font-bold font-serif">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

