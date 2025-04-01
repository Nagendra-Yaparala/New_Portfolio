import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navelements = [
    { name: "About", id: "about" },
    { name: "My Skills", id: "my-skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer text-yellow-400 hover:text-yellow-500 transition"
          onClick={() => handleScroll("home")}
        >
          Nagendra <span className="text-white">Yaparala</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          {navelements.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-white hover:text-yellow-400 transition duration-300"
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl text-white">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } transition-all duration-500 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navelements.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer text-white hover:text-yellow-400 text-lg transition duration-300"
                onClick={() => handleScroll(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
