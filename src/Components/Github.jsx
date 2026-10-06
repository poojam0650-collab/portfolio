import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

function Github() {
  return (
    <section className="github" id="github">
      <motion.div
        className="github-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="github-icon">
          <FiGithub />
        </div>

        <div className="github-content">
          <p className="section-label">GITHUB</p>

          <h2>
            Let's connect through
            <span> code.</span>
          </h2>

          <p>
            Explore my repositories, projects, and development work on GitHub,
            including my WanderWorld travel and tour booking website.
          </p>

          <a
            href="https://github.com/poojam0650-collab"
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub
            <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Github;