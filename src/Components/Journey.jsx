import { motion } from "framer-motion";

function Journey() {
  const journey = [
    {
      year: "2023",
      title: "Started BCA",
      description:
        "Began my Bachelor of Computer Applications and developed a strong interest in programming, web technologies, and software development.",
    },
    {
      year: "2024",
      title: "Built Programming Foundations",
      description:
        "Strengthened my knowledge of programming concepts, databases, web development, and problem solving through academic learning and practice.",
    },
    {
      year: "2025",
      title: "Focused on Full Stack Development",
      description:
        "Expanded my skills in Python, frontend development, backend technologies, databases, and building applications from end to end.",
    },
    {
      year: "2026",
      title: "Built Real-World Projects",
      description:
        "Applied my skills through hands-on projects such as WanderWorld while continuing to improve my development, debugging, and problem-solving abilities.",
    },
  ];

  return (
    <section className="journey" id="journey">
      <motion.div
        className="journey-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">MY JOURNEY</p>

        <h2>
          Learning, building,
          <span> growing.</span>
        </h2>
      </motion.div>

      <div className="journey-list">
        {journey.map((item, index) => (
          <motion.div
            className="journey-item"
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <div className="journey-year">{item.year}</div>

            <div className="journey-dot"></div>

            <div className="journey-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Journey;