import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import './Contact.css'

const CONTACT_INFO = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'soethuranaing07coc@gmail.com',
    href: 'mailto:soethuranaing07coc@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+959 974691655',
    href: 'tel:+959974691655',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Yangon, Myanmar',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const to = 'soethuranaing07coc@gmail.com'
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )

    // Try the visitor's email app first. If nothing opens (no mail app
    // configured), fall back to Gmail compose in the browser, which uses
    // whatever Google account they are logged into.
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setTimeout(() => {
      if (!document.hidden && document.hasFocus()) {
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
      }
    }, 1500)
  }

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="eyebrow">Contact</span>
          <h2>
            Let&apos;s work <span className="grad">together</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3>Get in touch</h3>
            <p>
              I&apos;m currently open to full-time software developer roles. If
              you have an opportunity or just want to say hello, my inbox is
              always open.
            </p>
            {CONTACT_INFO.map((item) => {
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={item.label}
                  href={item.href}
                  className="contact-item glass"
                >
                  <span className="contact-item-icon">{item.icon}</span>
                  <div>
                    <span className="contact-item-label">{item.label}</span>
                    <span className="contact-item-value">{item.value}</span>
                  </div>
                </Wrapper>
              )
            })}
          </motion.div>

          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              <FiSend /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
