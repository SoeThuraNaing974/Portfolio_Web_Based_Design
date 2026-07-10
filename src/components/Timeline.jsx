import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiCode } from 'react-icons/fi'
import './Timeline.css'

const EVENTS = [
  {
    icon: <FiBookOpen />,
    year: '2019',
    title: 'Started B.C.Sc',
    subtitle: 'University of Computer Studies, Meiktila',
    description:
      'Began the Bachelor of Computer Science journey, building strong foundations in programming and problem-solving.',
  },
  {
    icon: <FiCode />,
    year: '2022 – 2023',
    title: 'First Projects',
    subtitle: 'Showroom Management · Student Management',
    description:
      'Built my first real projects — a showroom management system with C++ and a student management app on Node.js.',
  },
  {
    icon: <FiCode />,
    year: '2023 – 2024',
    title: 'Full-Stack Web Development',
    subtitle: 'Job Seeking System · Travelling Guide',
    description:
      'Moved into full-stack development with a JavaEE job platform and a React.js + Express.js travel guide.',
  },
  {
    icon: <FiCode />,
    year: '2024 – 2025',
    title: 'Backend Frameworks',
    subtitle: 'Chatting System · Restaurant Management',
    description:
      'Expanded into backend frameworks with a Laravel (PHP) chat application and a C# restaurant management tool.',
  },
  {
    icon: <FiAward />,
    year: '2025 – 2026',
    title: 'Graduation Year',
    subtitle: 'Marketplace Management System · B.C.Sc Degree',
    description:
      'Building a Python + Flask marketplace platform and earning the Bachelor of Computer Science degree.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="eyebrow">Education &amp; Journey</span>
          <h2>
            My path so <span className="grad">far</span>
          </h2>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.year}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="timeline-dot" aria-hidden="true">
                {event.icon}
              </span>
              <div className="timeline-card glass">
                <span className="timeline-year">{event.year}</span>
                <h3>{event.title}</h3>
                <span className="timeline-subtitle">{event.subtitle}</span>
                <p>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
