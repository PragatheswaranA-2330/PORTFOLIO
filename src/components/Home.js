// src/components/Home.js
import React, { useContext, useState } from "react";
import { ModalContext } from "../App";
import Projects from "./Projects";
import { Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

function useModal() {
  const ctx = useContext(ModalContext);
  return ctx || { showModal: null };
}

const Home = () => {
  const { showModal } = useModal();
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <div className="home-container" id="home">
      <div className="home-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="home-content">
        <span className="hero-subtitle">Web Developer &amp; MERN Enthusiast</span>

        <div className="photo-wrap">
          <img
            src="/ms.jpeg"
            alt="PRAGATHESWARAN A"
            className="hero-photo"
            onClick={() => setPhotoOpen(true)}
            title="Click to view full size"
          />
        </div>

        <h1 className="hero-title">Hi, I AM PRAGATHESWARAN A</h1>

        <p className="hero-desc">
          Enthusiastic software developer with a strong foundation in web
          development, Python, and C, passionate about building modern,
          efficient, and sustainable digital solutions.
        </p>

        <div className="social-links" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <a href="https://github.com/PragatheswaranA-2330" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/pragatheswarana2330/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
          <a href="mailto:email@example.com" className="social-icon"><Mail size={24} /></a>
        </div>

        <div className="button-group">
          <button
            type="button"
            className="primary-btn"
            onClick={() => showModal && showModal("Projects", <Projects />)}
          >
            Explore Projects
          </button>

          <a href="Pragatheswaran_FS Developer.pdf" download className="secondary-btn">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-illustration-container">
        <img src="/hero_illustration.png" alt="Tech Illustration" className="hero-illustration" />
      </div>

      {/* WhatsApp-style photo lightbox */}
      {photoOpen && (
        <div className="photo-lightbox" onClick={() => setPhotoOpen(false)}>
          <button
            className="lightbox-close"
            onClick={() => setPhotoOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src="/ms.jpeg" alt="PRAGATHESWARAN A" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

