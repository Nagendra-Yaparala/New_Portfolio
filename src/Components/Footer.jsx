import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700 text-white py-10 mt-20">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Text/Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-3xl font-semibold mb-2">Nagendra Yaparala</h3>
          <p className="text-lg">Frontend Developer</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mb-4 md:mb-0 justify-center md:justify-start">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center md:text-right mt-6 md:mt-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Nagendra Yaparala. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
