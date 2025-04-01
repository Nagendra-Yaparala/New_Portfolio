import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-5 md:px-20" id="about">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold text-yellow-300 border-b-4 border-yellow-500 inline-block pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          About Me
        </motion.h1>

        {/* Personal Introduction */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="block w-10 h-1 bg-yellow-400 mb-4"></span>
          Hello! I&apos;m <span className="font-semibold text-yellow-400">Nagendra Yaparala</span>, a passionate  
          <span className="font-semibold text-blue-400"> Frontend Developer</span> specializing in  
          <span className="font-semibold text-green-400"> React.js, Next.js, and modern UI frameworks</span>.
          <br /><br />
          I love crafting beautiful and responsive web applications using  
          <span className="font-semibold text-purple-400"> Tailwind CSS</span>,  
          <span className="font-semibold text-purple-400"> Ant Design</span>, and  
          <span className="font-semibold text-purple-400"> Bootstrap</span>.  
          My goal is to create smooth, high-performance web experiences with clean and maintainable code.
          <br /><br />
          Beyond coding, I enjoy  
          <span className="font-semibold text-yellow-400"> photography</span> and  
          <span className="font-semibold text-yellow-400"> exploring nature</span>.  
          I’m always eager to learn new technologies and push the boundaries of web development.
        </motion.p>

        {/* Education Section */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-yellow-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Education</h2>
          <p className="text-lg">
            🎓 <span className="font-semibold text-blue-400">Bachelor's in Computer Science & Engineering</span>  
            <br />
            <span className="text-gray-300">IIIT RK Valley, Idupulapaya</span>
            <br />
            <span className="text-gray-400">Aggregate: 88%</span>
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://linkedin.com/in/nagendra-yaparala-18111919b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
