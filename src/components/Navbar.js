import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">PRAGATHESWARAN A</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/PRAGATHESWARAN_RESUME.pdf" download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
