import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiAward, FiMaximize2, FiX } from 'react-icons/fi'
import certificate from '../assets/hackathon-certificate.jpg'
import sldCertificate from '../assets/sld-writing-certificate.jpg'
import './Milestones.css'

const MILESTONES = [
  {
    badge: 'Winner',
    title: 'AI for Climate-Resilient Agriculture Hackathon 2026',
    year: '2026',
    organizer: 'UNDP Myanmar · SDG AI Lab · ICPSD · Frontier Tech Leaders',
    description:
      'Won the hackathon as part of Team Iconic with a visionary solution bridging the gap between artificial intelligence and the practical needs of Myanmar’s farming communities — recognized for innovation toward a sustainable, climate-smart agricultural future.',
    tags: ['Team Iconic', 'AI', 'Climate-Smart Agriculture'],
    image: certificate,
    imageAlt:
      'Certificate of Excellence — Winner, Team Iconic, AI for Climate-Resilient Agriculture Hackathon 2026, UNDP Myanmar',
  },
  {
    badge: 'Completed',
    title: '30 Days Writing Challenge',
    organizer: 'SLD English Language Center',
    description:
      'Awarded a Certificate of Completion in recognition of the hard work and dedication shown by participating in and completing the “30 Days Writing Challenge” — a daily commitment to strengthening English writing skills.',
    tags: ['English', 'Writing', 'Consistency'],
    image: sldCertificate,
    imageAlt:
      'Certificate of Completion — Soe Thura Naing, 30 Days Writing Challenge, SLD English Language Center',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

function Lightbox({ image, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="lightbox-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <FiX />
      </button>
      <motion.img
        src={image}
        alt={alt}
        className="lightbox-img"
        initial={{ scale: 0.82, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )
}

export default function Milestones() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="milestones">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="eyebrow">Milestones</span>
          <h2>
            Achievements I&apos;m <span className="grad">proud of</span>
          </h2>
        </motion.div>

        <div className="milestones-list">
          {MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              className="milestone-card glass"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="milestone-body">
                <div className="milestone-head">
                  <span className="milestone-badge">
                    <FiAward />
                    {milestone.badge}
                    <span className="badge-shine" aria-hidden="true" />
                  </span>
                  {milestone.year && (
                    <span className="milestone-year">{milestone.year}</span>
                  )}
                </div>
                <h3>{milestone.title}</h3>
                <span className="milestone-organizer">{milestone.organizer}</span>
                <p>{milestone.description}</p>
                <div className="milestone-tags">
                  {milestone.tags.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {milestone.image && (
                <button
                  type="button"
                  className="milestone-photo"
                  onClick={() =>
                    setLightbox({ image: milestone.image, alt: milestone.imageAlt })
                  }
                  aria-label="Enlarge certificate photo"
                >
                  <img src={milestone.image} alt={milestone.imageAlt} loading="lazy" />
                  <span className="milestone-photo-hint">
                    <FiMaximize2 />
                    <span>Click to enlarge</span>
                  </span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            image={lightbox.image}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
