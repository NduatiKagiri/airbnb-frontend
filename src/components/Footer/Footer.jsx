import React from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';

const Footer = () => (
  <footer>
    <h3 className="text-center text-xs">Sources&apos; links</h3>
    <div className="icons">
      <a
        href="https://github.com/NduatiKagiri/airbnb-frontend"
        aria-label="Frontend Repository"
        alt="Frontend Repository"
        className="text-cyan-500 hover:bg-cyan-400 hover:text-white"
      >
        <FaReact />
      </a>
      <a
        href="https://github.com/NduatiKagiri/airbnb-backend"
        aria-label="Backend Repository"
        alt="Backend Repository"
        className="text-red-500 hover:bg-red-400 hover:text-white"
      >
        <SiRubyonrails />
      </a>
    </div>
    <h3 className="text-center text-xs">Authors&apos; links</h3>
    <div className="credits">
      <a
        href="https://github.com/HeDevedUp"
        aria-label="Jesse uzoma"
        alt="Jesse uzoma"
        className="text-yellow-500 hover:bg-yellow-400 hover:text-white"
      >
        <FaGithub />
      </a>
      <a
        href="https://github.com/NduatiKagiri"
        aria-label="John Nduati Kagiri "
        alt="John Nduati Kagiri"
        className="text-blue-500 hover:bg-blue-400 hover:text-white"
      >
        <FaGithub />
      </a>
      <a
        href="https://github.com/Brenda309"
        aria-label="Brenda Wihogora"
        alt="Brenda Wihogora"
        className="text-green-500 hover:bg-green-400 hover:text-white"
      >
        <FaGithub />
      </a>
    </div>

  </footer>
);

export default Footer;
