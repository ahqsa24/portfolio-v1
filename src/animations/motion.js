export const variants = {
  fadeInUp: (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
  }),
  slideInLeft: (delay = 0) => ({
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } }
  }),
  slideInRight: (delay = 0) => ({
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, delay } }
  }),
  zoomIn: (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } }
  }),
  staggerContainer: (stagger = 0.1) => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger } }
  })
}
