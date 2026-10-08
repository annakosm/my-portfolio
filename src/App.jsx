import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import BlogPost from "./blog/BlogPost";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "section, .education, .certifications, .experience"
    );

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;