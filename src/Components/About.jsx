import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-yellow-300 border-b-4 border-yellow-500 inline-block pb-2">
          About Me
        </h1>

        {/* Content */}
        <p className="text-lg md:text-xl leading-relaxed">
          <span className="block w-10 h-1 bg-yellow-400 mb-4"></span>
          Hello! I&apos;m <span className="font-semibold text-yellow-400">Nagendra Yaparala</span>, a dedicated 
          <span className="font-semibold text-blue-400"> Frontend Developer</span> specializing in technologies like 
          <span className="font-semibold text-green-400"> HTML, CSS, JavaScript</span>, and frameworks such as 
          <span className="font-semibold text-blue-400"> React.js</span> and 
          <span className="font-semibold text-blue-400"> Next.js</span>. 
          <br /><br />
          With a keen eye for design and a passion for coding, I bring creative concepts to life using tools like 
          <span className="font-semibold text-purple-400"> Tailwind CSS</span> and 
          <span className="font-semibold text-purple-400"> Bootstrap</span>. My focus is on crafting user-centric, responsive websites that deliver seamless and engaging experiences.
          <br /><br />
          I’m always exploring new technologies and pushing the boundaries of what’s possible on the web. When I’m not coding, I enjoy 
          <span className="font-semibold text-yellow-400"> photography</span> and 
          <span className="font-semibold text-yellow-400"> exploring nature</span>. Let’s connect and build something extraordinary together!
        </p>

        {/* Call to Action */}
        <div className="flex justify-center mt-10">
          <a
            href="https://linkedin.com/in/nagendra-yaparala-18111919b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
