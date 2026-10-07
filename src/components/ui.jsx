import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

/* ---------- Animated page wrapper (route transitions) ---------- */
export function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex-1"
    >
      {children}
    </motion.main>
  )
}

/* ---------- Scroll reveal wrapper ---------- */
export function Reveal({ children, delay = 0, y = 30, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Pill section tag ---------- */
export function SectionTag({ children, light = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
        light ? 'border-white/25 text-white/80' : 'border-brand-200 bg-brand-50 text-brand-600'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </span>
  )
}

/* ---------- Buttons ---------- */
const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 group cursor-pointer'
const variants = {
  primary:
    'bg-brand-500 text-white px-7 py-3.5 shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/35 hover:-translate-y-0.5',
  white:
    'bg-white text-navy px-7 py-3.5 hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-lg',
  outlineLight:
    'bg-white/10 text-white border border-white/30 px-7 py-3.5 backdrop-blur hover:bg-white hover:text-navy hover:-translate-y-0.5',
  dark: 'bg-navy text-white px-7 py-3.5 hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-lg',
  ghost:
    'bg-transparent text-brand-600 px-2 py-1 hover:text-brand-700',
}

export function Button({ to, children, variant = 'primary', arrow = true, onClick, type = 'button', className = '' }) {
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}

/* ---------- Inner-page hero banner ---------- */
export function PageHeader({ title, subtitle, image = '/images/hero.jpg' }) {
  return (
    <section className="relative flex min-h-[46vh] items-center overflow-hidden bg-navy">
      <motion.img
        src={image}
        alt={title}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 text-sm font-medium text-white/60">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-brand-300">{title}</span>
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl text-lg text-white/70">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Animated counter ---------- */
export function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
        {display}
        <span className="text-brand-500">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-slate-500">{label}</div>
    </div>
  )
}

/* ---------- Dark CTA banner (reused across pages) ---------- */
export function CTABanner({
  title = 'Your health starts with one appointment',
  subtitle = 'Book a consultation with our specialists today — online, by phone or in person.',
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-16 text-center md:px-16 md:py-20">
          <img
            src="/images/building.jpg"
            alt="Abdali Hospital building"
            className="absolute inset-0 h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-navy/70 to-navy/90" />
          <div className="relative">
            <SectionTag light>Book a visit</SectionTag>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{subtitle}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="white">
                Book Appointment
              </Button>
              <Button to="/doctors" variant="outlineLight">
                Find Doctors
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
