import React from "react";
import { Home, User, Code, Briefcase, Award, Mail, FileText } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>PRAGATHESWARAN A</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home"><Home size={18} className="nav-icon"/> Home</a></li>
        <li><a href="#about"><User size={18} className="nav-icon"/> About</a></li>
        <li><a href="#skills"><Code size={18} className="nav-icon"/> Skills</a></li>
        <li><a href="#projects"><Briefcase size={18} className="nav-icon"/> Projects</a></li>
        <li><a href="#certifications"><Award size={18} className="nav-icon"/> Certifications</a></li>
        <li><a href="#contact"><Mail size={18} className="nav-icon"/> Contact</a></li>
        <li>
          <a href="Pragatheswaran_FS Developer.pdf" download className="primary-btn" style={{padding: '0.4rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
            <FileText size={18} /> Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
