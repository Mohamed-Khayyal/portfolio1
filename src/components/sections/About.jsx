import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMapPin, FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'

const infoItems = [
  { icon: FiMapPin, label: 'Location', value: 'Cairo, Egypt' },
  { icon: FiMail, label: 'Email', value: 'khayyalmohamed5@gmail.com', href: 'mailto:khayyalmohamed5@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+20 1018743096', href: 'tel:+201018743096' },
  { icon: FiGithub, label: 'GitHub', value: 'Mohamed-Khayyal', href: 'https://github.com/Mohamed-Khayyal' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Get To Know Me</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glassmorphism rounded-2xl p-8 card-hover">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Full-Stack Developer &{' '}
                <span className="gradient-text">Problem Solver</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm a passionate Full-Stack Developer with hands-on experience building scalable, secure, and production-ready web applications. I specialize in the <span className="text-blue-400 font-medium">MERN stack</span> and <span className="text-blue-400 font-medium">Next.js</span>.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm skilled in designing RESTful APIs, implementing token-based authentication (JWT, refresh tokens, HttpOnly cookies), and optimizing database performance for real-world production systems.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently pursuing my <span className="text-purple-400 font-medium">Bachelor of Computer Science</span> at Banha National University (GPA: 3.39/4.0), graduating June 2026. I'm deeply passionate about clean architecture, maintainable code, and delivering high-quality solutions that solve real business problems.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Degree', value: 'B.Sc. Computer Science' },
                    { label: 'University', value: 'Banha National Univ.' },
                    { label: 'GPA', value: '3.39 / 4.0' },
                    { label: 'Graduation', value: 'June 2026' },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
                      <div className="text-sm text-slate-200 font-medium mt-0.5">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {infoItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="glassmorphism rounded-xl p-4 flex items-center gap-4 card-hover group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        className="text-slate-200 font-medium text-sm hover:text-blue-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-slate-200 font-medium text-sm">{value}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Languages card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="glassmorphism rounded-xl p-4 card-hover">
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-3">Languages</div>
                <div className="flex gap-3">
                  {[
                    { lang: 'Arabic', level: 'Native', color: 'from-green-500 to-emerald-500' },
                    { lang: 'English', level: 'Professional', color: 'from-blue-500 to-cyan-500' },
                  ].map(({ lang, level, color }) => (
                    <div key={lang} className={`flex-1 bg-gradient-to-r ${color} rounded-lg p-3 text-white`}>
                      <div className="font-bold text-sm">{lang}</div>
                      <div className="text-xs opacity-80">{level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
