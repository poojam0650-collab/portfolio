import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function Projects() {
  const projects = [
    {
        title: "WanderWorld — Travel & Tour Booking Website",
        description:
           "A responsive travel website that allows users to explore destinations, search for trips, view tour packages, and submit travel bookings through an interactive multi-page interface.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        image: "/images/wanderworld.png",
        github: "https://github.com/poojam0650-collab/explore-world",
        live: "https://unique-biscuit-2d3140.netlify.app/",
    },
    ];

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-label">My Work</p>
        <h2>Featured Project</h2>
        <p>
          A selection of projects that showcase my development skills and
          practical experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="project-image">
            <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;