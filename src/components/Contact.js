import React from "react";

const Contact = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        Open to web development internships, freelance projects, and
        collaborations.
      </p>
      <div className="card reveal stagger">
        <ul className="list">
          <li>Location: Thirupathur</li>
          <li>Email: <a href="mailto:waranpragathes62@gmail.com">waranpragathes62@gmail.com</a></li>
          <li>Phone: <a href="tel:+919025264473">+91 90252 64473</a></li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/Pragatheswaran-A"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/PRAGATHESWARAN-A
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/PragatheswaranA_23-30"
              target="_blank"
              rel="noreferrer"
            >
              PRAGATHESWARANA_23-30
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
