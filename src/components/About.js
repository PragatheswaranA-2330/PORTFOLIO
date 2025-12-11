import React from "react";

const About = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">About</h2>
      <p>
        B.E. Mechatronics Engineering student at Kongu Engineering College with
        a strong interest in MERN stack development, 2D/3D modeling, and PCB
        design and fabrication.
      </p>
      <p>
        Enjoys combining software engineering, design, and sustainability to
        deliver impactful solutions and lead collaborative projects.
      </p>
      <div className="edu-box">
        <h3>Education</h3>
        <ul>
          <li>
            B.E. Mechatronics Engineering, Kongu Engineering College
            (Autonomous), 2023–2027 — CGPA: 7.86.
          </li>
          <li>
            XII – Lingannamani Matriculation Higher Secondary School, 87.33%.
            
          </li>
          <li>
            X – Lingannamani Matriculation Higher Secondary School.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
