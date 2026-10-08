// src/pages/Home.jsx

import { motion } from "framer-motion";
import GalaxyImage from "../assets/galaxy.jpg";
import EarthGif from "../assets/earth-rotate.gif";
import ProfileImage from "../assets/profile.png";

import Typewriter from "../typewriter/Typewriter";
import Education from "../education/Education";
import Certifications from "../certifications/Certifications";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import AboutText from "../about/AboutText";

export default function Home() {
  return (
    <>
      <header
        className="hero"
        style={{ backgroundImage: `url(${GalaxyImage})` }}
      >
        <div className="hero-layout">
          <img src={EarthGif} alt="Earth" className="earth-rotating" />

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
      </header>

      <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-content">
          <motion.img
            src={ProfileImage}
            alt="Anna"
            className="about-photo"
            whileHover={{ scale: 1.05 }}
          />

          <div className="about-text">
            <h2>About Me</h2>
            <AboutText />
          </div>
        </div>
      </motion.section>

      <Education />
      <Experience />
      <Certifications />

      <section id="skills">
        <Skills />
      </section>

      <motion.section id="projects">
        <Projects />
      </motion.section>

      <Contact />
      <Footer />
    </>
  );
}