import React, { useState } from "react";
import { FiExternalLink, FiGithub, FiCode, FiCalendar } from "react-icons/fi";
import Holographic3DCard from "./Holographic3DCard";

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Planning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <Holographic3DCard className="group h-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-[650px] flex flex-col transition-all duration-300 hover:shadow-2xl">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
              <FiCode className="text-4xl text-gray-400" />
            </div>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col h-[402px]">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 line-clamp-2 h-14">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-shrink-0 text-sm line-clamp-3 h-16">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-4 flex-shrink-0 h-12">
            <div className="flex flex-wrap gap-1 overflow-hidden">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mb-4 flex-1 h-20">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
            <ul className="space-y-1 overflow-hidden">
              {project.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start line-clamp-1">
                  <span className="w-1 h-1 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span className="truncate">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievement Badge */}
          {project.achievement ? (
            <div className="mb-4 flex-shrink-0 h-12">
              <div className="px-3 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <p className="text-xs font-medium text-yellow-800 dark:text-yellow-200 line-clamp-2">
                  {project.achievement}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-4 flex-shrink-0 h-12"></div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto flex-shrink-0 h-10">
            <a
              href="https://github.com/aadi1232"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <FiGithub className="text-sm" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </Holographic3DCard>
  );
};

export default ProjectCard;
