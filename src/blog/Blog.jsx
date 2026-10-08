import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { articles } from "../blog/articles/articles";
import Contact from "../contact/Contact";
import "../blog/Blog.css";
import kafkaImage from "../assets/kafka.jpg";

export default function Blog() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <main className="blog-page">
      {/* =========================================
          MASTHEAD
      ========================================= */}

      <header className="blog-masthead">
        <div className="masthead-top">
          <span>BACKEND • KAFKA • SOFTWARE ENGINEERING</span>
          <span>IT'S ANNA</span>
        </div>

        <div className="masthead-title">
          <h1>Notes &amp; Articles</h1>
          <span className="masthead-star">✦</span>
        </div>

        <p className="masthead-subtitle">
          Thoughts, lessons learned, certifications, projects and things I
          discover while building software.
        </p>

        <nav className="blog-navigation">
          <span>ALL NOTES</span>
          <span>BACKEND</span>
          <span>KAFKA</span>
          <span>LEARNING</span>
        </nav>
      </header>

      {/* =========================================
          FEATURED STORY
      ========================================= */}

      {featuredArticle && (
        <section className="featured-story">
          <div className="story-label">
            <span>FEATURED</span>
            <span>NO. 01</span>
          </div>

          <div className="featured-grid">
            <div className="featured-main">
              <p className="story-date">{featuredArticle.date}</p>

              <h2>{featuredArticle.title}</h2>

              <p className="story-excerpt">
                {featuredArticle.description}
              </p>

              <div className="story-meta">
                <span>{featuredArticle.tags.join(" • ")}</span>
              </div>

              <Link
                to={`/blog/${featuredArticle.slug}`}
                className="read-article"
              >
                Read article
                <FaArrowRight />
              </Link>
            </div>

            {/* Editorial visual */}
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
        </section>
      )}

      {/* =========================================
          LATEST
      ========================================= */}

      <section className="latest-section">
        <div className="section-title">
          <h2>Latest</h2>
          <span>MORE STORIES TO COME</span>
        </div>

        {otherArticles.length === 0 ? (
          <div className="coming-soon">
            <span>✦</span>

            <div>
              <p>More stories are on the way.</p>
              <small>I'm still writing.</small>
            </div>

            <span>✦</span>
          </div>
        ) : (
          <div className="article-grid">
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="article-small"
              >
                <span>{article.date}</span>

                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <strong>
                  Read
                  <FaArrowRight />
                </strong>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* =========================================
          EDITOR'S NOTE
      ========================================= */}

      <section className="editors-note">
        <div className="editors-note-label">EDITOR'S NOTE</div>

        <div className="editors-note-content">
          <p>
            This is my little corner of the internet for things I learn,
            build, break, fix and occasionally overthink.
          </p>

          <span>— Anna</span>
        </div>
      </section>

      {/* =========================================
          CONTACT
      ========================================= */}

      <Contact />
    </main>
  );
}