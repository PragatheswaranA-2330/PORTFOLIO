import React from "react";

const Contact = () => {
  return (
    <div className="section-container" id="contact">
      <h2 className="section-title">Contact</h2>
      
      <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <p className="hero-desc">
          Open to web development internships, freelance projects, and collaborations.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
          <div>
            <strong style={{ color: 'var(--accent-cyan)' }}>Location</strong>
            <p>Thirupathur</p>
          </div>
          
          <div>
            <strong style={{ color: 'var(--accent-cyan)' }}>Email</strong>
            <p><a href="mailto:waranpragathes62@gmail.com" style={{ textDecoration: 'none', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-magenta)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>waranpragathes62@gmail.com</a></p>
          </div>
          
          <div>
            <strong style={{ color: 'var(--accent-cyan)' }}>Phone</strong>
            <p><a href="tel:+919025264473" style={{ textDecoration: 'none', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-magenta)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>+91 90252 64473</a></p>
          </div>

          <div className="button-group" style={{ marginTop: '1rem' }}>
            <a href="https://www.linkedin.com/in/Pragatheswaran-A" target="_blank" rel="noreferrer" className="primary-btn">
              LinkedIn
            </a>
            <a href="https://github.com/PragatheswaranA_23-30" target="_blank" rel="noreferrer" className="secondary-btn">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
