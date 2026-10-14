import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [showScroll, setShowScroll] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const reviewsTrackRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  const trustTrackRef = useRef(null)
  const isTrustDraggingRef = useRef(false)
  const startTrustXRef = useRef(0)
  const scrollTrustLeftRef = useRef(0)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 40)
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

  // Interactive 3D Cursor Tilt Handlers
  const handleCardMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Max rotation in degrees
    const rotateX = ((centerY - y) / centerY) * 12
    const rotateY = ((x - centerX) / centerX) * 12

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`)
  }

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)'
    card.style.setProperty('--mouse-x', '50%')
    card.style.setProperty('--mouse-y', '50%')
  }

  const services = [
    {
      num: '01',
      tag: 'Web Architecture',
      title: 'Full-Stack Web Apps',
      desc: 'High-performance React, Next.js, and distributed backends architected for millisecond response times and rapid global scale.',
      features: ['Server-Side Rendering', 'Micro-Frontends', 'Edge Deployment'],
      accent: 'linear-gradient(135deg, #38bdf8, #818cf8)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad-web" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          <rect x="2" y="3" width="20" height="14" rx="3" stroke="url(#grad-web)" strokeWidth="1.8" fill="rgba(56, 189, 248, 0.12)" />
          <path d="M2 7h20" stroke="url(#grad-web)" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="5" cy="5" r="1" fill="#38bdf8" />
          <circle cx="8" cy="5" r="1" fill="#818cf8" />
          <path d="M7 11.5l2 2-2 2M11 15.5h4" stroke="url(#grad-web)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 21h8M12 17v4" stroke="url(#grad-web)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      num: '02',
      tag: 'Native & Hybrid',
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android apps with 120fps fluid animations, offline-first sync, and native module bridges.',
      features: ['Flutter & React Native', 'Offline-First DB', 'Smooth Gestures'],
      accent: 'linear-gradient(135deg, #818cf8, #c084fc)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad-mob" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <rect x="5" y="2" width="14" height="20" rx="3.5" stroke="url(#grad-mob)" strokeWidth="1.8" fill="rgba(129, 140, 248, 0.12)" />
          <path d="M9.5 5h5" stroke="url(#grad-mob)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
          <circle cx="12" cy="18" r="1.2" fill="#c084fc" />
          <path d="M8 9h8M8 12h5" stroke="url(#grad-mob)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
      ),
    },
    {
      num: '03',
      tag: 'Product Strategy',
      title: 'UI / UX Product Design',
      desc: 'World-class user interfaces, production-ready Figma design systems, and seamless user experiences tuned for conversion.',
      features: ['Design Systems', 'Micro-Interactions', 'Interactive Prototypes'],
      accent: 'linear-gradient(135deg, #38bdf8, #34d399)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad-design" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="8" height="8" rx="2" stroke="url(#grad-design)" strokeWidth="1.8" fill="rgba(56, 189, 248, 0.15)" />
          <rect x="13" y="3" width="8" height="8" rx="2" stroke="url(#grad-design)" strokeWidth="1.8" strokeDasharray="2 2" />
          <rect x="13" y="13" width="8" height="8" rx="2" stroke="url(#grad-design)" strokeWidth="1.8" fill="rgba(52, 211, 153, 0.15)" />
          <circle cx="7" cy="17" r="4" stroke="url(#grad-design)" strokeWidth="1.8" fill="rgba(56, 189, 248, 0.1)" />
        </svg>
      ),
    },
    {
      num: '04',
      tag: 'Backend & DevOps',
      title: 'Cloud & API Integration',
      desc: 'Resilient cloud infrastructure, GraphQL & REST APIs, event-driven pipelines, and automated continuous delivery.',
      features: ['AWS & Google Cloud', 'CI/CD Pipelines', 'Zero-Downtime Releases'],
      accent: 'linear-gradient(135deg, #38bdf8, #6366f1)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad-cloud" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A7 7 0 0 1 19.5 13a4.5 4.5 0 0 1-1.5 8.75H6.5z" stroke="url(#grad-cloud)" strokeWidth="1.8" fill="rgba(56, 189, 248, 0.12)" />
          <path d="M12 11v6M9.5 14.5l2.5 2.5 2.5-2.5" stroke="url(#grad-cloud)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '05',
      tag: 'Intelligence',
      title: 'AI & Smart Automation',
      desc: 'Embedding custom LLM agents, semantic vector search, autonomous workflows, and real-time inference into your product.',
      features: ['Autonomous Agents', 'Vector Databases', 'Prompt Engineering'],
      accent: 'linear-gradient(135deg, #06b6d4, #a855f7)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad-ai" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
          <path d="M12 2l2.4 5.6L20 10l-4.5 4.2 1.2 6.1-4.7-3-4.7 3 1.2-6.1L4 10l5.6-2.4L12 2z" stroke="url(#grad-ai)" strokeWidth="1.8" fill="rgba(6, 182, 212, 0.12)" strokeLinejoin="round" />
          <circle cx="12" cy="11.5" r="2" fill="#06b6d4" />
          <circle cx="12" cy="11.5" r="4.5" stroke="url(#grad-ai)" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      num: '06',
      tag: 'Visual Identity',
      title: 'Branding & Design Identity',
      desc: 'Memorable digital brand identity, iconic logo systems, typography palettes, and coherent visual guidelines for startups.',
      features: ['Logo Systems', 'Brand Guidelines', 'Marketing Collateral'],
      accent: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad-brand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#grad-brand)" strokeWidth="1.8" fill="rgba(236, 72, 153, 0.12)" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="url(#grad-brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
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

  const techCategories = [
    {
      category: 'Frontend & Platforms',
      badge: 'Client Systems',
      desc: 'Blazing fast, 60fps responsive interfaces and native cross-platform engines.',
      icon: '⚡',
      accent: 'linear-gradient(135deg, #38bdf8, #818cf8)',
      stack: [
        { name: 'React 19', role: 'Component Core' },
        { name: 'Next.js 15', role: 'Full-Stack SSR' },
        { name: 'TypeScript', role: 'Type Safety' },
        { name: 'Flutter', role: 'iOS & Android' },
        { name: 'Tailwind CSS', role: 'Design Engine' },
      ],
    },
    {
      category: 'Distributed Backend',
      badge: 'Core Services',
      desc: 'High-throughput microservices, real-time WebSockets, and low-latency APIs.',
      icon: '🛡️',
      accent: 'linear-gradient(135deg, #818cf8, #c084fc)',
      stack: [
        { name: 'Node.js', role: 'Async Runtimes' },
        { name: 'Python', role: 'Microservices & AI' },
        { name: 'Go (Golang)', role: 'Low Latency Services' },
        { name: 'PostgreSQL', role: 'Relational DB' },
        { name: 'Redis', role: 'Sub-millisecond Cache' },
      ],
    },
    {
      category: 'Cloud, DevOps & Infra',
      badge: 'Zero-Downtime',
      desc: 'Production-ready orchestration, resilient CI/CD pipelines, and multi-region deployment.',
      icon: '☁️',
      accent: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      stack: [
        { name: 'AWS & GCP', role: 'Cloud Infrastructure' },
        { name: 'Docker', role: 'Containerization' },
        { name: 'Kubernetes', role: 'Orchestration' },
        { name: 'GitHub Actions', role: 'Automated CI/CD' },
        { name: 'Terraform', role: 'Infra as Code' },
      ],
    },
    {
      category: 'AI, Models & Vector DBs',
      badge: 'Intelligence',
      desc: 'Autonomous LLM agents, high-dimensional vector search, and fine-tuned pipelines.',
      icon: '🧠',
      accent: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      stack: [
        { name: 'OpenAI / Claude', role: 'Foundation Models' },
        { name: 'LangChain / LlamaIndex', role: 'Agentic Workflows' },
        { name: 'Pinecone / Qdrant', role: 'Vector Embeddings' },
        { name: 'PyTorch', role: 'Model Inference' },
        { name: 'FastAPI', role: 'Model Serving' },
      ],
    },
  ]

  const trustedCompanies = [
    'TechNova Systems',
    'Apex Financial',
    'Vanguard Health',
    'HyperScale AI',
    'OmniCloud Media',
    'Aether Robotics',
  ]

  const featuredProjects = [
    {
      tag: 'AI Platform',
      icon: '⚡',
      title: 'Enterprise LLM Workflow Engine',
      desc: 'High-throughput AI pipeline with millisecond semantic retrieval, vector memory indexing, and autonomous model orchestration.',
      badge: 'Case Study Soon',
      metric: '10x Faster Query Latency',
      tech: ['React', 'Python', 'FastAPI', 'PgVector', 'Tailwind'],
      glow: 'rgba(56, 189, 248, 0.18)',
    },
    {
      tag: 'FinTech App',
      icon: '💎',
      title: 'Decentralized Asset Dashboard',
      desc: 'Institutional analytics terminal delivering real-time block streaming, algorithmic portfolio rebalancing, and automated compliance.',
      badge: 'Case Study Soon',
      metric: '$40M+ Volume Processed',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
      glow: 'rgba(129, 140, 248, 0.18)',
    },
    {
      tag: 'Mobile Suite',
      icon: '🩺',
      title: 'Health & Telemedicine Platform',
      desc: 'HIPAA-compliant native mobile ecosystem with sub-second video telemetry, secure clinical records, and remote sensor integration.',
      badge: 'Case Study Soon',
      metric: '99.99% Uptime SLA',
      tech: ['React Native', 'GraphQL', 'AWS', 'WebRTC', 'Redis'],
      glow: 'rgba(52, 211, 153, 0.18)',
    },
  ]

  const testimonials = [
    {
      quote: 'Aquila Labs delivered our mission-critical SaaS ahead of schedule. Their attention to performance, modern design, and architectural scalability is second to none.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'Apex Financial',
      rating: 5,
    },
    {
      quote: 'Working with Aquila Labs felt like having an elite Silicon Valley engineering wing inside our company. Our mobile app downloads grew 400% after their redesign.',
      author: 'Sophia Chen',
      role: 'Head of Product',
      company: 'OmniCloud Media',
      rating: 5,
    },
    {
      quote: 'Exceptional engineering discipline. They took our complex AI workflow and turned it into an intuitive, lightning-fast platform that our enterprise clients love.',
      author: 'David Sterling',
      role: 'Founder & CEO',
      company: 'HyperScale AI',
      rating: 5,
    },
    {
      quote: 'Flawless execution on our cloud infrastructure and real-time dashboard. The team communicates with absolute clarity and precision.',
      author: 'Elena Rostova',
      role: 'VP of Engineering',
      company: 'TechNova Systems',
      rating: 5,
    },
  ]

  const team = [
    {
      badge: 'Founder / Architecture',
      name: 'Coming Soon',
      role: 'System & Distributed Engineering',
      desc: 'Specializing in high-concurrency systems, low-latency microservices, and enterprise cloud architecture.',
      skills: ['Cloud Architecture', 'Distributed Systems', 'Go / Node'],
      avatarIcon: '⚡',
    },
    {
      badge: 'Frontend Engineering',
      name: 'Coming Soon',
      role: 'Frontend & UI Performance',
      desc: 'Specializing in cutting-edge Next.js interfaces, 60fps animations, WebGL, and design systems.',
      skills: ['Next.js / React', 'TypeScript', 'Design Systems'],
      avatarIcon: '🎨',
    },
    {
      badge: 'Native Platforms',
      name: 'Coming Soon',
      role: 'iOS & Android Systems',
      desc: 'Pioneering cross-platform architectures with native-grade performance and real-time offline sync.',
      skills: ['Flutter', 'React Native', 'Mobile Security'],
      avatarIcon: '📱',
    },
    {
      badge: 'AI & Data Engineering',
      name: 'Coming Soon',
      role: 'Machine Learning & Agents',
      desc: 'Developing specialized LLM agent systems, semantic retrieval engines, and high-volume data pipelines.',
      skills: ['LLM Orchestration', 'Vector DBs', 'Python / PyTorch'],
      avatarIcon: '🧠',
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
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#team">Team</a>
              <a href="#tech">Stack</a>
              <a href="#testimonials">Reviews</a>
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

        {/* Infinite Trusted By Marquee (Draggable & Pauses on Hover) */}
        <div className="trust-marquee-wrapper">
          <p className="trust-marquee-label">Trusted by high-growth founders and forward-thinking enterprises</p>
          <div
            className="trust-marquee"
            ref={trustTrackRef}
            onMouseDown={(e) => {
              isTrustDraggingRef.current = true
              startTrustXRef.current = e.pageX - trustTrackRef.current.offsetLeft
              scrollTrustLeftRef.current = trustTrackRef.current.scrollLeft
              trustTrackRef.current.classList.add('is-dragging')
            }}
            onMouseLeave={() => {
              isTrustDraggingRef.current = false
              if (trustTrackRef.current) {
                trustTrackRef.current.classList.remove('is-dragging')
              }
            }}
            onMouseUp={() => {
              isTrustDraggingRef.current = false
              if (trustTrackRef.current) {
                trustTrackRef.current.classList.remove('is-dragging')
              }
            }}
            onMouseMove={(e) => {
              if (!isTrustDraggingRef.current) return
              e.preventDefault()
              const x = e.pageX - trustTrackRef.current.offsetLeft
              const walk = (x - startTrustXRef.current) * 1.5
              trustTrackRef.current.scrollLeft = scrollTrustLeftRef.current - walk
            }}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                trustTrackRef.current.scrollLeft += e.deltaY * 0.8
              }
            }}
          >
            <div className="trust-marquee-track">
              {trustedCompanies.concat(trustedCompanies).concat(trustedCompanies).map((company, index) => (
                <div key={index} className="trust-company-pill">
                  <span className="trust-bullet">✦</span>
                  <span>{company}</span>
                </div>
              ))}
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
              <div
                key={index}
                className="card service-card-premium interactive-3d-card"
                style={{ '--service-accent': item.accent }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="service-card-top">
                  <span className="service-tag-pill">{item.tag}</span>
                  <span className="service-number-badge">{item.num}</span>
                </div>

                <div className="service-card-header">
                  <div className="service-logo-box">
                    {item.icon}
                  </div>
                  <h3 className="service-title-text">{item.title}</h3>
                </div>

                <p className="service-desc-text">{item.desc}</p>

                {/* Sub-capabilities / Highlights */}
                <div className="service-features-list">
                  {item.features.map((feat, fIdx) => (
                    <span key={fIdx} className="service-feature-item">
                      <span className="feature-check">✦</span>
                      <span>{feat}</span>
                    </span>
                  ))}
                </div>

                <div className="service-card-bottom">
                  <span className="service-explore-link">
                    Explore Capability <span className="service-arrow">→</span>
                  </span>
                </div>
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
              <div
                key={index}
                className="process-step interactive-3d-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
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
              <div
                key={index}
                className="card team-card-premium interactive-3d-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="team-card-top-bar">
                  <span className="team-spec-pill">{member.badge}</span>
                </div>

                <div className="team-avatar-premium">
                  <span className="team-avatar-emoji">{member.avatarIcon}</span>
                  <div className="avatar-status-dot" title="Active Core Leadership"></div>
                </div>

                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-desc">{member.desc}</p>

                <div className="team-skills-chips">
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="team-skill-chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="section tech-ecosystem-section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Technology Ecosystem</span>
            <h2 className="section-title">Modern Stack & Tooling</h2>
            <p className="section-desc">
              Battle-tested frameworks, cloud infrastructure, and AI toolkits engineered for extreme speed, scalability, and zero downtime.
            </p>
          </div>

          <div className="grid-2 tech-clusters-grid">
            {techCategories.map((cat, index) => (
              <div
                key={index}
                className="card tech-cluster-card interactive-3d-card"
                style={{ '--cluster-accent': cat.accent }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="cluster-header">
                  <div className="cluster-icon-box">
                    <span>{cat.icon}</span>
                  </div>
                  <div className="cluster-title-wrap">
                    <span className="cluster-badge">{cat.badge}</span>
                    <h3 className="cluster-title">{cat.category}</h3>
                  </div>
                </div>

                <p className="cluster-desc">{cat.desc}</p>

                <div className="cluster-tools-grid">
                  {cat.stack.map((item, sIdx) => (
                    <div key={sIdx} className="cluster-tool-item">
                      <span className="tool-dot">✦</span>
                      <div className="tool-text-group">
                        <span className="tool-name">{item.name}</span>
                        <span className="tool-role">{item.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects / Work Showcase */}
      <section id="work" className="section work-section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Selected Case Studies</h2>
            <p className="section-desc">
              A glimpse into the digital systems, web apps, and enterprise platforms engineered by our team.
            </p>
          </div>

          <div className="grid-3">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="card project-card-premium interactive-3d-card"
                style={{ '--project-glow': project.glow }}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="project-glow-layer"></div>

                <div className="project-badge-bar">
                  <div className="project-tag-group">
                    <span className="project-icon-box">{project.icon}</span>
                    <span className="project-category-tag">{project.tag}</span>
                  </div>
                  <span className="project-status-badge">
                    <span className="pulse-dot"></span>
                    {project.badge}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                {/* Key Engineering Impact Metric */}
                <div className="project-metric-pill">
                  <span className="metric-icon">📈</span>
                  <span className="metric-text">{project.metric}</span>
                </div>

                <div className="project-tech-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="project-tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span className="project-link-hint">
                    Explore Architecture & Specs <span className="arrow-animated">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Sliding Reviews Row (Pauses on Hover) */}
      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Client Voices</span>
            <h2 className="section-title">What Founders Say About Us</h2>
            <p className="section-desc">
              Verified feedback from enterprise clients and high-growth partners.
            </p>
          </div>
        </div>

        <div
          className="reviews-marquee-outer"
          ref={reviewsTrackRef}
          onMouseDown={(e) => {
            isDraggingRef.current = true
            startXRef.current = e.pageX - reviewsTrackRef.current.offsetLeft
            scrollLeftRef.current = reviewsTrackRef.current.scrollLeft
            reviewsTrackRef.current.classList.add('is-dragging')
          }}
          onMouseLeave={() => {
            isDraggingRef.current = false
            if (reviewsTrackRef.current) {
              reviewsTrackRef.current.classList.remove('is-dragging')
            }
          }}
          onMouseUp={() => {
            isDraggingRef.current = false
            if (reviewsTrackRef.current) {
              reviewsTrackRef.current.classList.remove('is-dragging')
            }
          }}
          onMouseMove={(e) => {
            if (!isDraggingRef.current) return
            e.preventDefault()
            const x = e.pageX - reviewsTrackRef.current.offsetLeft
            const walk = (x - startXRef.current) * 1.5
            reviewsTrackRef.current.scrollLeft = scrollLeftRef.current - walk
          }}
          onWheel={(e) => {
            if (e.deltaY !== 0) {
              reviewsTrackRef.current.scrollLeft += e.deltaY * 0.8
            }
          }}
        >
          <div className="reviews-marquee-track">
            {testimonials.concat(testimonials).concat(testimonials).map((item, index) => (
              <div key={index} className="reviews-marquee-card card">
                <div className="review-card-header">
                  <div className="testimonial-rating">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="review-verified-tag">✓ Verified Partner</span>
                </div>

                <p className="slider-review-quote">"{item.quote}"</p>

                <div className="testimonial-author-box">
                  <div className="testimonial-avatar">
                    {item.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="testimonial-name">{item.author}</h4>
                    <p className="testimonial-role">
                      {item.role} · <span className="highlight-text">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Premium CTA Section */}
      <section id="connect" className="section connect-section">
        <div className="container">
          <div className="cta-banner-premium">
            <div className="cta-glow-background"></div>

            <div className="cta-header-pill">
              <span className="pulse-dot"></span>
              <span>Available for New Projects</span>
            </div>

            <h2 className="cta-headline">
              Ready to build <span className="gradient-text">something iconic?</span>
            </h2>
            <p className="cta-subtext">
              Whether you are architecting a new software platform from scratch or scaling an existing system, Aquila Labs delivers elite technical execution.
            </p>

            <div className="cta-channels-grid">
              <a
                href="mailto:contact@aquilalabs.com"
                className="cta-channel-card primary-channel interactive-3d-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="channel-icon-circle">
                  ✉️
                </div>
                <div className="channel-info">
                  <span className="channel-type">Direct Inquiry</span>
                  <span className="channel-title">contact@aquilalabs.com</span>
                  <span className="channel-badge">Average response: &lt; 2 hrs</span>
                </div>
                <span className="channel-arrow">↗</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="cta-channel-card interactive-3d-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="channel-icon-circle">
                  💼
                </div>
                <div className="channel-info">
                  <span className="channel-type">Professional Network</span>
                  <span className="channel-title">LinkedIn Profile</span>
                  <span className="channel-hint">Connect with Founders</span>
                </div>
                <span className="channel-arrow">↗</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="cta-channel-card interactive-3d-card"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="channel-icon-circle">
                  📸
                </div>
                <div className="channel-info">
                  <span className="channel-type">Studio Culture</span>
                  <span className="channel-title">Instagram Page</span>
                  <span className="channel-hint">Behind the scenes</span>
                </div>
                <span className="channel-arrow">↗</span>
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
