import React, { useState, useEffect, useRef } from "react";
import { FiFilter, FiSearch, FiCode, FiLayers, FiBriefcase } from "react-icons/fi";
import ProjectCard from "../ProjectCard";
import ExperienceCard from "../ExperienceCard";
import projectData from "../../data/projectData.json";
import experienceData from "../../data/experienceData.json";
import HeroParticles from "../HeroParticles";
import MorphingShapes from "../MorphingShapes";
import GlitchText from "../GlitchText";
import Holographic3DCard from "../Holographic3DCard";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [experiences] = useState(experienceData);
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("projects");
  
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  // Get unique categories and statuses
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const statuses = ["All", ...new Set(projects.map((project) => project.status))];

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

    const sections = [heroRef, projectsRef, experienceRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Filter projects based on search term, category, and status
  useEffect(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.category === selectedCategory);
    }

    if (selectedStatus !== "All") {
      filtered = filtered.filter((project) => project.status === selectedStatus);
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory, selectedStatus, projects]);

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
                  text="My Projects"
                  className="bg-gradient-to-r from-gray-900 via-black to-gray-700 dark:from-gray-100 dark:via-white dark:to-gray-300 bg-clip-text text-transparent"
                />
              </h1>

              <p className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                A showcase of my creative work and technical expertise
              </p>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                From web applications to mobile apps, explore the projects that demonstrate my passion for creating innovative solutions
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {projects.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                  {projects.filter((p) => p.status === "Completed").length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">
                  {experiences.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Work Experience</div>
              </div>
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

      {/* PROJECTS & EXPERIENCE SECTION */}
      <section
        ref={projectsRef}
        data-section="projects"
        className={`relative py-20 transition-all duration-1000 ${
          isVisible.projects
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <Holographic3DCard className="mb-12">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                {/* Tab Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === "projects"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FiCode className="text-lg" />
                    Projects ({projects.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("experience")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === "experience"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <FiBriefcase className="text-lg" />
                    Experience ({experiences.length})
                  </button>
                </div>

                {/* Search and Filters (only show for projects) */}
                {activeTab === "projects" && (
                  <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                    {/* Search */}
                    <div className="relative">
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Category Filter */}
                    <div className="relative">
                      <FiLayers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Status Filter */}
                    <div className="relative">
                      <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                      <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                      >
                        {statuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {activeTab === "projects" 
                  ? `Showing ${filteredProjects.length} of ${projects.length} projects`
                  : `Showing ${experiences.length} work experiences`
                }
              </div>
            </div>
          </Holographic3DCard>

          {/* Content Grid */}
          {activeTab === "projects" ? (
            /* Projects Grid */
            filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="opacity-0 animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <FiCode className="text-6xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            )
          ) : (
            /* Experience Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <ExperienceCard experience={experience} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
