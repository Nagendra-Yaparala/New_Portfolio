import React from 'react';

const projects = [
    {
        title: 'Ecom-Raraa',
        git_link: 'https://github.com/Nagendrayaparala',
    },
    {
        title: 'Portfolio Website',
        git_link: 'https://github.com/Nagendrayaparala/portfolio',
    },
    {
        title: 'Task Manager App',
        git_link: 'https://github.com/Nagendrayaparala/task-manager',
    },
    {
        title: 'Weather Forecast',
        git_link: 'https://github.com/Nagendrayaparala/weather-forecast',
    },
];

const ProjectCard = () => {
    return (
        <div className="bg-gray-900 p-10">
            <h1 className="text-white text-3xl font-bold mb-8 text-center">Projects</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-lg p-6 w-72 hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <a
                            href={item.git_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-200 underline hover:text-yellow-400"
                        >
                            View Code
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
