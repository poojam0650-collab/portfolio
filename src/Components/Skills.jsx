
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaGithub,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "React", icon: FaReact },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "Django", icon: FaCode },
        { name: "REST APIs", icon: FaDatabase },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: FaDatabase },
        { name: "SQLite", icon: FaDatabase },
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: FaTools },
      ],
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
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    className="skill-icon-wrapper"
                    key={skill.name}
                  >
                    <span
                      className="skill-icon"
                      title={skill.name}
                      aria-label={skill.name}
                      role="img"
                    >
                      <Icon />
                    </span>

                    <span className="skill-tooltip">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
