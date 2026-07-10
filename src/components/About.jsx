import { motion } from 'framer-motion'
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiGlobe,
  FiCode,
} from 'react-icons/fi'
import './About.css'

const INFO = [
  { icon: <FiMapPin />, label: 'Location', value: 'Yangon, Myanmar' },
  { icon: <FiMail />, label: 'Email', value: 'soethuranaing07coc@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+959 974691655' },
  { icon: <FiBookOpen />, label: 'Education', value: 'B.C.Sc — University of Computer Studies, Meiktila' },
  { icon: <FiGlobe />, label: 'Languages', value: 'Burmese (Native), English (Fluent)' },
  { icon: <FiCode />, label: 'Focus', value: 'Full-Stack Web Development' },
]

const STATS = [
  { value: '7+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies Used' },
  { value: '4+', label: 'Years of Coding' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="eyebrow">About Me</span>
          <h2>
            A developer who prefers <span className="grad">clean code</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-story glass"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              Computer Science graduate with a strong interest in software
              development and problem-solving. Knowledgeable in programming
              fundamentals, data structures, and web technologies, with a
              passion for learning new skills and developing high-quality
              software solutions. Eager to contribute to a professional team,
              grow as a software developer, and make a positive impact within
              the organization.
            </p>
            <div className="about-stats">
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="about-info">
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                className="info-card glass"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="info-icon">{item.icon}</span>
                <div>
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
