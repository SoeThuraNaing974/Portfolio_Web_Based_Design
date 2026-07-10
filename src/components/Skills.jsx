import { motion } from 'framer-motion'
import { FiLayout, FiTerminal, FiDatabase, FiUsers, FiPackage } from 'react-icons/fi'
import './Skills.css'

const BAR_GROUPS = [
  {
    icon: <FiLayout />,
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 70 },
      { name: 'CSS', level: 70 },
      { name: 'JavaScript', level: 60 },
      { name: 'Bootstrap', level: 60 },
      { name: 'React.js', level: 60 },
    ],
  },
  {
    icon: <FiTerminal />,
    title: 'Programming Languages',
    skills: [
      { name: 'PHP', level: 70 },
      { name: 'Python', level: 70 },
      { name: 'C++', level: 60 },
      { name: 'Node.js / Express', level: 60 },
      { name: 'Java / JavaEE', level: 50 },
      { name: 'C#', level: 40 },
    ],
  },
]

const DATABASES = ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase']

const FRAMEWORKS = ['Laravel', 'Flask', 'Odoo', 'Flutter', 'Express.js', 'jQuery']

const SOFT_SKILLS = [
  'Strong Communication',
  'Analysis & Testing',
  'Problem-Solving & Logical Thinking',
  'Leadership & Time Management',
  'Teamwork & Collaboration',
]

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="eyebrow">Skills</span>
          <h2>
            My technical <span className="grad">toolbox</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {BAR_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              className="skill-card glass"
              custom={gi}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3>
                <span className="skill-card-icon">{group.icon}</span>
                {group.title}
              </h3>
              {group.skills.map((skill, si) => (
                <div key={skill.name} className="skill-bar-row">
                  <div className="skill-bar-head">
                    <span>{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: 1,
                        delay: 0.15 + si * 0.1,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}

          <motion.div
            className="skill-card glass"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3>
              <span className="skill-card-icon">
                <FiDatabase />
              </span>
              Databases
            </h3>
            <div className="tag-cloud">
              {DATABASES.map((db) => (
                <span key={db} className="skill-tag">
                  {db}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-card glass"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3>
              <span className="skill-card-icon">
                <FiPackage />
              </span>
              Frameworks &amp; Tools
            </h3>
            <div className="tag-cloud">
              {FRAMEWORKS.map((fw) => (
                <span key={fw} className="skill-tag">
                  {fw}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skill-card glass wide"
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3>
              <span className="skill-card-icon">
                <FiUsers />
              </span>
              Soft Skills
            </h3>
            <div className="tag-cloud">
              {SOFT_SKILLS.map((skill) => (
                <span key={skill} className="skill-tag soft">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
