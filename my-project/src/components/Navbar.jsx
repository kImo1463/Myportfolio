// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";



import { Link } from 'react-scroll'; // Import Link from react-scroll
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="relative">
        <button onClick={toggleDropdown} className="bg-blue-500 text-white px-4 py-2 rounded">
          Menu
        </button>
        {isOpen && (
          <div className="absolute right-0 bg-white text-black rounded shadow-lg mt-2">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Hero
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              About
            </Link>
            <Link
              to="technologies"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Technologies
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abdulhakim-obsina-931ba6285" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kImo1463" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/abdu80231?t=G2hVnJWpMFbXWbPYoICTTA&s=09" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://telegram.me/IAME1463" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;