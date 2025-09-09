import React, { useState } from "react";
import { FiExternalLink, FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi";
import Holographic3DCard from "./Holographic3DCard";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Contract":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Internship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  // Get company-specific website URL
  const getCompanyUrl = () => {
    switch (experience.company.toLowerCase()) {
      case "qbtrix":
        return "https://interacly.com";
      case "web3ssh-tech team":
        return "https://web3ssh.dev";
      default:
        return experience.website;
    }
  };

  return (
    <Holographic3DCard className="group h-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden h-[650px] flex flex-col transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex-shrink-0 h-32">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FiBriefcase className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {experience.role}
                </h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {experience.company}
                </p>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
              {experience.type}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FiCalendar className="text-xs" />
              {experience.period}
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin className="text-xs" />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col h-[518px]">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-shrink-0 text-sm line-clamp-3 h-16">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="mb-4 flex-shrink-0 h-16">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-1 overflow-hidden h-10">
              {experience.technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {experience.technologies.length > 6 && (
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
                  +{experience.technologies.length - 6}
                </span>
              )}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-4 flex-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
            <ul className="space-y-2 overflow-auto max-h-64">
              {experience.achievements.slice(0, isExpanded ? experience.achievements.length : 4).map((achievement, index) => (
                <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="w-1 h-1 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                  <span className={isExpanded ? "" : "line-clamp-2"}>{achievement}</span>
                </li>
              ))}
            </ul>
            
            {experience.achievements.length > 4 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                {isExpanded ? "Show Less" : `Show ${experience.achievements.length - 4} More`}
              </button>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-auto flex-shrink-0 h-10">
            <a
              href={getCompanyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              <FiExternalLink className="text-sm" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Holographic3DCard>
  );
};

export default ExperienceCard;
