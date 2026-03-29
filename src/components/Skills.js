import React from "react";

const Skills = () => {
  return (
    <div className="section-container" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="glass-grid">
        <div className="glass-card">
          <h3>Web & Programming</h3>
          <div className="tags-container">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">ReactJS</span>
            <span className="tag">Python</span>
            <span className="tag">C</span>
            <span className="tag">MongoDB</span>
            <span className="tag">MySQL</span>
          </div>
        </div>
        <div className="glass-card">
          <h3>Tools & Software</h3>
          <div className="tags-container">
            <span className="tag">AutoCAD</span>
            <span className="tag">SolidWorks</span>
            <span className="tag">Eagle</span>
            <span className="tag">CopperCAM</span>
            <span className="tag">VS Code</span>
            <span className="tag">IntelliJ IDEA</span>
            <span className="tag">GitHub Desktop</span>
          </div>
        </div>
        <div className="glass-card">
          <h3>Soft Skills</h3>
          <div className="tags-container">
            <span className="tag">Time Management</span>
            <span className="tag">Team Collaboration</span>
            <span className="tag">Requirements Gathering</span>
            <span className="tag">Critical Thinking</span>
            <span className="tag">Punctuality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
