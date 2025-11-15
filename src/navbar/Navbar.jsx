import { useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import ProfileImageCartoon from "../assets/profile.png";
import "./Navbar.css";

export default function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    "about",
    "education",
    "experience",
    "certifications",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={ProfileImageCartoon} alt="Anna" className="profile-pic" />
        <h1 className="logo">It's Anna</h1>
      </div>

      <div className="navbar-right desktop-menu">
        {sections.map((section) => (
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

      <div className="mobile-controls mobile-only">
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${activeSection === section ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
