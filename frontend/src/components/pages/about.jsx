import React, { useState, useEffect, useRef } from "react";

function About() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Tech Enthusiast",
    "Problem Solver",
    "Innovator",
    "Creative Developer",
  ];
  const observerRefs = useRef([]);

  // Typing animation effect
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    setTypedText("");

    const typeTimer = setInterval(() => {
      if (index < currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, [currentRole]);

  // Intersection Observer for scroll animations
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

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: "💻",
      name: "Competitive Programming",
      description:
        "Solving complex algorithmic challenges and participating in coding contests",
      level: 85,
    },
    {
      icon: "🌐",
      name: "Web Development",
      description:
        "Building responsive and interactive web applications using modern frameworks",
      level: 90,
    },
    {
      icon: "🤖",
      name: "Machine Learning",
      description:
        "Developing intelligent systems and working with data science projects",
      level: 75,
    },
    {
      icon: "🎨",
      name: "Video Editing",
      description:
        "Creating engaging visual content and storytelling through video",
      level: 80,
    },
  ];

  const hobbies = [
    {
      icon: "♟️",
      name: "Chess",
      description: "Strategic thinking and pattern recognition",
    },
    {
      icon: "🎵",
      name: "Music",
      description: "Expressing creativity through melodies",
    },
    {
      icon: "🏏",
      name: "Cricket",
      description: "Team spirit and competitive sportsmanship",
    },
    {
      icon: "🎬",
      name: "Content Creation",
      description: "Blending storytelling with technical skills",
    },
  ];

  const achievements = [
    { number: "2+", label: "Years of Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Technologies Mastered" },
    { number: "100%", label: "Passion Level" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 md:px-0 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-black dark:bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-black dark:bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-black dark:bg-white rounded-full animate-ping delay-700"></div>
        </div>

        <div className="text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wide mb-6 animate-fade-in">
            About{" "}
            <span className="border-b-4 border-black dark:border-white">
              Me
            </span>
          </h1>
          <div className="h-8 md:h-12 flex items-center justify-center">
            <span className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6">
        {/* Personal Introduction */}
        <div
          ref={(el) => (observerRefs.current[0] = el)}
          data-section="intro"
          className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible.intro
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={require("./Assests/AboutusImage.avif")}
                    alt="Aadi Patel"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black dark:bg-white rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide">
                  Aadi Patel
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                  B.Tech CSE Student at IIIT Sri City
                </p>
              </div>

              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-justify">
                  I'm a passionate second-year Computer Science student with an
                  insatiable curiosity for technology. My journey spans from
                  competitive programming to cutting-edge machine learning
                  projects, always pushing the boundaries of what's possible.
                </p>
                <p className="text-justify">
                  I believe in the power of continuous learning and creative
                  problem-solving. Every challenge is an opportunity to grow,
                  innovate, and make a meaningful impact in the tech world.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
                  >
                    <div className="text-2xl font-bold text-black dark:text-white">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={(el) => (observerRefs.current[1] = el)}
          data-section="skills"
          className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
            isVisible.skills
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Core Skills</h3>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-6 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSkill === index
                    ? "bg-black dark:bg-white text-white dark:text-black transform scale-105"
                    : "hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                    <p
                      className={`text-sm mb-4 ${
                        activeSkill === index
                          ? "text-gray-200 dark:text-gray-800"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div
                        className={`h-2 rounded-full ${
                          activeSkill === index
                            ? "bg-gray-600 dark:bg-gray-300"
                            : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      >
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            activeSkill === index
                              ? "bg-white dark:bg-black"
                              : "bg-black dark:bg-white"
                          }`}
                          style={{
                            width:
                              activeSkill === index ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                      <span
                        className={`text-xs absolute right-0 -top-6 ${
                          activeSkill === index
                            ? "text-gray-200 dark:text-gray-800"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {activeSkill === index ? `${skill.level}%` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div
          ref={(el) => (observerRefs.current[2] = el)}
          data-section="hobbies"
          className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-400 ${
            isVisible.hobbies
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Beyond Code</h3>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              When I'm not coding, I explore various creative outlets that fuel
              my passion and keep me balanced.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="group p-6 text-center border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {hobby.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{hobby.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-800">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div
          ref={(el) => (observerRefs.current[3] = el)}
          data-section="contact"
          className={`max-w-4xl mx-auto text-center pb-20 transition-all duration-1000 delay-600 ${
            isVisible.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Connect!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on
              projects, or simply chat about technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                Get In Touch
              </button>
              <button className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default About;
