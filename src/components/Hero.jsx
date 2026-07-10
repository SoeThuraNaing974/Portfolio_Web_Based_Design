import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiChevronDown,
} from 'react-icons/fi'
import useTypingEffect from '../hooks/useTypingEffect.js'
import './Hero.css'

const ROLES = ['Software Developer', 'Web Developer', 'Problem Solver']
const CUBE_FACES = ['JS', 'Python', 'PHP', 'Java', 'C++', 'C#']

export default function Hero() {
  const typed = useTypingEffect(ROLES)
  const sectionRef = useRef(null)
  const tiltRef = useRef(null)

  // Mouse-reactive depth: the cube leans toward the cursor and the
  // background blobs drift in parallax at different rates.
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    tiltRef.current.style.transform = `rotateX(${-y * 22}deg) rotateY(${x * 22}deg)`
    sectionRef.current.style.setProperty('--par-x', x)
    sectionRef.current.style.setProperty('--par-y', y)
  }

  const handleMouseLeave = () => {
    tiltRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
    sectionRef.current.style.setProperty('--par-x', 0)
    sectionRef.current.style.setProperty('--par-y', 0)
  }

  return (
    <section
      id="home"
      className="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-mesh" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="hero-badge">👋 Hello, welcome to my portfolio</span>
          <h1>
            I&apos;m <span className="grad-name">Soe Thura Naing</span>
          </h1>
          <h2 className="typing-line">
            <span className="typed">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </h2>
          <p className="hero-statement">
            Computer Science graduate with a strong interest in software
            development and problem-solving — passionate about learning new
            skills and developing high-quality software solutions.
          </p>

          <div className="hero-cta">
            <a href="/Soe-Thura-Naing-CV.pdf" download className="btn btn-primary">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <FiMail /> Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="mailto:soethuranaing07coc@gmail.com" aria-label="Email">
              <FiMail />
            </a>
            <a href="tel:+959974691655" aria-label="Phone">
              <FiPhone />
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
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />
          <div className="cube-tilt" ref={tiltRef}>
            <div className="portrait-stage">
              <div className="portrait-halo" aria-hidden="true" />
              <div className="portrait-figure">
                <img src="/profile-cut.png" alt="Soe Thura Naing" />
              </div>
              <div className="portrait-ground" aria-hidden="true" />
            </div>
          </div>
          <div className="cube-stage mini">
            <div className="cube">
              {CUBE_FACES.map((face, i) => (
                <div key={i} className={`cube-face face-${i + 1}`}>
                  {face}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About">
        <FiChevronDown />
      </a>
    </section>
  )
}
