import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>&lt;/&gt;</span> Pooja M
          </a>

          <p>
            Python Full Stack Developer building responsive,
            user-friendly, and practical web applications.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#education">Education</a>
          <a href="#github">GitHub</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/poojam0650-collab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/pooja0309"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Pooja M. All rights reserved.</p>

        <p>Built with React ⚛️</p>
      </div>
    </footer>
  );
}

export default Footer;