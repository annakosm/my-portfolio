import { useState, useEffect } from "react";
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
    description: `A fullstack  application with Java Spring-boot backend and Angular frontend, mimicking core AirBnb features,
      named 'GetARoom'. It has authentication and authorization using JWT. Users can sign up as hosts or guests, 
      list properties, make bookings, leave reviews and message to each other. The app showcases property listings with images, descriptions, 
      and pricing. Guests can search for available properties based on multiple filters. Hosts can manage their listings and view bookings. 
      The application uses a relational database(mySql) to store user, property, booking, and review data.`,

    link: "https://github.com/annakosm/myAirbnbProject",
    images: []
  },
  {
    name: "MyStudies Clone",
    tech: ["FireBase", "React", "JavaScript", "CSS"],
    description:   `This application was developed as a modern reimagining of MyStudies — a platform that helps students track their academic progress. 
      It allows students to view their degrees, earned certifications, and missed courses that need to be retaken, as well as monitor how many courses 
      remain to complete their studies. The goal of this project was to modernize the existing system with a cleaner interface and improved functionality. 
      Teachers can view their students’ profiles, track their progress, and record grades once exams are completed.`,

    link: "https://github.com/annakosm/MyStudies-University-Dashboard",
    images: [myStudiesGif, myStudiesGif]
  },
  {
    name: "Wannabe",
    tech: ["Java String-boot", "React-native", "TypeScript", "CSS"],
    description:  `A mobile app that users are able to set their goals and track their progress. Users can create an account, set personal goals, and monitor their achievements 
      over time. The backend has been developed with Java Spring-Boot and the frontend with React-native. App also has authentication and authorization using JWT.
      Currently the app is in progress so link will be added soon.`,

    link: "https://github.com/annakosm/myCalendar",
    images: []
  },
];

const techFilters = ["React", "JavaScript", "CSS", "TypeScript", "Java String-boot", "FireBase"];

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

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

  const noMatch = filteredProjects.length === 0;

  useEffect(() => {
    if (noMatch) {
      setSelectedProject(null);
    } else if (
      selectedProject &&
      !filteredProjects.some((p) => p.name === selectedProject.name)
    ) {
      setSelectedProject(filteredProjects[0]);
    } else if (!selectedProject) {
      setSelectedProject(filteredProjects[0]);
    }
  }, [selectedFilters, noMatch]);

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

      {noMatch ? (
        <div className="no-projects center">
          <FaRegSadTear className="no-match-icon" />
          <p>Oops! No projects match those filters. Try removing one or two ✨</p>
        </div>
      ) : (
        <div className="projects-split">
          <div className="projects-list">
            {filteredProjects.map((project) => (
              <div
                key={project.name}
                className={`project-name ${
                  selectedProject?.name === project.name ? "active" : ""
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="projects-details">
              <h3>{selectedProject.name}</h3>

              <div className="project-tech">
                {selectedProject.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <p>{selectedProject.description}</p>

              {/* 🖼️ Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  infiniteLoop
                  dynamicHeight
                  emulateTouch
                  autoPlay={false}
                  className="project-carousel"
                >
                  {selectedProject.images.map((img, index) => (
                    <div key={index}>
                      <img src={img} alt={`${selectedProject.name} screenshot ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
              )}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
