// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { variants } from '../animations/motion'

export default function MotionSection({ children, variant = 'fadeInUp', delay = 0, aos, className = '' }) {
  const v = variants[variant]
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={typeof v === 'function' ? v(delay) : v}
      data-aos={aos}
      className={className}
    >
      {children}
    </motion.section>
  )
}
