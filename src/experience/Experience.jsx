import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";
import "./Experience.css";

export default function Experience() {
  const experience = {
    icon: <FaServer className="exp-icon" />,
    role: "Backend Developer - Netcompany",
    period: "2024 – Present",
    desc: "Worked on API development and microservices architecture using Java Spring Boot and Kafka with Oracle as the database.",
  };

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="exp-grid">
        <motion.div
          className="exp-card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="exp-content">
            <div className="exp-icon-container">{experience.icon}</div>
            <div className="exp-text">
              <h3>{experience.role}</h3>
              <span className="exp-period">{experience.period}</span>
              <p>{experience.desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
