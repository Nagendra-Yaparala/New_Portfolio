'use client'; // For Next.js app directory

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ecom-Raraa",
    description:
      "An e-commerce platform with a sleek UI and dynamic product management features.",
    git_link: "https://github.com/Nagendrayaparala",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills, experiences, and projects.",
    git_link: "https://github.com/Nagendrayaparala/portfolio",
  },
  {
    title: "Task Manager App",
    description: "A task management tool with CRUD operations and user-friendly design.",
    git_link: "https://github.com/Nagendrayaparala/task-manager",
  },
  {
    title: "Weather Forecast",
    description: "A real-time weather forecast app using external APIs.",
    git_link: "https://github.com/Nagendrayaparala/weather-forecast",
  },
  {
    title: "VinMov",
    description: "A real-time music player app using external APIs.",
    git_link: "https://github.com/Nagendrayaparala/weather-forecast",
  },
  {
    title: "AspireGOV",
    description: "A real-time application for Government job aspirants using external APIs.",
    git_link: "https://github.com/Nagendrayaparala/weather-forecast",
  },
];

const ProjectCard = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-6">
      <h1 className="text-4xl font-extrabold text-yellow-300 text-center mb-12">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <a
              href={item.git_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-2 px-4 rounded-md font-medium hover:from-blue-500 hover:to-green-500 transition-all duration-300"
            >
              View Code
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
