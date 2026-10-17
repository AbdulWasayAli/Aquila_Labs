import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Toaster, toast } from 'sonner'
import Logo from './Logo'
import ibrahamPhoto from './assets/images/ibraham-daniyal.jpeg'
import wasayPhoto from './assets/images/abdul-wasay.jpg'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: 'Cloud & platforms', detail: 'Secure foundations, resilient APIs, and cloud infrastructure built to support your next stage.', stack: 'Cloud architecture · APIs · DevOps' },
  { title: 'Product design', detail: 'Research-led UX, distinctive visual systems, and accessible interfaces people enjoy using.', stack: 'Research · UX/UI · Design systems' },
  { title: 'AI & automation', detail: 'Practical AI features and intelligent workflows that remove friction and create room to grow.', stack: 'Applied AI · Agents · Workflow automation' },
  { title: 'Business management software', detail: 'Connected systems that help teams manage operations, customers, inventory, and day-to-day work.', stack: 'CRM · ERP · Operations · Integrations' },
  { title: 'Industry-level software', detail: 'Reliable, scalable software designed around the demanding needs of your industry and its users.', stack: 'Secure platforms · Data systems · Scale' },
  { title: 'Custom software', detail: 'Purpose-built applications shaped around your workflows when off-the-shelf tools are not enough.', stack: 'Web · Mobile · Integrations · Automation' },
]
const team = [
  { initials: 'AK', name: 'Abdul Kabeer', role: 'Mobile Application Developer' },
  { initials: 'ID', name: 'Ibraham Daniyal', role: 'Full-Stack & Mobile App Developer', photo: ibrahamPhoto },
  { initials: 'AW', name: 'Abdul Wasay', role: 'Full-Stack & AI Application Developer', photo: wasayPhoto },
  { initials: 'AN', name: 'Anas', role: 'Mobile Application Developer' },
]
const testimonials = [
  { quote: '“The best software partnerships start with listening. We take time to understand the people and work behind every product.”', byline: 'Aquila Labs team', context: 'OUR PRINCIPLE' },
  { quote: '“Good technology should make the complicated feel clear, and leave people feeling more capable.”', byline: 'Aquila Labs team', context: 'OUR PRINCIPLE' },
  { quote: '“A thoughtful first version is the beginning of a product—not the end of the conversation.”', byline: 'Aquila Labs team', context: 'OUR PRINCIPLE' },
]
const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/theaquilalabs/', handle: '@theaquilalabs' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/theaquilalabs', handle: 'Aquila Labs' },
]
const projects = [
  { number: '01', kind: 'AI · OPERATIONS', title: 'A clearer way to work with AI.', detail: 'An intelligent operations workspace that turns fragmented tasks into a focused, human-friendly workflow.', result: 'One calm workspace. A faster team.', visual: 'ai' },
  { number: '02', kind: 'FINTECH · DATA', title: 'Complex financial data, made clear.', detail: 'A decision-making interface that brings live financial signals into focus for the people who need them.', result: 'Better visibility. Confident decisions.', visual: 'finance' },
  { number: '03', kind: 'HEALTH · CARE', title: 'More connected care experiences.', detail: 'A considered digital front door that helps patients and care teams move through each step with confidence.', result: 'A more human digital journey.', visual: 'care' },
]
const steps = [
  ['01', 'Understand', 'We start with your people, the real challenge, and the outcome that matters.'],
  ['02', 'Shape', 'A clear plan, a useful prototype, and shared confidence in what we are making.'],
  ['03', 'Build', 'Thoughtful engineering, fast feedback, and visible progress at every step.'],
  ['04', 'Grow', 'A confident launch, a dependable team, and room for the product to evolve.'],
]
const stacks = [
  ['Product', 'React', 'Next.js', 'TypeScript', 'Flutter'],
  ['Platform', 'Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
  ['Infrastructure', 'AWS', 'Docker', 'CI/CD', 'Kubernetes'],
]

function Arrow({ diagonal = false }) {
  return <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M7 17 17 7M7 7h10v10' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ProjectVisual({ type }) {
  if (type === 'ai') return <div className="product-window ai-window"><div className="window-top"><span className="window-brand"><i /> orbit</span><span className="window-avatar">A</span></div><div className="window-body"><aside className="window-rail"><i /><i /><i /><i /></aside><div className="dashboard"><span className="ui-eyebrow">YOUR WORKSPACE</span><div className="ui-title">Good morning, Alex</div><div className="ui-muted">Here’s your team’s focus for today.</div><div className="task-panel"><div className="task-icon">✳</div><div><b>Weekly product brief</b><small>Ready to review · Updated just now</small></div><span className="task-check">✓</span></div><div className="mini-cards"><div><span>In progress</span><b>08</b><i><em /></i></div><div><span>Completed</span><b>24</b><i><em /></i></div></div></div></div></div>
  if (type === 'finance') return <div className="product-window finance-window"><div className="finance-head"><span>Portfolio overview <b>⌄</b></span><small>Last 30 days&nbsp; ↗</small></div><div className="finance-total">$2,840,520 <span>+12.8%</span></div><div className="chart-wrap"><div className="chart-labels"><i>$3.0m</i><i>$2.5m</i><i>$2.0m</i></div><svg className="chart" viewBox="0 0 500 160" preserveAspectRatio="none" aria-label="Rising portfolio trend"><defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c5f165" stopOpacity=".28"/><stop offset="1" stopColor="#c5f165" stopOpacity="0"/></linearGradient></defs><path d="M0 130 C25 120,35 134,58 107 S92 117,112 91 S150 99,172 68 S202 96,226 65 S258 75,278 53 S310 69,331 41 S365 62,387 26 S425 48,442 29 S476 37,500 6 V160 H0Z" fill="url(#chart-fill)"/><path d="M0 130 C25 120,35 134,58 107 S92 117,112 91 S150 99,172 68 S202 96,226 65 S258 75,278 53 S310 69,331 41 S365 62,387 26 S425 48,442 29 S476 37,500 6" fill="none" stroke="#9cc84c" strokeWidth="2.5" vectorEffect="non-scaling-stroke"/></svg></div><div className="finance-foot"><span>01 MAY</span><span>10 MAY</span><span>20 MAY</span><span>30 MAY</span></div></div>
  return <div className="product-window care-window"><div className="care-side"><div className="care-logo">care<span>+</span></div><div className="care-nav active">⌂ &nbsp;Overview</div><div className="care-nav">▣ &nbsp;Appointments</div><div className="care-nav">♡ &nbsp;My health</div><div className="care-user"><i>JM</i><span>Jordan Miller<small>Patient account</small></span></div></div><div className="care-main"><div className="care-greeting">MONDAY, MAY 27</div><div className="care-title">Hello, Jordan <span>✳</span></div><div className="care-banner"><div><small>YOUR NEXT APPOINTMENT</small><b>Dr. Sarah Chen</b><span>Tomorrow · 10:30 AM · Video visit</span></div><i>↗</i></div><div className="care-lower"><div><small>CARE PLAN</small><b>Looking good</b><span>3 of 4 goals this week</span><div className="progress-track"><i /></div></div><div className="care-doctor"><i>SC</i><small>YOUR CARE TEAM</small><b>Sarah Chen, MD</b></div></div></div></div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-copy > *', { y: 24, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out', delay: .12 })
      gsap.utils.toArray('.reveal').forEach((element) => gsap.from(element, { y: 28, opacity: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } }))
      gsap.from('.project-row', { y: 30, opacity: 0, duration: .7, stagger: .15, ease: 'power3.out', scrollTrigger: { trigger: '.projects-list', start: 'top 82%', once: true } })
      gsap.from('.team-card', { y: 28, opacity: 0, duration: .7, stagger: .13, ease: 'power3.out', scrollTrigger: { trigger: '.team-grid', start: 'top 84%', once: true } })
      gsap.from('.value-card', { y: 22, opacity: 0, duration: .6, stagger: .12, ease: 'power2.out', scrollTrigger: { trigger: '.values-grid', start: 'top 86%', once: true } })
      gsap.from('.stack-group', { x: 20, opacity: 0, duration: .55, stagger: .1, ease: 'power2.out', scrollTrigger: { trigger: '.stack-groups', start: 'top 88%', once: true } })
      gsap.from('.product-card', { y: 24, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.products-layout', start: 'top 82%', once: true } })
      gsap.from('.contact-option', { y: 12, opacity: 0, duration: .45, stagger: .1, ease: 'power2.out', scrollTrigger: { trigger: '.contact-options', start: 'top 90%', once: true } })
      gsap.to('.product-symbol > span', { rotation: 45, duration: 18, repeat: -1, ease: 'none' })
      gsap.to('.hero-orbit', { rotation: 35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
    })
    return () => { media.revert(); window.removeEventListener('scroll', updateHeader) }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const handleEnquiry = async (event) => {
    event.preventDefault()
    setFormState({ status: 'sending', message: 'Sending your message securely…' })
    const form = event.currentTarget
    const data = new FormData(form)
    const payload = Object.fromEntries(data.entries())
    payload._subject = `Project enquiry from ${payload.name}`
    payload._replyto = payload.email
    delete payload.email
    try {
      const response = await fetch('https://formsubmit.co/ajax/aquilalabs4@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok || result.success === 'false' || result.success === false) throw new Error(result.message || 'We could not send your message right now.')
      setFormState({ status: 'success', message: 'Your enquiry has been received. Aquila will answer your email within 24 hours.' })
      toast.success('Aquila will answer your email within 24 hours', { description: 'Your enquiry has been received. Thanks for getting in touch.' })
      form.reset()
    } catch (error) {
      const message = `${error.message || 'Something went wrong.'} You can email us directly at aquilalabs4@gmail.com.`
      setFormState({ status: 'error', message })
      toast.error('Your message could not be sent', { description: 'Please try again or email aquilalabs4@gmail.com directly.' })
    }
  }
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aquilalabs4@gmail.com')
      setEmailCopied(true)
      toast.success('Email address copied')
      window.setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      toast.error('Could not copy the address', { description: 'Please email aquilalabs4@gmail.com directly.' })
      window.location.href = 'mailto:aquilalabs4@gmail.com'
    }
  }
  return <div className="site-shell">
    <Toaster position="bottom-right" theme="light" duration={5200} closeButton={false} toastOptions={{ className: 'aquila-toast' }} />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-brand" href="#home" aria-label="Aquila Labs home" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          <Logo size={36} />
          <span style={{ fontSize: '18px', letterSpacing: '-0.5px' }}>Aquila Labs</span>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="primary-navigation" aria-label="Main navigation">
          {[['Services', 'services'], ['Products', 'products'], ['Team', 'team'], ['Work', 'work'], ['About', 'about']].map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a className="mobile-nav-cta" href="#contact" onClick={closeMenu}>Start a project <Arrow diagonal /></a>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
        <button className={`nav-menu-btn${menuOpen ? ' active' : ''}`} type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="home">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL PRODUCT STUDIO</div>
            <h1>We make<br />technology feel<br /><span>more human.</span></h1>
            <p>We partner with ambitious teams to design and build thoughtful digital products—from the first sketch to what comes next.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore our work <Arrow /></a><a className="text-link" href="#services">What we do <Arrow /></a></div>
            <div className="hero-footnote"><span>STRATEGY&nbsp; · &nbsp;DESIGN&nbsp; · &nbsp;ENGINEERING</span><span>BUILT WITH CARE, EVERYWHERE.</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of connected digital product layers" role="img">
            <div className="art-wash" /><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="art-label label-one">THOUGHTFUL BY DESIGN <span>↗</span></div><div className="art-label label-two">ENGINEERED TO SCALE <span>↗</span></div>
            <div className="art-core"><div className="core-mark"><img src={logo} alt="" /></div><span>Human insight<br />meets technology.</span><i>✳</i></div>
            <div className="art-node node-one">✳</div><div className="art-node node-two">↗</div><div className="art-node node-three">◌</div>
            <span className="art-index">AQL / 001</span>
          </div>
        </div>
        <div className="container hero-bottom"><span>GOOD WORK STARTS WITH GOOD QUESTIONS.</span><a href="#services" aria-label="Scroll to services">↓</a><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="intro-strip reveal" id="about"><div className="container intro-layout"><span className="section-kicker">AQUILA LABS <span>—</span> WHO WE ARE</span><p>Technology moves fast.<br /><span>What matters is where it takes people.</span></p><div className="intro-aside">We bring clear thinking and careful craft to complex digital challenges, helping teams move forward with confidence.</div></div></section>

      <section className="section services-section" id="services"><div className="container"><div className="section-heading reveal"><div><span className="section-kicker">01 / CAPABILITIES</span><h2>Good thinking.<br /><span>Beautifully built.</span></h2></div><p>From the first big question to the details people notice every day, we bring the right minds together to make it real.</p></div>
        <div className="services-layout"><div className="services-list" role="tablist" aria-label="Our capabilities">{services.map((service, index) => <button key={service.title} type="button" role="tab" aria-selected={activeService === index} aria-controls="service-panel" id={`service-tab-${index}`} className={`service-tab${activeService === index ? ' selected' : ''}`} onClick={() => setActiveService(index)}><span>0{index + 1}</span><strong>{service.title}</strong><Arrow diagonal /></button>)}</div>
          <div className="service-panel" role="tabpanel" id="service-panel" aria-labelledby={`service-tab-${activeService}`} key={activeService}><span className="panel-asterisk">✳</span><span className="section-kicker">FROM FIRST PRINCIPLES</span><h3>{services[activeService].title}</h3><p>{services[activeService].detail}</p><span className="panel-stack">{services[activeService].stack}</span><a href="#contact" className="panel-link">Let’s talk about it <Arrow /></a></div>
        </div>
      </div></section>

      <section className="products-section" id="products"><div className="container products-layout"><div className="products-copy reveal"><span className="section-kicker">02 / BUILT BY US</span><h2>We build our<br /><span>own ideas, too.</span></h2><p>Our curiosity doesn’t stop at client work. We explore, prototype, and develop our own digital products—learning by making and sharing what we discover.</p><a href="#contact" className="panel-link">Ask us what we’re working on <Arrow /></a></div><div className="product-card"><div className="product-card-top"><span>INDEPENDENT R&D</span><span className="product-status"><i /> IN THE WORKSHOP</span></div><div className="product-symbol"><span>✳</span></div><div className="product-card-bottom"><span>IDEAS IN PROGRESS</span><p>New products.<br />Made with intention.</p><span>CONCEPT&nbsp; · &nbsp;PROTOTYPE&nbsp; · &nbsp;ITERATE</span></div></div></div></section>

      <section className="team-section" id="team"><div className="container"><div className="section-heading reveal"><div><span className="section-kicker">03 / THE PEOPLE</span><h2>Small team.<br /><span>Shared ambition.</span></h2></div><p>Designers and developers working closely together, with direct communication from the first conversation to launch.</p></div><div className="team-grid">{team.map((person, index) => <article className={`team-card team-card-${index + 1}`} key={person.initials}><div className="team-avatar">{person.photo ? <img src={person.photo} alt={person.name} /> : <span>{person.initials}</span>}<i>✳</i></div><div className="team-person"><h3>{person.name}</h3><p>{person.role}</p></div></article>)}</div></div></section>

      <section className="values-section"><div className="container"><div className="values-heading"><span className="section-kicker">04 / WHAT WE BELIEVE</span><h2>Good work leaves<br />people better off.</h2><p>Until we can share approved client reviews, here are a few principles that guide our work.</p></div><div className="values-grid">{testimonials.map((item, index) => <article className="value-card" key={item.context + index}><div className="value-stars" aria-label="Principle">✳ &nbsp; ✳ &nbsp; ✳</div><blockquote>{item.quote}</blockquote><div className="value-author"><span className="value-avatar">AL</span><span><strong>{item.byline}</strong><small>{item.context}</small></span></div></article>)}</div><p className="values-note">These are studio principles, not client testimonials.</p></div></section>

      <section className="work-section" id="work"><div className="container"><div className="section-heading work-heading reveal"><div><span className="section-kicker">02 / SELECTED WORK</span><h2>Made for the<br /><span>real world.</span></h2></div><p>Our best work starts by listening—then turning what we learn into products that make a meaningful difference.</p></div>
        <div className="projects-list">{projects.map((project) => <article className="project-row" key={project.number}><div className={`project-visual visual-${project.visual}`}><ProjectVisual type={project.visual} /></div><div className="project-info"><span className="section-kicker">{project.number} &nbsp;/&nbsp; {project.kind}</span><h3>{project.title}</h3><p>{project.detail}</p><div className="project-result"><span>THE OUTCOME</span><strong>{project.result}</strong></div><a href="#contact" className="project-link">Talk about a similar idea <Arrow /></a></div></article>)}</div>
        <div className="work-footnote"><span>SELECTED CONCEPTS & PRODUCT DIRECTIONS</span><span>THOUGHTFUL DETAIL. MEASURABLE PROGRESS.</span></div>
      </div></section>

      <section className="section approach-section" id="approach"><div className="container"><div className="section-heading reveal"><div><span className="section-kicker">03 / OUR APPROACH</span><h2>Clear from the<br /><span>first hello.</span></h2></div><p>A close, collaborative process keeps the work grounded in what matters and flexible enough to find the right answer.</p></div>
        <div className="approach-grid">{steps.map(([number, title, description]) => <article className="approach-step" key={number}><span className="step-number">{number}</span><span className="step-rule" /><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className="stack-section"><div className="container stack-layout"><div className="stack-heading reveal"><span className="section-kicker">04 / OUR TOOLKIT</span><h2>Right tool.<br />Right reason.</h2><p>We choose technology to suit the product, the team, and the long game.</p></div><div className="stack-groups">{stacks.map(([group, ...items]) => <div className="stack-group" key={group}><span>{group}</span><div>{items.map((item) => <span className="stack-pill" key={item}>{item}</span>)}</div></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="container"><div className="contact-panel reveal"><div className="contact-top"><span className="section-kicker">06 / YOUR NEXT CHAPTER</span><span className="contact-spark">✳</span></div><h2>Have a good one<br /><span>in mind?</span></h2><div className="contact-bottom"><p>Tell us what you’re building, where you’re stuck, or what you’re curious about. We’ll take it from there.</p><a className="button button-light" href="mailto:aquilalabs4@gmail.com?subject=Project%20enquiry">Email our team <Arrow diagonal /></a></div><span className="contact-outline" aria-hidden="true">LET’S MAKE IT MATTER</span></div><div className="contact-workspace"><form className="enquiry-form" onSubmit={handleEnquiry}><div className="form-heading"><span className="section-kicker">TELL US A LITTLE ABOUT IT</span><p>Your message is sent to our team directly. We’ll reply to the email you provide.</p></div><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="How should we address you?" required /></label><label>Your email<input name="email" type="email" autoComplete="email" placeholder="Where can we reply?" required /></label></div><label>What are you looking to build?<textarea name="project" rows="3" placeholder="A sentence or two is plenty to get started." required /></label><div className="form-actions"><button className="button button-dark" type="submit" disabled={formState.status === 'sending'}>{formState.status === 'sending' ? 'Sending…' : 'Send your enquiry'} <Arrow diagonal /></button><button className="copy-email" type="button" onClick={copyEmail}>{emailCopied ? 'Email copied ✓' : 'Copy email address'}</button></div><p className={`form-status ${formState.status}`} role="status" aria-live="polite">{formState.message}</p></form><div className="contact-options">{socialLinks.map((social) => <a className="contact-option" key={social.name} href={social.href} target="_blank" rel="noreferrer"><span className="contact-option-icon">{social.name === 'Instagram' ? '◎' : 'in'}</span><span><small>FOLLOW ALONG ON {social.name.toUpperCase()}</small><strong>{social.handle}</strong></span><Arrow diagonal /></a>)}</div></div></div></section>
    </main>

    <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand-column"><a className="footer-brand" href="#home" aria-label="Aquila Labs home" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}><Logo size={36} /><span style={{ fontSize: '18px', letterSpacing: '-0.5px' }}>Aquila Labs</span></a><p>Thoughtful technology.<br />A more human future.</p></div><div className="footer-column"><h2>Explore</h2><a href="#services">Services</a><a href="#products">Our products</a><a href="#work">Selected work</a><a href="#team">Meet the team</a></div><div className="footer-column"><h2>Get in touch</h2><a href="mailto:aquilalabs4@gmail.com">Email us</a>{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name} <Arrow diagonal /></a>)}</div><a className="footer-cta" href="mailto:aquilalabs4@gmail.com?subject=Let%E2%80%99s%20build%20something%20together"><span>HAVE AN IDEA?</span><strong>Let’s talk <Arrow diagonal /></strong></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AQUILA LABS</span><span>INDEPENDENT DIGITAL PRODUCT STUDIO</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>
  </div>
}
