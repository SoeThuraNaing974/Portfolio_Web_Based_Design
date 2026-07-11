import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import './Navbar.css'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          Soe<span>.</span>dev
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
