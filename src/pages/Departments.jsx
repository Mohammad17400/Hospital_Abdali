import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, X, ArrowUpRight, CalendarCheck } from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag, CTABanner } from '../components/ui.jsx'
import { departments } from '../data/content.js'

export default function Departments() {
  const [active, setActive] = useState(null)

  return (
    <Page>
      <PageHeader
        title="Our Departments"
        subtitle="Specialized centers of care, staffed by expert teams and equipped with the latest technology."
        image="/images/about-team.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-14 max-w-2xl">
          <SectionTag>Centers of Excellence</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Explore our medical departments
          </h2>
          <p className="mt-4 text-slate-500">
            Click any department to see what it offers, then book directly with its specialists.
          </p>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.id} delay={0.06 * i}>
              <button
                onClick={() => setActive(d)}
                className="group block w-full overflow-hidden rounded-3xl border border-slate-100 bg-white text-left shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-brand-600 shadow-lg backdrop-blur transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <d.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-navy transition-colors duration-300 group-hover:text-brand-600">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-soft"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-5 left-7 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white shadow-lg">
                    <active.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">{active.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="leading-relaxed text-slate-600">{active.description}</p>
                <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-navy">
                  What this department offers
                </h4>
                <ul className="mt-4 space-y-3">
                  {active.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Book with {active.name}
                  </Link>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-bold text-slate-600 transition-all duration-300 hover:border-navy hover:text-navy"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </Page>
  )
}
