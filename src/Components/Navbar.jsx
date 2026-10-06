
import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        <span>&lt;/&gt;</span> Pooja M
      </a>

      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#education">Education</a>
        <a href="#github">GitHub</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="/resume.pdf" className="resume-btn">
        Download Resume
        <FiDownload />
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#journey" onClick={closeMenu}>Journey</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#github" onClick={closeMenu}>GitHub</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
