import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HeartPulse, Menu, X, Phone } from 'lucide-react'
import { contactInfo } from '../data/content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/departments', label: 'Departments' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
        <HeartPulse className="h-6 w-6 text-white" />
      </div>
      <div className="leading-none">
        <span className="text-xl font-extrabold tracking-tight text-navy">Abdali</span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
          Hospital & Healthcare
        </span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 shadow-card backdrop-blur-xl' : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="group relative text-sm font-semibold text-slate-600">
              {({ isActive }) => (
                <>
                  <span className={`transition-colors duration-300 ${isActive ? 'text-brand-500' : 'group-hover:text-navy'}`}>
                    {l.label}
                  </span>
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="group flex items-center gap-2 text-sm font-bold text-navy"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
              <Phone className="h-4 w-4" />
            </span>
            {contactInfo.phone}
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/35"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl xl:hidden"
          >
            <div className="space-y-1 px-6 py-5">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                        isActive ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="block rounded-full bg-brand-500 px-6 py-3.5 text-center text-sm font-bold text-white"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
