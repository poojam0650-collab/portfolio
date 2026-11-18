import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "WanderWorld — Travel & Tour Booking Website",
      description:
        "A responsive travel website that allows users to explore destinations, search for trips, view tour packages, and submit travel bookings through an interactive multi-page interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/images/wanderworld.png",
      github: "https://github.com/poojam0650-collab/explore-world",
      live: "https://explore-world-mndkyd131-web-dd63.vercel.app/",
    },
    {
      title: "ShopSphere — Full Stack E-Commerce Website",
      description:
        "A responsive e-commerce web application that allows users to explore products, search and filter items, manage their cart and wishlist, create accounts, and place orders. It also includes an Admin Panel to manage products, monitor orders, update order statuses, view registered customers, and track store statistics.",
      technologies: [
        "React.js",
        "JavaScript",
        "React Router",
        "CSS",
        "MockAPI",
        "LocalStorage",
      ],
      image: "/images/shopsphere.png",
      github: "https://github.com/poojam0650-collab/explore-world",
      live: "https://shopsphere-bvt6ff94d-web-dd63.vercel.app/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  // Automatically change project every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const currentProject = projects[currentIndex];

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

      <div className="projects-carousel">

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="project-card"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45 }}
          >
            <div className="project-image">
              <img
                src={currentProject.image}
                alt={currentProject.title}
              />
            </div>

            <div className="project-content">
              <h3>{currentProject.title}</h3>

              <p>{currentProject.description}</p>

              <div className="project-tech">
                {currentProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="carousel-navigation">

          <button
            className="carousel-arrow"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <FiChevronLeft />
          </button>

          <div className="carousel-indicators">
            {projects.map((project, index) => (
              <button
                key={project.title}
                className={`carousel-dot ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <span className="carousel-count">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>

          <button
            className="carousel-arrow"
            onClick={nextProject}
            aria-label="Next project"
          >
            <FiChevronRight />
          </button>

        </div>
      </div>
    </section>
  );
}

export default Projects;