import { useState } from "react";
import { FaRegSadTear } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projects.css";
import myStudiesGif from "../assets/myStudies1.gif";

const allProjects = [
  {
    name: "Portfolio Site",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "A personal portfolio website built with React Vite, motion animations, and EmailJS integration.",
    link: "https://github.com/annakosm/my-portfolio",
    images: []
  },
  {
    name: "AirBnb Clone",
    tech: ["Java String-boot", "Angular", "TypeScript", "CSS"],
    description: `A fullstack application with Java Spring-boot backend and Angular frontend, mimicking core AirBnb features.
      Users can sign up, list properties, book, leave reviews, and message each other.`,
    link: "https://github.com/annakosm/myAirbnbProject",
    images: []
  },
  {
    name: "MyStudies Clone",
    tech: ["FireBase", "React", "JavaScript", "CSS"],
    description: `Modernized version of MyStudies. Students can track courses, certifications, and progress. Teachers can track student performance.`,
    link: "https://github.com/annakosm/MyStudies-University-Dashboard",
    images: [myStudiesGif, myStudiesGif]
  },
  {
    name: "Wannabe",
    tech: ["Java String-boot", "React-native", "TypeScript", "CSS"],
    description: `Mobile app for setting and tracking goals with authentication using JWT. Backend with Java Spring-Boot, frontend React-native.`,
    link: "https://github.com/annakosm/myCalendar",
    images: []
  },
];

const techFilters = ["React", "JavaScript", "CSS", "TypeScript", "Java String-boot", "FireBase"];

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const toggleFilter = (tech) => {
    setSelectedFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects =
    selectedFilters.length === 0
      ? allProjects
      : allProjects.filter((p) =>
          selectedFilters.every((f) => p.tech.includes(f))
        );

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-filters">
        {techFilters.map((tech) => (
          <button
            key={tech}
            className={selectedFilters.includes(tech) ? "active" : ""}
            onClick={() => toggleFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="no-projects center">
          <FaRegSadTear className="no-match-icon" />
          <p>Oops! No projects match those filters. Try removing one or two ✨</p>
        </div>
      ) : (
        <div className="projects-cards">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p>{project.description}</p>

              {project.images && project.images.length > 0 && (
                <Carousel
                  showArrows
                  showThumbs={false}
                  infiniteLoop
                  dynamicHeight
                  emulateTouch
                  autoPlay={false}
                  className="project-carousel"
                >
                  {project.images.map((img, idx) => (
                    <div key={idx}>
                      <img
                        src={img}
                        alt={`${project.name} screenshot ${idx + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
