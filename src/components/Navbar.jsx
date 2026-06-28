import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.to)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glassmorphism py-3 shadow-2xl shadow-black/30'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg glow-blue">
                <span className="text-white font-bold font-display text-sm">MK</span>
              </div>
              <span className="font-display font-bold text-white hidden sm:block">
                Mohamed<span className="gradient-text"> Khayal</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-80}
                className={`nav-link cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.to
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <motion.a
              href="mailto:khayyalmohamed5@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 btn-primary text-white text-sm py-2 px-5"
            >
              <span>Hire Me</span>
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center transition-all"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-30 glassmorphism rounded-2xl p-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-all mb-1 ${
                    activeSection === link.to
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-2 pt-2 border-t border-white/10">
              <a
                href="mailto:khayyalmohamed5@gmail.com"
                className="block text-center btn-primary text-white text-sm py-2 px-5 rounded-full"
              >
                <span>Hire Me</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
