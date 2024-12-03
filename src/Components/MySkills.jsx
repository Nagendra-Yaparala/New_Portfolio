'use client'; // Add this if using Next.js app directory structure

import React from 'react';
import Image from 'next/image';

const skills = [
  {
    id: 1,
    name: "HTML",
    image: "https://img.icons8.com/color/48/html-5--v1.png",
    description: "Markup language for creating web pages."
  },
  {
    id: 2,
    name: "CSS",
    image: "https://img.icons8.com/color/144/css3.png",
    description: "Style sheet language used for describing the presentation of a document written in HTML."
  },
  {
    id: 3,
    name: "JavaScript",
    image: "https://img.icons8.com/color/144/javascript--v1.png",
    description: "Programming language that allows you to implement complex features on web pages."
  },
  {
    id: 4,
    name: "React",
    image: "https://img.icons8.com/officel/80/react.png",
    description: "JavaScript library for building user interfaces."
  },
  {
    id: 5,
    name: "Next.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    description: "React framework for server-rendered and static web applications."
  },
  {
    id: 6,
    name: "Tailwind CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "Utility-first CSS framework for rapidly building custom user interfaces."
  },
  {
    id: 7,
    name: "Bootstrap",
    image: "https://img.icons8.com/color/144/bootstrap.png",
    description: "Popular CSS framework for developing responsive and mobile-first websites."
  }
];

const MySkills = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-gradient-to-tl from-gray-800 to-gray-600 rounded-lg shadow-lg p-4 hover:scale-105 transform transition-transform duration-300 flex flex-col items-center text-center"
          >
            {skill.image ? (
              <Image
                src={skill.image}
                alt={`${skill.name} icon`}
                width={60}
                height={60}
                className="mb-4"
              />
            ) : (
              <div className="text-gray-400 mb-4">No image</div>
            )}
            <h2 className="text-lg font-semibold">{skill.name}</h2>
            <p className="text-gray-400 text-sm mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
