import React from "react";

const Certifications = () => {
  return (
    <div className="section-container" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="glass-grid">

        <div className="glass-card">
          <h3>Autodesk Certified User</h3>
          <p>AutoCAD (May 2025)</p>
          <span className="tag">Design</span>
        </div>

        <div className="glass-card">
           <h3>Full stack Certified(Edu Prep)</h3>
          <p>Full Stack (Nov 2025)</p>
          <span className="tag">Web Design</span>

        </div>
        
        <div className="glass-card">
          <h3>Python Certification</h3>
          <p>Neural Gen-AI Networks (Aug 2025)</p>
          <span className="tag">Programming</span>
        </div>

        <div className="glass-card">
          <h3>Prompt Engineering</h3>
          <p>Neural Gen-AI Networks (Oct 2025)</p>
          <span className="tag">AI</span>
        </div>

        <div className="glass-card">
          <h3>NPTEL (IIT Roorkee)</h3>
          <p>Fundamentals of Object-Oriented Programming (Apr 2025)</p>
          <span className="tag">Elite Certificate</span>
        </div>

        <div className="glass-card">
          <h3>NPTEL (IIT Kharagpur)</h3>
          <p>Database Management System (Sep 2025)</p>
          <span className="tag">Database</span>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
