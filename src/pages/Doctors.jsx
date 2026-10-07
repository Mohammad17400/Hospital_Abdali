import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag, CTABanner } from '../components/ui.jsx'
import { doctors } from '../data/content.js'

const filters = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Dermatology', 'Pediatrics', 'General Medicine']

export default function Doctors() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? doctors : doctors.filter((d) => d.dept === filter)

  return (
    <Page>
      <PageHeader
        title="Our Doctors"
        subtitle="150+ specialists across every department — meet some of the people behind your care."
        image="/images/doctor-5.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-10 max-w-2xl">
          <SectionTag>Medical Team</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Find your specialist
          </h2>
        </Reveal>

        {/* filter buttons */}
        <Reveal delay={0.1}>
          <div className="mb-12 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  filter === f
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                    : 'border border-slate-200 bg-white text-slate-500 hover:border-brand-300 hover:text-brand-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((doc) => (
              <motion.div
                layout
                key={doc.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-600 backdrop-blur">
                    {doc.dept}
                  </span>
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-navy/80 via-navy/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Link
                      to="/contact"
                      className="mb-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-navy transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <CalendarCheck className="h-4 w-4 text-brand-500" /> Book a visit
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-navy">{doc.name}</h3>
                  <p className="mt-1 text-sm text-brand-600">{doc.role}</p>
                  <p className="mt-1 text-xs text-slate-400">{doc.exp}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTABanner />
    </Page>
  )
}
