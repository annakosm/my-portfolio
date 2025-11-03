import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>

      <motion.div
        className="contact-box"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <p>You can reach out to me via email or connect on LinkedIn / GitHub!</p>

        <div className="contact-links" style={{ marginTop: "1.5rem" }}>
          <a href="mailto:annkos02@gmail.com" target="_blank" rel="noopener noreferrer">
            <FiMail size={24} /> Email
          </a>
          <a href="https://www.linkedin.com/in/anna-kosmidi-699382256/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={24} /> LinkedIn
          </a>
          <a href="https://github.com/annakosm" target="_blank" rel="noopener noreferrer">
            <FiGithub size={24} /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
