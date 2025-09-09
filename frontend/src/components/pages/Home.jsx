import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./Home.css";
import blogData from "../../data/blogData.json";
import HeroParticles from "../HeroParticles";
import MorphingShapes from "../MorphingShapes";
import GlitchText from "../GlitchText";
import FloatingCards from "../FloatingCards";
import NeonNavigation from "../NeonNavigation";
import Holographic3DCard from "../Holographic3DCard";

function Home() {
  const welcomeEl = useRef(null);
  const aadiEl = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);

  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [heroRef, aboutRef, blogRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Enhanced typing effect
  useEffect(() => {
    const typedWelcome = new Typed(welcomeEl.current, {
      strings: [
        "Welcome to Whimsy Wave",
        "Discover Amazing Stories",
        "Explore Creative Ideas",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      loop: false,
      onComplete: () => {
        if (welcomeEl.current) {
          welcomeEl.current.classList.add("typed-complete");
        }
      },
    });

    const typedAadi = new Typed(aadiEl.current, {
      strings: [
        "A place where creativity meets innovation",
        "Thoughtful articles and insights",
        "Stories that inspire and educate",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      startDelay: 3000,
      showCursor: true,
      cursorChar: "|",
      loop: false,
      onComplete: () => {
        if (aadiEl.current) {
          aadiEl.current.classList.add("typed-complete");
        }
      },
    });

    return () => {
      typedWelcome.destroy();
      typedAadi.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <HeroParticles />
        <MorphingShapes />
      </div>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        data-section="hero"
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >
        <Holographic3DCard className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-6">
              <h1
                style={{ fontFamily: "Kelly Slab, cursive" }}
                className="text-6xl md:text-8xl font-bold mb-6"
              >
                <GlitchText
                  text="Whimsy Wave"
                  className="bg-gradient-to-r from-gray-900 via-black to-gray-700 dark:from-gray-100 dark:via-white dark:to-gray-300 bg-clip-text text-transparent"
                />
              </h1>

              <div className="h-16 flex items-center justify-center">
                <span
                  ref={welcomeEl}
                  className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300"
                ></span>
              </div>

              <div className="h-12 flex items-center justify-center">
                <span
                  ref={aadiEl}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
                ></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
              <Link
                to="/about"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Learn About Me
              </Link>

              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                View Projects
              </Link>

              <Link
                to="/blog"
                className="px-8 py-4 border-2 border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-400 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-400 hover:text-white dark:hover:bg-gray-500 dark:hover:text-white"
              >
                Read Articles
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </Holographic3DCard>
      </section>

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        data-section="about"
        className={`relative py-20 transition-all duration-1000 ${
          isVisible.about
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Card */}
            <Holographic3DCard>
              <div className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700">
                <div className="text-center space-y-6">
                  <div className="text-6xl">✍️</div>

                  <h3 className="text-3xl font-bold text-black dark:text-white">
                    Content Creator
                  </h3>

                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-400 dark:to-gray-200 rounded-full w-3/4 mx-auto"></div>
                    <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 rounded-full w-1/2 mx-auto"></div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Crafting stories and sharing insights that matter
                  </p>
                </div>
              </div>
            </Holographic3DCard>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                  Welcome to My Digital Space
                </h2>

                <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>
                    Hi, I'm{" "}
                    <span className="font-bold text-black dark:text-white">
                      Patel Aadi
                    </span>
                    , a passionate writer and digital creator. This blog is my
                    canvas where I paint ideas, share experiences, and explore
                    the fascinating world around us.
                  </p>

                  <p>
                    From technology and productivity tips to travel stories and
                    creative insights, you'll find a diverse collection of
                    articles that aim to inform, inspire, and entertain.
                  </p>

                  <p>
                    Join me on this journey of discovery, learning, and growth.
                    Let's explore ideas together and create meaningful
                    conversations.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Articles Written", value: "50+" },
                  { label: "Topics Covered", value: "10+" },
                  { label: "Readers Reached", value: "1K+" },
                  { label: "Years Writing", value: "2+" },
                ].map((stat, index) => (
                  <Holographic3DCard key={index}>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-black dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </Holographic3DCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CARDS SECTION */}
      <section
        ref={blogRef}
        data-section="blog"
        className={`transition-all duration-1000 ${
          isVisible.blog
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <FloatingCards blogData={blogData} />
      </section>

      {/* FEATURED ARTICLE SECTION */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Featured Article
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>

          {blogData.length > 0 && (
            <Holographic3DCard>
              <Link to={`/blog/${blogData[0].id}`}>
                <article className="relative p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={blogData[0].heroImage}
                        alt={blogData[0].title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-6">
                      <span className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium">
                        Featured
                      </span>

                      <h3 className="text-3xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {blogData[0].title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {blogData[0].intro.substring(0, 200)}...
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                        <span>{blogData[0].readTime}</span>
                        <span>•</span>
                        <span>{blogData[0].category}</span>
                        <span>•</span>
                        <span>{blogData[0].publishDate}</span>
                      </div>

                      <div className="pt-4">
                        <span className="inline-flex items-center space-x-2 text-black dark:text-white font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          <span>Read Article</span>
                          <span className="transform group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </Holographic3DCard>
          )}
        </div>
      </section>

      {/* NAVIGATION */}
       

      {/* Custom Styles */}
      <style jsx>{`
        .typed-complete {
          background: linear-gradient(45deg, #000, #666);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dark .typed-complete {
          background: linear-gradient(45deg, #fff, #ccc);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default Home;
