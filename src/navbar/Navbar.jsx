import { useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import ProfileImageCartoon from "../assets/profile.png";
import "./Navbar.css";

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const sections = [
    "about",
    "education",
    "experience",
    "certifications",
    "skills",
    "projects",
    "contact",
  ];

  const getSectionLink = (section) => {
    return location.pathname === "/"
      ? `#${section}`
      : `/#${section}`;
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={ProfileImageCartoon}
            alt="Anna"
            className="profile-pic"
          />
          <h1 className="logo">It's Anna</h1>
        </Link>
      </div>

      {/* DESKTOP MENU */}
      <div className="navbar-right desktop-menu">
        {sections.map((section) => (
          <a
            key={section}
            href={getSectionLink(section)}
            className={`nav-link ${
              activeSection === section ? "active" : ""
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}

        <Link to="/blog" className="nav-link blog-link">
          Blog ✨
        </Link>

        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>

      {/* MOBILE CONTROLS */}
      <div className="mobile-controls mobile-only">
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {sections.map((section) => (
          <a
            key={section}
            href={getSectionLink(section)}
            className={`nav-link ${
              activeSection === section ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}

        <Link
          to="/blog"
          className="nav-link blog-link"
          onClick={() => setMenuOpen(false)}
        >
          Blog ✨
        </Link>
      </div>
    </nav>
  );
}