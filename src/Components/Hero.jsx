import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <motion.p
  className="hero-greeting"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Hi, I'm
</motion.p>

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  Pooja M
</motion.h1>

<motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Python Full Stack Developer
</motion.h2>

<motion.p
  className="hero-description"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  I build responsive and user-friendly web applications
  using Python, React, and modern web technologies.
</motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="#projects"
            className="primary-btn"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            View My Projects
            <FiArrowUpRight />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            className="secondary-btn"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
            <FiDownload />
         </motion.a>
          
          
          
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a href="https://github.com/poojam0650-collab" aria-label="GitHub">
            <FiGithub />
          </a>

          <a href="https://www.linkedin.com/in/pooja0309" aria-label="LinkedIn">
            <FiLinkedin />
          </a>

          <a href="mailto:poojam0650@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </motion.div>

      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="code-card">
          <span>Build</span>
          <span>Develop</span>
          <span>Grow</span>
        </div>

        <div className="hero-circle">
          &lt; / &gt;
        </div>

        <div className="python-card">
          Python
        </div>

        <div className="floating-text">
          Turning ideas into real web apps
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;