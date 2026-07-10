import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import './Volunteering.css'

export default function Volunteering() {
  return (
    <section id="volunteering">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="eyebrow">Volunteering</span>
          <h2>
            Giving <span className="grad">back</span>
          </h2>
        </motion.div>

        <motion.div
          className="volunteer-card glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <span className="volunteer-icon">
            <FiHeart />
          </span>
          <div>
            <div className="volunteer-head">
              <h3>Dhamma School</h3>
              <span className="volunteer-year">2016 – 2019</span>
            </div>
            <span className="volunteer-role">Dhamma Youth Volunteering Program</span>
            <p>
              Volunteered with the Dhamma Youth program, supporting community
              education and developing early leadership, communication, and
              teamwork skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
