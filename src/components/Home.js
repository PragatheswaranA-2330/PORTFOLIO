// src/components/Home.js
import React, { useContext } from "react";
import { ModalContext } from "../App";
import Contact from "./Contact";
import Projects from "./Projects";

const { useEffect } = React;

function useModal() {
  const ctx = useContext(ModalContext);
  return ctx || { showModal: null };
}

const Home = () => {
  const { showModal } = useModal();

  return (
    <div className="home-container">
      <div className="home-bg" />
      <div className="home-content">
        <h1>Web Developer & MERN Enthusiast</h1>
        <div className="photo-wrap">
          <img src="/unnamed.jpg" alt="PRAGATHESWARAN " className="hero-photo" />
        </div>
        <h2 className="hero-title">Hi, I AM PRAGATHESWARAN A</h2>
        <p>
          Enthusiastic software developer with a strong foundation in web
          development, Python, and C, passionate about building modern,
          efficient, and sustainable digital solutions.
        </p>
        <div className="button-group">
          <button
            type="button"
            className="secondary-btn"
            onClick={() => showModal && showModal("Projects", <Projects />)}
          >
            View Projects
          </button>
          <button
            type="button"
            className="secondary-btn"
            onClick={() =>
              showModal &&
              showModal(
                "Resume",
                <div>
                  <p>Download my resume:</p>
                  <a href="/PRAGATHESWARAN_RESUME.pdf" download className="primary-btn">Download PDF</a>
                </div>
              )
            }
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
