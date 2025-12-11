import React from "react";

const Skills = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="card reveal">
          <h3>Web & Programming</h3>
          <ul>
            <li>HTML, CSS, JavaScript, ReactJS </li>
            <li>Python, C </li>
            <li>MongoDB, MySQL </li>
            <li>GitHub Desktop </li>
          </ul>
        </div>
        <div className="card reveal">
          <h3>Tools & Software</h3>
          <ul>
            <li>AutoCAD, SolidWorks </li>
            <li>Eagle, CopperCAM </li>
            <li>VS Code, IntelliJ IDEA </li>
          </ul>
        </div>
        <div className="card reveal">
          <h3>Soft Skills</h3>
          <ul>
            <li>Time management, team collaboration </li>
            <li>Requirements gathering, critical thinking</li>
            <li>Punctuality </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
