import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

function Education() {
  return (
    <section className="education" id="education">
      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">EDUCATION</p>

        <h2>
          My academic <span>background.</span>
        </h2>
      </motion.div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="education-icon">
          <FiBookOpen />
        </div>

        <div className="education-info">
          <p className="education-year">2023 — 2026</p>

          <h3>Bachelor of Computer Applications (BCA)</h3>

          <p className="education-description">
            Completed my Bachelor of Computer Applications with a focus on
            programming, web development, databases, and software development
            fundamentals.
          </p>

          <div className="education-highlights">
            <span>Programming</span>
            <span>Web Development</span>
            <span>Databases</span>
            <span>Software Development</span>
          </div>

          <p className="education-status">
            BCA Graduate
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;