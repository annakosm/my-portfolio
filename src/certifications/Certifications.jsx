import { motion } from "framer-motion";
import { FaAws, FaDocker } from "react-icons/fa";
import { SiKubernetes, SiApachekafka } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import ccdakCertificate from "../assets/ccdak.pdf";
import "./Certifications.css";

export default function Certifications() {
  const certs = [
    {
      icon: <SiApachekafka className="cert-icon kafka" />,
      year: "2026",
      title: "Confluent Certified Developer for Apache Kafka (CCDAK)",
      desc: "Official Confluent certification demonstrating Apache Kafka development expertise.",
      pdf: ccdakCertificate,
      url: "https://www.confluent.io/certification/",
    },
    {
      icon: <FaAws className="cert-icon aws" />,
      year: "2025",
      title: "AWS Cloud Practitioner Essentials",
      desc: "Complete course on AWS Skill Builder about AWS Cloud Practitioner Essentials.",
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
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {/* Confluent / external link */}
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link-button"
              aria-label={`Open ${cert.title} website`}
            >
              <FiExternalLink size={16} />
            </a>

            {/* Icon */}
            <div className="cert-icon-container">
              {cert.icon}
            </div>

            {/* Year */}
            <span className="cert-year">
              {cert.year}
            </span>

            {/* Title */}
            <h3>{cert.title}</h3>

            {/* Description */}
            <p className="cert-desc">
              {cert.desc}
            </p>

            {/* View Certification button */}
            {cert.pdf && (
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certification
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
