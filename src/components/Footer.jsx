import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo">
            Soe<span className="logo-dot">.</span>dev
          </span>
          <p>Building clean, functional &amp; user-friendly applications.</p>
        </div>

        <div className="footer-socials">
          <a href="mailto:soethuranaing07coc@gmail.com" aria-label="Email">
            <FiMail />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Soe Thura Naing. All rights reserved.
        </p>
      </div>

      <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
        <FiArrowUp />
      </button>
    </footer>
  )
}
