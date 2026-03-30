import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="section-container" id="contact">
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-wrapper" style={{ position: 'relative' }}>
        <div className="contact-illustration-container">
          <img src="/contact_illustration.png" alt="" className="contact-illustration" />
        </div>
        
        <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p className="hero-desc">
            Open to web development internships, freelance projects, and collaborations.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <div>
              <strong style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <MapPin size={18} /> Location
              </strong>
              <p>Thirupathur</p>
            </div>
            
            <div>
              <strong style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <Mail size={18} /> Email
              </strong>
              <p><a href="mailto:waranpragathes62@gmail.com" style={{ textDecoration: 'none', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-magenta)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>waranpragathes62@gmail.com</a></p>
            </div>
            
            <div>
              <strong style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <Phone size={18} /> Phone
              </strong>
              <p><a href="tel:+919025264473" style={{ textDecoration: 'none', color: 'var(--text-main)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-magenta)'} onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}>+91 90252 64473</a></p>
            </div>

            <div className="button-group" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              <a href="https://www.linkedin.com/in/Pragatheswaran-A" target="_blank" rel="noreferrer" className="primary-btn" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/PragatheswaranA_23-30" target="_blank" rel="noreferrer" className="secondary-btn" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
