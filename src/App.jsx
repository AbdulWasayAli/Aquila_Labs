import Logo from './Logo'

export default function App() {
  const services = [
    {
      title: 'Full-Stack Web Apps',
      desc: 'High-performance React, Next.js, and modern backends architected for rapid scale.',
    },
    {
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android apps with native-grade performance and animations.',
    },
    {
      title: 'UI / UX Product Design',
      desc: 'World-class user interfaces, design systems, and seamless user experiences.',
    },
    {
      title: 'Cloud & API Integration',
      desc: 'Secure cloud infrastructure, custom APIs, database management, and seamless DevOps.',
    },
    {
      title: 'AI & Smart Automation',
      desc: 'Integrating intelligence, workflow automation, and custom algorithms into your workflow.',
    },
    {
      title: 'Branding & Identity',
      desc: 'Memorable brand identity, modern logos, and consistent visual guidelines for tech startups.',
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      desc: 'We analyze your concept, target market, and define clear architecture goals.',
    },
    {
      num: '02',
      title: 'Design & Prototype',
      desc: 'Interactive Figma prototypes ensuring pixel-perfect modern aesthetic.',
    },
    {
      num: '03',
      title: 'Agile Engineering',
      desc: 'Clean, modular, and performant code delivered with continuous progress updates.',
    },
    {
      num: '04',
      title: 'Launch & Expansion',
      desc: 'Stress testing, seamless deployment, and continuous optimization for growth.',
    },
  ]

  const techStack = [
    'React',
    'TypeScript',
    'Node.js',
    'Flutter',
    'Next.js',
    'Python',
    'PostgreSQL',
    'Tailwind CSS',
    'Docker',
    'Firebase',
  ]

  return (
    <div>
      <div className="background-glow-top"></div>

      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="brand">
            <Logo size={38} />
            <span className="brand-text">
              Aquila <span>Labs</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#tech">Technologies</a>
            <a href="#connect" className="btn-primary">
              Contact Team
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-logo-box">
            <Logo size={110} variant="badge" />
          </div>

          <div className="hero-badge">
            <span className="badge-dot"></span>
            Next-Gen Software & Digital Innovation Lab
          </div>

          <h1 className="hero-title">
            Transforming Ideas Into <br />
            <span className="gradient-text">High-Impact Tech Products</span>
          </h1>

          <p className="hero-subtitle">
            Aquila Labs is a dedicated modern software studio. We design, engineer,
            and scale high-performance web platforms, mobile apps, and custom digital solutions.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn-primary">
              View Capabilities
            </a>
            <a href="#connect" className="btn-secondary">
              Start A Project
            </a>
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <h4>100%</h4>
              <p>Modern Tech Stack</p>
            </div>
            <div className="stat-item">
              <h4>Rapid</h4>
              <p>Development Velocity</p>
            </div>
            <div className="stat-item">
              <h4>24/7</h4>
              <p>Client Partnership</p>
            </div>
            <div className="stat-item">
              <h4>Global</h4>
              <p>Standard Quality</p>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">What We Specialize In</h2>
            <p className="section-desc">
              Comprehensive end-to-end technical engineering built for modern enterprises.
            </p>
          </div>

          <div className="grid-3">
            {services.map((item, index) => (
              <div key={index} className="card">
                <div className="card-icon">
                  <Logo size={22} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Workflow</span>
            <h2 className="section-title">How We Build</h2>
            <p className="section-desc">
              A transparent, agile roadmap turning vision into functional reality.
            </p>
          </div>

          <div className="grid-3">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-num">{step.num}</div>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Ecosystem</span>
            <h2 className="section-title">Modern Stack & Tooling</h2>
            <p className="section-desc">
              We leverage reliable and industry-standard technologies to ensure speed and longevity.
            </p>
          </div>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="section-title">Ready to build something iconic?</h2>
            <p className="section-desc">
              Connect with Aquila Labs on our active community channels or reach out directly.
            </p>

            <div className="social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-card"
              >
                Instagram Page ↗
              </a>
              <a
                href="mailto:contact@aquilalabs.com"
                className="social-card"
              >
                Email Our Team ✉
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Aquila Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
