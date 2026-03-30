import React from "react";
import { BookOpen, User } from "lucide-react";

const About = () => {
  return (
    <div className="section-container" id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="glass-grid">
        <div className="glass-card">
          <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><User size={24} color="var(--accent-cyan)" /> My Background</h3>
          <p>
            B.E. Mechatronics Engineering student at Kongu Engineering College with
            a strong interest in MERN stack development, 2D/3D modeling, and PCB
            design and fabrication.
          </p>
          <p>
            Enjoys combining software engineering, design, and sustainability to
            deliver impactful solutions and lead collaborative projects.
          </p>
        </div>

        <div className="glass-card">
          <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><BookOpen size={24} color="var(--accent-cyan)" /> Education</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--accent-magenta)' }}>B.E. Mechatronics Engineering</strong><br />
              Kongu Engineering College (Autonomous), 2023–2027<br />
              <span className="tag" style={{ marginTop: '0.5rem', display: 'inline-block' }}>CGPA: 7.86</span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--accent-magenta)' }}>Class XII</strong><br />
              Lingannamani Matriculation Higher Secondary School<br />
              <span className="tag" style={{ marginTop: '0.5rem', display: 'inline-block' }}>87.33%</span>
            </li>
            <li>
              <strong style={{ color: 'var(--accent-magenta)' }}>Class X</strong><br />
              Lingannamani Matriculation Higher Secondary School
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
