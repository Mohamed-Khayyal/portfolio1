import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    name: 'Medaura & CLYNK',
    subtitle: 'Clinic Management System',
    badge: 'Graduation Project',
    badgeColor: 'from-amber-500 to-orange-500',
    description:
      'A full-stack clinic management platform with role-based access control, appointment booking, prescriptions management, notifications, rate limiting, audit logging, and analytics dashboards.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'SQL Server', 'JWT', 'RBAC'],
    color: 'from-blue-600 to-cyan-600',
    bgGlow: 'rgba(59,130,246,0.15)',
    links: [
      { label: 'Live Demo', href: 'https://medaura-pi.vercel.app/', icon: FiExternalLink },
      { label: 'Frontend', href: 'https://github.com/Mohamed-Khayyal/Medaura', icon: FiGithub },
      { label: 'Backend', href: 'https://github.com/Mohamed-Khayyal/CLYNK', icon: FiGithub },
    ],
    highlights: ['JWT + RBAC Authentication', 'Appointment Booking System', 'Rate Limiting & Audit Logs', 'Analytics Dashboard'],
    emoji: '🏥',
  },
  {
    id: 2,
    name: 'Aetheris',
    subtitle: 'Community Forum Platform',
    badge: 'Live',
    badgeColor: 'from-green-500 to-emerald-500',
    description:
      'A full-stack community forum with JWT authentication, admin moderation tools, Cloudinary media uploads, search & filtering, reactions (likes), and fully responsive user experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Cloudinary', 'JWT'],
    color: 'from-purple-600 to-indigo-600',
    bgGlow: 'rgba(139,92,246,0.15)',
    links: [
      { label: 'Live Demo', href: 'https://la2aetheris.com/', icon: FiExternalLink },
    ],
    highlights: ['Admin Moderation Panel', 'Cloudinary Media Upload', 'Search & Filtering', 'Reactions & Engagement'],
    emoji: '💬',
  },
  {
    id: 3,
    name: 'Games4U',
    subtitle: 'E-Commerce Platform',
    badge: 'MERN Stack',
    badgeColor: 'from-cyan-500 to-blue-500',
    description:
      'A MERN-based e-commerce platform for games and devices featuring authentication, cart management, dynamic pricing, and admin dashboard with production-ready security practices.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux'],
    color: 'from-cyan-600 to-blue-600',
    bgGlow: 'rgba(6,182,212,0.15)',
    links: [],
    highlights: ['Full Shopping Cart', 'Dynamic Pricing Engine', 'Admin Dashboard', 'Secure Payments Flow'],
    emoji: '🎮',
  },
  {
    id: 4,
    name: 'Medico Platform',
    subtitle: 'Pharmacy E-Commerce',
    badge: 'Live',
    badgeColor: 'from-green-500 to-teal-500',
    description:
      'A pharmacy e-commerce platform serving 200+ users with role-based authentication, product browsing, ordering workflows, and fully responsive user interfaces.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    color: 'from-green-600 to-teal-600',
    bgGlow: 'rgba(20,184,166,0.15)',
    links: [
      { label: 'Live Demo', href: 'https://medico-brown-six.vercel.app/', icon: FiExternalLink },
    ],
    highlights: ['200+ Active Users', 'Role-Based Auth', 'Product Catalog', 'Order Management'],
    emoji: '💊',
  },
]

function ProjectCard({ project, index, isInView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      <div
        className="glassmorphism rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-blue-500/30"
        style={{
          boxShadow: hovered ? `0 20px 60px ${project.bgGlow}` : 'none',
        }}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 60%)' }} />

          <div className="flex items-start justify-between relative z-10">
            <div className="text-4xl mb-2">{project.emoji}</div>
            <span className={`bg-gradient-to-r ${project.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {project.badge}
            </span>
          </div>
          <h3 className="font-display font-black text-white text-xl relative z-10">{project.name}</h3>
          <p className="text-white/70 text-sm relative z-10">{project.subtitle}</p>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.highlights.map((h) => (
              <div key={h} className="flex items-center gap-1.5 text-xs text-slate-400">
                <FiChevronRight className="text-blue-400 flex-shrink-0" size={12} />
                {h}
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5 flex-1 items-start">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          {/* Links */}
          {project.links.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.links.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 text-slate-300 hover:text-white transition-all"
                >
                  <Icon size={13} />
                  {label}
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="mt-auto">
              <span className="text-xs text-slate-600 italic">Private repository</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative z-10 py-28 bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">What I've Built</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-2">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
