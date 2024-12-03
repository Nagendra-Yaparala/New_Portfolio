import React from 'react';
import Image from 'next/image';
import top from '../images/top.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white py-20 px-5 md:px-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            I&apos;M <span className="text-yellow-400">Nagendra Yaparala</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300">
            Frontend Developer | Crafting Interactive & Responsive Experiences
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block bg-yellow-500 text-black font-semibold text-lg px-6 py-3 rounded-md shadow-lg hover:bg-yellow-400 hover:shadow-xl transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative mt-10 md:mt-0">
          <Image
            src={top}
            alt="Hero Image"
            className="rounded-xl shadow-xl"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
