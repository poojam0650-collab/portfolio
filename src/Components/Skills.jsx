import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQLite"],
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">MY SKILLS</p>

        <h2>
          Technologies I <span>work with.</span>
        </h2>

        <p className="skills-intro">
          A growing set of technologies I use to build responsive,
          functional, and user-friendly web applications.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;