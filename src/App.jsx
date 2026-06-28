import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import ParticleBackground from './components/ui/ParticleBackground'
import ScrollProgress from './components/ui/ScrollProgress'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold font-display gradient-text">MK</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm animate-pulse font-display tracking-widest uppercase">Loading Portfolio</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-dark-900 overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
