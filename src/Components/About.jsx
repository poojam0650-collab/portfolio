import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">ABOUT ME</p>

        <h2>
          Building the web with
          <span> purpose.</span>
        </h2>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <p>
          I'm a BCA graduate and aspiring Python Full Stack Developer
          passionate about creating responsive, user-friendly, and
          practical web applications.
        </p>

        <p>
          I enjoy working across both frontend and backend development,
          turning ideas into functional digital experiences using modern
          web technologies.
        </p>

        <p>
          Through hands-on projects like WanderWorld, I continue to
          strengthen my skills, learn new technologies, and improve my
          problem-solving abilities as I grow toward a career in software
          development.
        </p>
      </motion.div>
    </section>
  );
}

export default About;