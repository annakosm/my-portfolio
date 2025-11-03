import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import "./App.css";
import Typewriter from "./typewriter/Typewriter";
import GalaxyImage from "./assets/galaxy.jpg";
import EarthGif from "./assets/earth-rotate.gif";
import ProfileImageCartoon from "./assets/profile.png";
import ProfileImage from "./assets/profile.png";
import Education from "./education/Education";
import Certifications from "./certifications/Certifications";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import AboutText from "./about/AboutText";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section, .education, .certifications, .experience");
    const handleScroll = () => {
      let scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={ProfileImageCartoon} alt="Anna" className="profile-pic" />
          <h1 className="logo">It's Anna</h1>
        </div>
        <div className="navbar-right">
          {["about","education","experience","certifications","skills","projects","contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? "active" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{ backgroundImage: `url(${GalaxyImage})` }}>
        <div className="hero-content">
          <div className="hero-layout">
            <img src={EarthGif} alt="Rotating Earth" className="earth-rotating" />
            <div className="hero-text">
              <Typewriter
                segments={[
                  { text: "Hello World", className: "hello" },
                  { text: "It's Anna", className: "anna" },
                ]}
                speed={250}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <motion.section className="about" id="about" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="about-content">
          <motion.img src={ProfileImage} alt="Anna" className="about-photo" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
          <div className="about-text">
            <h2>About Me</h2>
            <AboutText />
          </div>
        </div>
      </motion.section>

      <Education />
      <Experience />
      <Certifications />

      <section className="skills" id="skills"><Skills /></section>
      <motion.section className="projects" id="projects"><Projects /></motion.section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
