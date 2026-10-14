import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [showScroll, setShowScroll] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50)
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

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

  const team = [
    {
      initials: '01',
      name: 'Coming Soon',
      role: 'Core Team',
      desc: 'Architecting high-scale digital solutions and strategic technology roadmap.',
    },
    {
      initials: '02',
      name: 'Coming Soon',
      role: 'Core Team',
      desc: 'Engineering performant full-stack systems and cloud infrastructure.',
    },
    {
      initials: '03',
      name: 'Coming Soon',
      role: 'Core Team',
      desc: 'Leading intuitive user experience, UI design systems, and visual identity.',
    },
    {
      initials: '04',
      name: 'Coming Soon',
      role: 'Core Team',
      desc: 'Driving product growth, technical delivery, and client partnerships.',
    },
  ]

  return (
    <div id="top">
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-content">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState(null, '', '/')
              scrollToTop()
            }}
            className="brand"
            title="Aquila Labs - Home"
          >
            <div className="brand-logo-glow">
              <Logo size={40} />
            </div>
            <span className="brand-text">
              Aquila <span>Labs</span>
            </span>
          </a>

          <div className="nav-right">
            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#team">Team</a>
              <a href="#tech">Stack</a>
              <a href="#connect">Connect</a>
            </div>

            <a href="#connect" className="btn-nav">
              Contact Team
            </a>

            <button
              onClick={toggleTheme}
              className="theme-switch-btn"
              type="button"
              aria-label="Toggle visual theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-center">
          <h1 className="hero-title">
            Engineering Digital Products <br />
            <span className="gradient-text">That Define The Future</span>
          </h1>

          <p className="hero-subtitle">
            Aquila Labs is an elite software innovation studio. We architect, design,
            and scale modern web applications, mobile platforms, and high-performance custom digital systems.
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn-primary">
              Explore Our Work
            </a>
            <a href="#connect" className="btn-secondary">
              Let's Talk
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
                  <Logo size={24} />
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

      <section id="team" className="section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">People Behind Aquila Labs</h2>
            <p className="section-desc">
              Passionate technologists and designers dedicated to engineering exceptional software.
            </p>
          </div>

          <div className="grid-4">
            {team.map((member, index) => (
              <div key={index} className="card">
                <div className="team-avatar">{member.initials}</div>
                <span className="team-role">{member.role}</span>
                <h3 className="card-title">{member.name}</h3>
                <p className="card-desc">{member.desc}</p>
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
          <div className="footer-top">
            <div className="footer-brand">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  window.history.pushState(null, '', '/')
                  scrollToTop()
                }}
                className="brand"
                title="Aquila Labs - Home"
              >
                <div className="brand-logo-glow">
                  <Logo size={32} />
                </div>
                <span className="brand-text">
                  Aquila <span>Labs</span>
                </span>
              </a>
              <p>
                A modern digital innovation studio delivering high-performance web,
                mobile, and custom software systems globally.
              </p>
            </div>

            <div className="footer-col">
              <h5>Navigation</h5>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#tech">Tech Stack</a></li>
                <li><a href="#connect">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Applications</a></li>
                <li><a href="#services">UI / UX Design</a></li>
                <li><a href="#services">Cloud & Automation</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Social Channels</h5>
              <ul>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="mailto:contact@aquilalabs.com">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Aquila Labs. All rights reserved.</p>
            <p>Engineered for Speed & Scalability</p>
          </div>
        </div>
      </footer>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  )
}
