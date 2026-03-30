import React from "react";
import { Folder, ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="section-container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="glass-grid">
        <div className="glass-card">
          <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <Folder size={24} color="var(--accent-cyan)" /> Cellulose Fiber Sheets from Natural Waste
          </h3>
          <p>
            Developed eco-friendly cellulose paper using fruit and vegetable
            waste, reducing environmental impact and promoting sustainable
            alternatives to traditional paper.
          </p>
          <p>
            Led project planning, team coordination, and documentation to ensure
            successful implementation. 
          </p>
          <div className="tags-container">
            <span className="tag">Sustainability</span>
            <span className="tag">Project Management</span>
            <span className="tag">Eco-Innovation</span>
          </div>
          <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
             <a href="#" className="social-icon" title="View Source"><Github size={20}/></a>
             <a href="#" className="social-icon" title="Live Demo"><ExternalLink size={20}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
