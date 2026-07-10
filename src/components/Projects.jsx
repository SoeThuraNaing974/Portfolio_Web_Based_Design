import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  FiMonitor,
  FiUsers,
  FiBriefcase,
  FiMap,
  FiMessageCircle,
  FiCoffee,
  FiShoppingCart,
  FiGithub,
  FiArrowUpRight,
} from 'react-icons/fi'
import './Projects.css'

// Replace "yourusername" with your real GitHub username,
// and each repo name with the repository that holds that project's code.
const GITHUB = 'https://github.com/yourusername'

const PROJECTS = [
  {
    icon: <FiMonitor />,
    title: 'Showroom Management System',
    year: '2022 – 2023',
    description:
      'A showroom management system combining C++ program logic with a clean, responsive web interface.',
    tech: ['C++', 'HTML', 'CSS'],
    source: `${GITHUB}/showroom-management-system`,
  },
  {
    icon: <FiUsers />,
    title: 'Student Management System',
    year: '2022 – 2023',
    description:
      'A student records management app built on Node.js with a simple, functional web interface.',
    tech: ['Node.js', 'HTML', 'CSS'],
    source: `${GITHUB}/student-management-system`,
  },
  {
    icon: <FiBriefcase />,
    title: 'Job Seeking System',
    year: '2023 – 2024',
    description:
      'A web platform connecting job seekers with employers, built on JavaEE with a Bootstrap-styled UI.',
    tech: ['JavaEE', 'HTML', 'CSS', 'Bootstrap'],
    source: `${GITHUB}/job-seeking-system`,
  },
  {
    icon: <FiMap />,
    title: 'Travelling Guide System',
    year: '2023 – 2024',
    description:
      'A full-stack travel guide with a React.js frontend and Express.js backend helping users discover destinations.',
    tech: ['React.js', 'Express.js', 'Bootstrap'],
    source: `${GITHUB}/travelling-guide-system`,
  },
  {
    icon: <FiMessageCircle />,
    title: 'Chatting System',
    year: '2024 – 2025',
    description:
      'A messaging application built with PHP and Laravel, handling users and conversations.',
    tech: ['PHP', 'Laravel', 'HTML', 'CSS'],
    source: `${GITHUB}/chatting-system`,
  },
  {
    icon: <FiCoffee />,
    title: 'Restaurant Management System',
    year: '2024 – 2025',
    description:
      'A management tool for restaurant orders and operations, powered by a C# backend.',
    tech: ['C#', 'HTML', 'CSS'],
    source: `${GITHUB}/restaurant-management-system`,
  },
  {
    icon: <FiShoppingCart />,
    title: 'Marketplace Management System',
    year: '2025 – 2026',
    description:
      'A marketplace platform powered by Python and Flask, managing products and orders with a Bootstrap UI.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'Bootstrap'],
    source: `${GITHUB}/marketplace-management-system`,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: (i % 3) * 0.12, ease: 'easeOut' },
  }),
}

function TiltCard({ children, className }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const card = ref.current
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateY(-6px)`
    card.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    card.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }

  const handleLeave = () => {
    ref.current.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="eyebrow">Projects</span>
          <h2>
            Developments I&apos;ve <span className="grad">built</span>
          </h2>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <TiltCard className="project-card glass">
                <div className="project-shine" aria-hidden="true" />
                <div className="project-top">
                  <span className="project-icon">{project.icon}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-footer">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="source-link"
                  >
                    <FiGithub className="source-gh" />
                    <span>Source Code</span>
                    <FiArrowUpRight className="source-arrow" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
