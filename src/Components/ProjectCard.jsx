'use client'; // For Next.js app directory

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images from assets folder
import ecomRaraa from "../assets/Rara.png";
import weatherForecast from "../assets/weather.png";
import vinMov from "../assets/vinmov.png";
import muttonMaamu from "../assets/mutton.png";
import studentPortal from "../assets/StudenPortal.png";

const projects = [
  {
    title: "Ecom-Raraa",
    description: "A fully functional e-commerce platform featuring an intuitive UI, real-time product filtering, dynamic shopping cart management, and a seamless checkout experience.",
    git_link: "https://github.com/Nagendra-Yaparala/Ecom_Raraa",
    live_link: "https://nagendra-yaparala.github.io/Ecom_Raraa/",
    image: ecomRaraa,
  },
  {
    title: "Student Portal",
    description: "An interactive edtech platform built during my internship at GoCosmic.ai. It offers personalized learning experiences, progress tracking, real-time course updates, and an admin dashboard for seamless student-teacher interactions.",
    git_link: "https://github.com/Nagendrayaparala/student-portal",
    live_link: "",
    image: studentPortal,
  },
  {
    title: "Weather Forecast",
    description: "A real-time weather forecast application that fetches data from external APIs. It provides temperature details, humidity levels, wind speed, and dynamic weather conditions based on user location or search queries.",
    git_link: "https://github.com/Nagendrayaparala/weather-forecast",
    live_link: "",
    image: weatherForecast,
  },
  {
    title: "VinMov",
    description: "A modern music streaming application that fetches and plays music from external APIs. It includes search functionality, playlists, and a responsive design for a seamless music experience across devices.",
    git_link: "https://github.com/Nagendra-Yaparala/Music_Player",
    live_link: "https://nagendra-yaparala.github.io/Music_Player/",
    image: vinMov,
  },
  {
    title: "Mutton Maamu",
    description: "An online meat delivery platform with an easy-to-use interface, secure payment integration, and real-time order tracking. The website ensures a great user experience for customers purchasing fresh mutton online.",
    git_link: "https://github.com/Nagendra-Yaparala/mutton_maamu_frontend",
    live_link: "https://mutton-maamu-frontend-9gng-h8skxoh91.vercel.app/",
    image: muttonMaamu,
  },
];

const ProjectCard = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6" id="portfolio">
      <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-14 tracking-widest">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 border border-gray-700 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-blue-400">{item.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed mt-2">{item.description}</p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={item.git_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-green-500 transition-all duration-300"
              >
                View Code
              </a>
              {item.live_link && (
                <a
                  href={item.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-2 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
