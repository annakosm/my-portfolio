import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

export default function Education() {
  const timeline = [
    {
      date: "October 2020 – February 2025",
      title: "Bachelor of Computer Science",
      description: "National and Kapodistrian University of Athens.",
      icon: <FaGraduationCap className="edu-icon" />,
    },
  ];

  return (
    <section className="education" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="edu-grid">
        {timeline.map((item, index) => (
          <motion.div
            className="edu-card"
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="edu-content">
              <div className="edu-icon-container">{item.icon}</div>
              <div className="edu-text">
                <h3>{item.title}</h3>
                <span className="edu-period">{item.date}</span>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
