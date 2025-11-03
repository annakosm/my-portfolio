import { motion } from "framer-motion";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi"; // external link icon
import "./Certifications.css";

export default function Certifications() {
  const certs = [
    {
      icon: <FaAws className="cert-icon aws" />,
      year: "2025",
      title: "AWS Cloud Practitioner Essentials",
      desc: "Complete course on AWS Skillbuilder about AWS Cloud Practitioner Essentials.",
      url: "https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials",
    },
    {
      icon: <SiKubernetes className="cert-icon kube" />,
      year: "2025",
      title: "Kubernetes Certification",
      desc: "Udemy course: Kubernetes for the Absolute Beginners - Hands-on.",
      url: "https://udemy.com/course/learn-kubernetes/",
    },
    {
      icon: <FaDocker className="cert-icon docker" />,
      year: "2024",
      title: "Docker Certification",
      desc: "Udemy course: Docker for the Absolute Beginners - Hands-on.",
      url: "https://udemy.com/course/learn-docker/",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cert-icon-container">{cert.icon}</div>
            <span className="cert-year">{cert.year}</span>
            <h3>{cert.title}</h3>
            <p className="cert-desc">{cert.desc}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link-button"
            >
              <FiExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
