import { useEffect, useState } from 'react'
import { Icon } from './components/Icons.jsx'
import {
  profile, corePlatforms, about, experience, projects, skills, education, leadership, achievements,
} from './data/profile.js'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]
const SECTION_IDS = [...NAV.map((n) => n.id), 'contact']

/* Fade-up on scroll. Elements with class "reveal" get "is-visible" once seen. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* Highlights the nav link of the section currently on screen. */
function useActiveSection(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

function SectionHeader({ eyebrow, title }) {
  return (
    <header className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <nav className="container nav-inner" aria-label="Main">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-mark">{profile.logoText}</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Icon.Close /> : <Icon.Menu />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={close}
               className={`nav-link ${active === n.id ? 'is-active' : ''}`}>
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn btn-primary btn-sm">Contact</a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-text">
        <p className="pill reveal"><span className="dot" aria-hidden="true" />{profile.role} at {profile.company}</p>
        <div className="reveal d1">
          <p className="hello">Hi, I'm</p>
          <h1>{profile.firstName} <span className="muted-strong">{profile.initials}</span></h1>
        </div>
        <p className="tagline gradient-text reveal d2">{profile.tagline}</p>
        <p className="lead reveal d2">{profile.intro}</p>
        <div className="actions reveal d3">
          <a href="#projects" className="btn btn-primary">View projects</a>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
              <Icon.Download /> Download résumé
            </a>
          )}
        </div>
        <div className="socials reveal d4">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon.LinkedIn /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon.GitHub /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon.Mail /></a>
        </div>
      </div>

      <div className="hero-photo reveal d2">
        <div className="photo-frame">
          <img src={profile.photo} alt={`Portrait of ${profile.shortName}`} width="400" height="400" />
        </div>
        <div className="role-card">
          <p className="role-title">{profile.role}</p>
          <p className="role-sub">{profile.company} · since {profile.roleSince}</p>
        </div>
      </div>
    </section>
  )
}

function PlatformStrip() {
  return (
    <section className="strip" aria-label="Core platforms">
      <div className="container strip-inner">
        <p className="strip-label">Core platforms</p>
        <ul className="strip-list">
          {corePlatforms.map((p) => (
            <li key={p.name}><img src={p.logo} alt="" width="28" height="28" />{p.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="band">
      <div className="container about">
        <div className="about-head reveal">
          <p className="eyebrow">About</p>
          <h2>{about.heading}</h2>
        </div>
        <div className="about-body">
          {about.paragraphs.map((t, i) => <p key={i} className="reveal">{t}</p>)}
          <div className="grid-2">
            {about.focus.map((f, i) => (
              <div key={f.title} className={`card lift reveal d${(i % 4) + 1} ${f.wide ? 'card-wide' : ''}`}>
                <p className="card-title">{f.title}</p>
                <p className="card-sub">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="container section">
      <SectionHeader eyebrow="Experience" title="Professional journey" />
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.title + job.period} className={`card lift job reveal ${job.current ? 'is-current' : ''}`}>
            <span className="node" aria-hidden="true" />
            <div className="job-top">
              <div>
                <h3>
                  {job.title}
                  {job.current && <span className="badge-active">Active</span>}
                </h3>
                <p className="job-company">{job.company}</p>
              </div>
              <p className="period">{job.period}</p>
            </div>
            <p className="job-summary">{job.summary}</p>
            <ul className="tags">{job.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="band">
      <div className="container section">
        <SectionHeader eyebrow="Projects" title="Featured work" />
        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.title} className={`project lift reveal d${(i % 3) + 1}`}>
              <div className="project-img">
                {p.image
                  ? <img src={p.image} alt={p.title} loading="lazy" width="800" height="533" />
                  : (
                    <div className="project-placeholder" aria-hidden="true">
                      {p.icon ? <img src={p.icon} alt="" className="ph-logo" /> : <Icon.Spark width="40" height="40" />}
                      <span>{p.tags.slice(0, 3).join('  ·  ')}</span>
                    </div>
                  )}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <ul className="tags tags-outline">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="container section">
      <SectionHeader eyebrow="Skills" title="Technology arsenal" />
      <ul className="skills">
        {skills.map((s) => (
          <li key={s.name} className="skill lift reveal">
            {s.logo
              ? <img src={s.logo} alt="" width="48" height="48" loading="lazy" />
              : <span className="skill-icon">{s.icon === 'spark' ? <Icon.Spark /> : s.icon === 'plug' ? <Icon.Plug /> : <Icon.Check />}</span>}
            <span>{s.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="band">
      <div className="container section">
        <SectionHeader eyebrow="Education & Leadership" title="Where I learned to lead" />
        <div className="grid-3">
          <div className="card lift info reveal d1">
            <span className="info-icon blue"><Icon.Cap /></span>
            <h3>{education.degree}</h3>
            <p className="accent">{education.school}</p>
            {education.years && <p className="muted">{education.years}</p>}
          </div>
          <div className="card lift info reveal d2">
            <span className="info-icon"><Icon.Trophy /></span>
            <h3>{leadership.title}</h3>
            <p className="accent">{leadership.org}</p>
            <p className="muted">{leadership.detail}</p>
          </div>
          <div className="card lift info stat reveal d3">
            <p className="stat-num gradient-text">{leadership.stat}</p>
            <p className="stat-label">{leadership.statLabel}</p>
            <p className="muted">{leadership.statDetail}</p>
          </div>
        </div>
        <h3 className="subhead reveal">Achievements</h3>
        <ul className="achievements">
          {achievements.map((a, i) => (
            <li key={a.title} className={`achievement reveal d${(i % 3) + 1}`}>
              <span className="ach-icon" aria-hidden="true"><Icon.Trophy width="20" height="20" /></span>
              <div>
                <p className="ach-title">{a.title}</p>
                <p className="ach-detail">{a.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="container section">
      <div className="contact reveal">
        <div className="contact-text">
          <h2>Contact</h2>
          <p>Reach me by email, or find my work on LinkedIn and GitHub.</p>
        </div>
        <div className="contact-links">
          <a className="btn-row" href={`mailto:${profile.email}`}><Icon.Mail />{profile.email}</a>
          <a className="btn-row" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon.LinkedIn />LinkedIn</a>
          <a className="btn-row" href={profile.github} target="_blank" rel="noreferrer"><Icon.GitHub />GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <PlatformStrip />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {profile.shortName}</p>
          <p>Power Platform · SharePoint · Integrations</p>
        </div>
      </footer>
    </>
  )
}
