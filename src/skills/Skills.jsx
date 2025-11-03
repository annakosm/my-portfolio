import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaDatabase,
  FaGitAlt,
  FaLanguage,
} from "react-icons/fa";
import { SiSpringboot, SiApachekafka, SiMysql, SiOracle } from "react-icons/si";
import { GiDiploma } from "react-icons/gi";
import "./Skills.css";

const technicalSkills = [
  { name: "Java", icon: <FaJava color="#f89820" />, level: "Expert" },
  { name: "Spring Boot", icon: <SiSpringboot color="#6db33f" />, level: "Advanced" },
  { name: "Kafka", icon: <SiApachekafka color="#231f20" />, level: "Intermediate" },
  { name: "Docker", icon: <FaDocker color="#0db7ed" />, level: "Advanced" },
  { name: "Relational DB (Oracle/MySQL)", icon: <FaDatabase color="#336791" />, level: "Advanced" },
  { name: "Python", icon: <FaPython color="#3776ab" />, level: "Advanced" },
  { name: "Git", icon: <FaGitAlt color="#f1502f" />, level: "Advanced" },
  { name: "React", icon: <FaReact color="#61dafb" />, level: "Intermediate" },
];

const otherSkills = [
  { name: "Michigan Proficiency (C2)", icon: <FaLanguage color="#1e90ff" />, level: "Fluent" },
  { name: "German B1 – Goethe", icon: <GiDiploma color="#ffd700" />, level: "Good" },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <h3>Technical Skills</h3>
      <div className="skills-box-grid">
        {technicalSkills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-box"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h3>Other Skills / Certifications</h3>
      <div className="skills-box-grid">
        {otherSkills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-box"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
