import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold font-display text-sm">MK</span>
              </div>
              <span className="font-display font-bold text-white">
                Mohamed<span className="gradient-text"> Khayal</span>
              </span>
            </motion.div>
          </Link>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-blue-400 transition-colors capitalize"
              >
                {section}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/Mohamed-Khayyal' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/mohamed-khayal-bb910b378' },
              { icon: FiMail, href: 'mailto:khayyalmohamed5@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-9 h-9 rounded-lg glassmorphism-light flex items-center justify-center text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-600 text-xs">
            <p>© {year} Mohamed Khayal. Built with React & Tailwind CSS.</p>
            <p className="mt-1 flex items-center justify-center gap-1">
              Made with <FiHeart size={12} className="text-red-400" /> in Cairo, Egypt
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
