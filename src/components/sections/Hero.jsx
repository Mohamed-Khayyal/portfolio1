import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-scroll'
const profilePhoto = '/profile.jpg'  // Place your photo at public/profile.jpg

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen hero-bg grid-pattern flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)', color: '#93c5fd' }}>
              👋 Available for Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text text-shadow">
              Mohamed
            </span>
            <br />
            <span className="gradient-text text-shadow">
              Khayal
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-300 font-display font-semibold mb-6 h-10"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'MERN Stack Expert',
                2000,
                'Next.js Developer',
                2000,
                'Node.js Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="gradient-text-alt"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Building scalable, secure, and production-ready web applications with the MERN stack and Next.js. Passionate about clean architecture and delivering high-quality solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-white flex items-center gap-2"
              >
                <span>View My Work</span>
                <FiArrowDown className="animate-bounce-slow" />
              </motion.button>
            </Link>
            <motion.a
              href="/Mohamed_Khayal_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2 rounded-full"
            >
              <FiDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/Mohamed-Khayyal', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/mohamed-khayal-bb910b378', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:khayyalmohamed5@gmail.com', label: 'Email' },
              { icon: FiPhone, href: 'https://wa.me/201018743096', label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-xl glassmorphism-light flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 mt-10 justify-center lg:justify-start"
          >
            {[
              { value: '4+', label: 'Projects' },
              { value: '3.39', label: 'GPA' },
              { value: '2+', label: 'Years Coding' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold font-display gradient-text">{value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative order-1 lg:order-2 flex-shrink-0"
        >
          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-blue-500/20 absolute animate-spin-slow" />
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-500/10 absolute" style={{ animation: 'spin 12s linear infinite reverse' }} />
          </div>

          {/* Floating tech badges */}
          {[
            { text: 'React', color: 'from-cyan-500 to-blue-500', pos: '-top-4 -right-4', delay: 0.8 },
            { text: 'Node.js', color: 'from-green-500 to-emerald-500', pos: '-bottom-4 -left-4', delay: 1.0 },
            { text: 'Next.js', color: 'from-slate-500 to-slate-700', pos: '-top-4 -left-8', delay: 1.2 },
            { text: 'MongoDB', color: 'from-green-600 to-teal-600', pos: '-bottom-4 -right-8', delay: 1.4 },
          ].map(({ text, color, pos, delay }) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.5, type: 'spring' }}
              className={`absolute ${pos} z-20`}
            >
              <div className={`bg-gradient-to-r ${color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-float`}
                style={{ animationDelay: `${delay}s` }}>
                {text}
              </div>
            </motion.div>
          ))}

          {/* Photo frame */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 blur-2xl opacity-30 scale-110 animate-pulse-slow" />

            {/* Gradient border */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-800">
                <img
                  src={profilePhoto}
                  alt="Mohamed Khayal - Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.src = '/profile-placeholder.svg' }}
                />
              </div>
            </div>

            {/* Availability indicator */}
            <div className="absolute bottom-4 right-4 bg-dark-800 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 glow-dot block"></span>
              <span className="text-xs text-slate-300 font-medium">Open to work</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-center justify-center"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
