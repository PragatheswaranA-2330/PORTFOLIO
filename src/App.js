import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

export const ModalContext = createContext({ showModal: () => { } });

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState(null);

  const showModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ showModal }}>
      <div>
        <Navbar />
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="certifications"><Certifications /></section>
          <section id="contact"><Contact /></section>
        </main>
      </div>
      <Modal open={modalOpen} onClose={closeModal} title={modalTitle}>
        {modalBody}
      </Modal>
    </ModalContext.Provider>
  );
}

export default App;

