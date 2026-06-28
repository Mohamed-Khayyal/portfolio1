import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Redux / Context API', level: 80 },
      { name: 'SASS / Bootstrap', level: 82 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },

      { name: 'RESTful APIs', level: 90 },
      { name: 'JWT Auth / RBAC', level: 85 },
      { name: 'C#', level: 72 },
    ],
  },
  {
    title: 'Database & DevOps',
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MongoDB / Mongoose', level: 86 },
      { name: 'SQL Server', level: 78 },
      { name: 'Entity Framework', level: 73 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Cloudinary', level: 80 },
      { name: 'Firebase / Vercel', level: 78 },
    ],
  },
]

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Express', color: '#aaaaaa' },
  { name: 'MongoDB', color: '#4DB33D' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind', color: '#06B6D4' },

  { name: 'C#', color: '#239120' },
  { name: 'SQL Server', color: '#CC2927' },
  { name: 'Git', color: '#F05032' },
  { name: 'Firebase', color: '#FFCA28' },
]

function SkillBar({ name, level, delay, color }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-bold text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative z-10 py-28 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">What I Know</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glassmorphism rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={catIdx * 0.1 + i * 0.1}
                  color={cat.color}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(({ name, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 glassmorphism-light rounded-full cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-sm font-medium text-slate-300">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
