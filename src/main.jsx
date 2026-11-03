import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "Mini Game",
    title: "Snake Game",
    image: "/snakeLive.png",
    description:
      "A classic snake game built with React, Node.js, featuring a leaderboard to track high scores. I bet you can't beat a score of 55, try it out!",
    stack: ["React", "Node.js"],
    github: "https://github.com/Komalpreet05/snakeGameV2.0",
    demo: "https://devkomal-snakegame-v2.netlify.app/",
  },
  {
    number: "02",
    type: "Weather application",
    title: "Weather App",
    image: "/weatherDash.png",
    description:
      "A responsive weather application that helps users search locations and quickly view current conditions and forecasts.",
    stack: ["JavaScript", "CSS", "Weather API"],
    github: "https://github.com/Komalpreet05/weatherApp",
    demo: "https://devkomal-weatherapp.netlify.app/",
  },
  {
    number: "03",
    type: "Transit web application",
    title: "Presto Website Clone",
    image: "/presto.png",
    description:
      "An official Presto website clone with an added feature that predicts potential transit delays, helping riders plan their journeys with more confidence.",
    stack: ["HTML", "CSS", "JavaScript", "Prediction feature"],
    github: "https://github.com/Komalpreet05/CRUD-application",
    demo: "https://example.com/",
  },
];

const skills = [
  "JavaScript",
  "React",
  "HTML & CSS",
  "Node.js",
  "REST APIs",
  "SQL",
  "Git & GitHub",
  "Accessibility",
  "TypeScript",
  "Java",
  "Express.js",
  "GitHub Actions / CI-CD",
  "Agile / Scrum",
  "API integration and authentication",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Komalpreet Singh home"
        >
          <span className="brand-mark">KS</span>
          <span>Komalpreet Singh</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#resume" onClick={closeMenu}>
            Resume
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-grid" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Available for meaningful work
            </p>
            <h1>
              Building with
              <br />
              <em>curiosity</em> &amp; care.
            </h1>
            <p className="hero-intro">
              Hi, I&apos;m Komalpreet Singh, a Computer Science student and
              Software Developer who turns thoughtful ideas into useful digital
              experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-light" href="#about">
                More about me <ChevronDown size={16} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-card">
              <div className="portrait-image">
                <img
                  src="/profile.jpg"
                  alt="Professional portrait of Komalpreet Singh"
                />
              </div>
              <div className="portrait-caption">
                <span>Based in Toronto</span>
                <span>✦</span>
                <span>Open to possibilities</span>
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <span className="scroll-line" />
          </div>
        </section>

        <section className="marquee" aria-label="Areas of interest">
          <span>Software development</span>
          <i>✦</i>
          <span>Human-centred design</span>
          <i>✦</i>
          <span>Continuous learning</span>
          <i>✦</i>
          <span>Software development</span>
        </section>

        <section className="about section-grid content-section" id="about">
          <div className="section-label">
            <span>01</span>
            <span className="label-line" />
            <span>About me</span>
          </div>
          <div className="about-content">
            <p className="section-kicker">A little context</p>
            <h2>
              From a new beginning
              <br />
              to <em>building what&apos;s next.</em>
            </h2>
            <div className="about-columns">
              <p>
                I&apos;m currently pursuing my{" "}
                <strong>BSc in Computer Science at York University</strong>.
                What I love most about the program is how it brings logical
                problem-solving and creative thinking together - there is always
                another way to make something clearer, faster, or more human.
              </p>
              <p>
                My journey hasn&apos;t been a straight line. Leaving a full-time
                job to return to school taught me resilience. My most rewarding
                co-op experience so far has been joining the{" "}
                <strong>Ontario Public Service as a Software Developer</strong>,
                where I&apos;ve seen how thoughtful technology can make a real
                difference for people.
              </p>
            </div>
            <div className="about-stats">
              <div>
                <strong>2025</strong>
                <span>
                  First software
                  <br />
                  developer role
                </span>
              </div>
              <div>
                <strong>∞</strong>
                <span>
                  Curiosity to
                  <br />
                  keep learning
                </span>
              </div>
              <div>
                <strong>01</strong>
                <span>
                  Goal: build
                  <br />
                  with purpose
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="video-section content-section"
          aria-labelledby="video-title"
        >
          <div className="video-copy">
            <p className="section-kicker">A quick hello</p>
            <h2 id="video-title">
              The story behind
              <br />
              <em>the screen.</em>
            </h2>
            <p>
              This short introduction is where I share the skills, lessons, and
              experiences that are shaping my next chapter.
            </p>
          </div>
          <div className="video-card">
            <div className="video-background">
              <div className="video-grid" />
              <span className="video-initials">KS</span>
              <button className="play-button" aria-label="Play About Me video">
                <Play size={24} fill="currentColor" />
              </button>
              <span className="video-label">ABOUT ME / 2026</span>
            </div>
          </div>
        </section>

        <section className="projects content-section" id="projects">
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              <span className="label-line" />
              <span>Selected work</span>
            </div>
            <div>
              <p className="section-kicker">Ideas into impact</p>
              <h2>
                Things I&apos;ve
                <br />
                <em>made.</em>
              </h2>
            </div>
            <p className="heading-note">
              A selection of technical projects where I explored, solved, and
              learned by building.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub <ArrowUpRight size={14} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    View live demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-cta">
            <a
              className="button button-dark"
              href="https://github.com/Komalpreet05"
              target="_blank"
              rel="noreferrer"
            >
              Explore more projects <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="resume-section content-section" id="resume">
          <div className="resume-panel">
            <div className="section-label light">
              <span>03</span>
              <span className="label-line" />
              <span>Experience &amp; skills</span>
            </div>
            <div className="resume-content">
              <div>
                <p className="section-kicker light-text">The practical stuff</p>
                <h2>
                  Ready to make
                  <br />
                  <em>an impact.</em>
                </h2>
              </div>
              <a
                className="button button-light"
                href="/Komalpreet.pdf"
                download
              >
                Download resume <Download size={17} />
              </a>
            </div>
            <div className="experience-row">
              <BriefcaseBusiness size={22} />
              <div>
                <span className="experience-meta">
                  2025 — Present · Ontario Public Service
                </span>
                <h3>Software Developer</h3>
                <p>
                  Learning how to build dependable digital services with care,
                  collaboration, and a public-purpose mindset.
                </p>
              </div>
              <ArrowUpRight size={20} />
            </div>
          </div>
          <div className="skills-panel">
            <p className="section-kicker">My toolkit</p>
            <h3>
              Skills I bring
              <br />
              <em>to the table.</em>
            </h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact content-section" id="contact">
          <div className="section-label">
            <span>04</span>
            <span className="label-line" />
            <span>Get in touch</span>
          </div>
          <div className="contact-content">
            <p className="section-kicker">Have a good idea?</p>
            <h2>
              Let&apos;s make it
              <br />
              <em>real.</em>
            </h2>
            <p className="contact-blurb">
              I&apos;m always open to conversations about technology, creative
              collaboration, and opportunities to build something useful.
            </p>
            <a className="email-link" href="mailto:komalbhatia2305@gmail.com">
              komalbhatia2305@gmail.com <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Komalpreet Singh</span>
        <span>Built with curiosity &amp; React</span>
        <div className="social-links">
          <a href="https://github.com/Komalpreet05" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/devkomal/" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:komalbhatia2305@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
