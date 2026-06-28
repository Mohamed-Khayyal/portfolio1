import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiBook } from 'react-icons/fi'

const certifications = [
  {
    title: 'Front-End Web Development',
    issuer: 'DEPI – Digital Egypt Pioneers Initiative',
    color: 'from-blue-500 to-cyan-500',
    icon: FiAward,
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design', 'Modern Frontend Practices'],
  },
  {
    title: 'Full-Stack .NET Development',
    issuer: 'Tuya Technology',
    color: 'from-purple-500 to-indigo-500',
    icon: FiAward,
    skills: ['C#', 'SQL Server', 'Entity Framework', 'Scalable Backend APIs'],
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative z-10 py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Academic & Credentials</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glassmorphism rounded-2xl p-8 mb-10 card-hover relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg glow-blue">
              <FiBook size={28} className="text-white" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display font-bold text-white text-xl">Bachelor of Computer Science</h3>
                  <p className="text-blue-400 font-medium mt-0.5">Banha National University</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    Oct 2022 – Jun 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GPA */}
          <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-6">
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">GPA</div>
              <div className="text-2xl font-black font-display gradient-text">3.39 / 4.0</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Status</div>
              <div className="text-lg font-bold text-green-400">Graduated ✓</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wide">Year</div>
              <div className="text-lg font-bold text-slate-200">June 2026</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative z-10 mt-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1.5">
              <span>Oct 2022</span>
              <span>Jun 2026</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-sm font-semibold uppercase tracking-widest text-center mb-6"
        >
          Certifications
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              className="glassmorphism rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                  <cert.icon size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">{cert.title}</h4>
                  <p className="text-blue-400 text-xs">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span key={s} className="tech-tag text-xs">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
