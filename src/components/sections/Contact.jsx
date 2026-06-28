import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'

const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'khayyalmohamed5@gmail.com',
    href: 'mailto:khayyalmohamed5@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+20 1018743096',
    href: 'https://wa.me/201018743096',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamed-khayal',
    href: 'https://linkedin.com/in/mohamed-khayal-bb910b378',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Mohamed-Khayyal',
    href: 'https://github.com/Mohamed-Khayyal',
    color: 'from-slate-500 to-slate-700',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Cairo, Egypt',
    href: null,
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:khayyalmohamed5@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative z-10 py-28 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Let's Work Together</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-white text-xl mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="glassmorphism rounded-xl p-4 flex items-center gap-4 card-hover group">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-slate-200 font-medium text-sm hover:text-blue-400 transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-slate-200 font-medium text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 p-5 rounded-2xl border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400 glow-dot block flex-shrink-0"></span>
                <div>
                  <div className="font-semibold text-green-400 text-sm">Available for Work</div>
                  <div className="text-slate-400 text-xs mt-0.5">Open to full-time roles, freelance projects, and collaborations.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glassmorphism rounded-2xl p-8 space-y-5">
              <h3 className="font-display font-bold text-white text-xl mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all ${
                  sent
                    ? 'bg-green-600 cursor-default'
                    : 'btn-primary'
                }`}
              >
                {sent ? (
                  <>
                    <FiCheck size={18} />
                    <span>Opening Email Client...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
