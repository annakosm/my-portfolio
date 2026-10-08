import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { articles } from "./articles/articles";
import "./articles/Article.css";
import kafkaImage from "../assets/kafka.jpg";

const markdownFiles = import.meta.glob("./content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function BlogPost() {
  const { slug } = useParams();

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <main className="article-page">
        <div className="article-not-found">
          <p>404 · NOTES</p>
          <h1>Article not found.</h1>

          <Link to="/blog">
            <FaArrowLeft />
            Back to Notes &amp; Articles
          </Link>
        </div>
      </main>
    );
  }

  const content = markdownFiles[`./content/${slug}.md`];

  if (!content) {
    return (
      <main className="article-page">
        <div className="article-not-found">
          <p>404 · CONTENT</p>
          <h1>This article is still being written.</h1>

          <Link to="/blog">
            <FaArrowLeft />
            Back to Notes &amp; Articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="article-page">
      {/* =========================================
          ARTICLE HEADER
      ========================================= */}

      <header className="article-header">
        <div className="article-header-top">
          <span>IT'S ANNA — NOTES &amp; ARTICLES</span>

          <Link to="/blog" className="back-to-blog">
            <FaArrowLeft />
            All articles
          </Link>
        </div>

        <div className="article-hero">
          <div className="article-intro">
            <p className="article-kicker">
              {article.tags.join(" · ")}
            </p>

            <h1>{article.title}</h1>

            <p className="article-description">
              {article.description}
            </p>

            <div className="article-meta">
              <span>{article.date}</span>
              <span>·</span>
              <span>ANNA KOSMIDI</span>
              <span>·</span>
              <span>7 MIN READ</span>
            </div>
          </div>

          {/* =========================================
              EDITORIAL VISUAL
          ========================================= */}
         <div className="article-visual">
            <div className="visual-frame">
              <span className="visual-label">TECH NOTES</span>

              <div className="visual-content">
                <img
                  src={kafkaImage}
                  alt="Apache Kafka"
                  className="kafka-image"
                />
              </div>

              <span className="visual-caption">
                A certification journey
              </span>
            </div>
          </div>
        </div> 
      </header>

      {/* =========================================
          ARTICLE
      ========================================= */}

      <div className="article-layout">
        <aside className="article-sidebar">
          <span className="sidebar-label">IN THIS NOTE</span>

          <span>CCDAK</span>
          <span>KAFKA</span>
          <span>CERTIFICATION</span>
        </aside>

        <article className="article-content">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),

              blockquote: ({ children }) => (
                <blockquote>{children}</blockquote>
              ),
            }}
          >
            {content}
          </ReactMarkdown>

          {/* =========================================
              ARTICLE FOOTER
          ========================================= */}

          <footer className="article-footer">
            <div className="article-footer-line" />

            <div className="article-footer-tags">
              {article.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="article-footer-bottom">
              <p>
                Thanks for reading.
                <br />
                More notes coming soon.
              </p>

              <Link to="/blog" className="back-to-blog-footer">
                <FaArrowLeft />
                Back to Notes &amp; Articles
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}

export default BlogPost;