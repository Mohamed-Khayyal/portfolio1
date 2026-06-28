import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id={id} className={`relative z-10 ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
