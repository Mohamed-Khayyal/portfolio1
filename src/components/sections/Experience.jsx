import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'Frontend Development Trainee',
    company: 'DEPI – Digital Egypt Pioneers Initiative',
    period: '2025 – 2026',
    tech: 'React.js',
    color: 'from-blue-500 to-cyan-500',
    icon: '🎓',
    highlights: [
      'Completed intensive front-end web development training covering modern frontend workflows.',
      'Built production-style projects involving responsive UI with React.js ecosystem.',
      'Strengthened collaboration, version control, and agile deployment practices used in real-world software projects.',
    ],
    metrics: null,
  },
  {
    role: 'Full-Stack .NET Trainee',
    company: 'Tuya Technology',
    period: '2025',
    tech: 'C#, SQL Server, Entity Framework',
    color: 'from-purple-500 to-indigo-500',
    icon: '💼',
    highlights: [
      'Built and optimized RESTful APIs, contributing to an average response-time improvement.',
      'Developed CRUD-based systems handling 1,000+ records efficiently with Entity Framework and SQL Server.',
      'Designed normalized database schemas and optimized SQL queries for performance.',
      'Implemented JWT-based authentication and role-based access control (RBAC) to secure application endpoints.',
    ],
    metrics: [
      { label: 'Response Time', value: '20%', desc: 'Improvement' },
      { label: 'Records', value: '1K+', desc: 'Handled' },
      { label: 'Query Speed', value: '30%', desc: 'Faster' },
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative z-10 py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">My Journey</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Experience & <span className="gradient-text">Training</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 timeline-line opacity-30 rounded-full" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 sm:left-2 top-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-xl shadow-lg glow-dot`}>
                  {exp.icon}
                </div>

                <div className="glassmorphism rounded-2xl p-6 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">{exp.role}</h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* Tech */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-slate-500">Tech:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.split(', ').map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + j * 0.1 + 0.3 }}
                        className="flex items-start gap-2.5 text-sm text-slate-400"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  {exp.metrics && (
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                      {exp.metrics.map(({ label, value, desc }) => (
                        <div key={label} className="text-center">
                          <div className={`font-display font-black text-xl gradient-text`}>{value}</div>
                          <div className="text-xs text-slate-500">{desc}</div>
                          <div className="text-xs text-slate-600">{label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
