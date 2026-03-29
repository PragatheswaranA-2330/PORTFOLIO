import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>PRAGATHESWARAN A</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a href="/build/PRAGATHESWARAN_RESUME.pdf" download className="primary-btn" style={{padding: '0.4rem 1.2rem'}}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
