import { Award, Eye, Target, CalendarCheck } from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag, StatCounter, CTABanner } from '../components/ui.jsx'
import { stats, doctors, processSteps } from '../data/content.js'

const values = [
  { icon: Award, title: 'Excellence', text: 'We hold ourselves to the highest clinical standards, measured by outcomes — not promises.' },
  { icon: Eye, title: 'Transparency', text: 'Clear pricing, honest diagnoses and open communication at every step of your care.' },
  { icon: Target, title: 'Patient-first', text: 'Every decision we make starts with one question: what is best for the patient?' },
]

const timeline = [
  { year: '2001', title: 'The first clinic', text: 'Abdali opens as a small family clinic with three doctors and one goal: care done right.' },
  { year: '2008', title: 'Becoming a hospital', text: 'A new wing, an emergency department and our first operating theaters open their doors.' },
  { year: '2016', title: 'Center of excellence', text: 'Cardiology and neurology centers launch with the region’s most advanced imaging suite.' },
  { year: '2026', title: '120,000 patients later', text: 'Today Abdali is a 150-doctor hospital trusted across the region — still family-run at heart.' },
]

export default function About() {
  return (
    <Page>
      <PageHeader
        title="About Us"
        subtitle="Excellence in every patient journey — from a small clinic in 2001 to a leading hospital today."
        image="/images/about-team.jpg"
      />

      {/* story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionTag>Our Story</SectionTag>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
                Excellence in every patient journey
              </h2>
              <p className="mt-5 leading-relaxed text-slate-500">
                Abdali Hospital began as a promise: that every patient deserves world-class
                care without traveling far from home. Twenty-five years later, that promise
                still shapes everything we do — from the technology we invest in to the way
                our nurses greet you at the door.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <blockquote className="mt-8 rounded-3xl border-l-4 border-brand-500 bg-brand-50 p-7">
                <p className="text-lg font-semibold italic leading-relaxed text-navy">
                  “We treat every patient the way we would want our own family treated.”
                </p>
                <footer className="mt-3 text-sm font-bold text-brand-600">
                  — Dr. Sarah Mansour, Head of Cardiology
                </footer>
              </blockquote>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src="/images/building.jpg"
                  alt="Abdali Hospital building"
                  className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src="/images/care.jpg"
                  alt="Nurse caring for a patient"
                  className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="bg-slate-50/70 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <SectionTag>Our Values</SectionTag>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="grid gap-7 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.08 * i}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-9 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand-500 group-hover:text-white">
                    <v.icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-500">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-10 rounded-[2rem] border border-slate-100 bg-slate-50/60 px-8 py-12 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* timeline */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <SectionTag light>Our Journey</SectionTag>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
              From one clinic to a regional hospital
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={0.1 * i}>
                <div className="group relative h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-brand-400/40">
                  <p className="text-4xl font-extrabold text-brand-400 transition-colors duration-500 group-hover:text-brand-300">
                    {t.year}
                  </p>
                  <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-14 text-center">
          <SectionTag>How It Works</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Simple steps to better healthcare outcomes
          </h2>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <span className="absolute -right-3 -top-6 text-8xl font-black text-slate-50 transition-colors duration-500 group-hover:text-brand-50">
                  0{i + 1}
                </span>
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 font-extrabold text-white shadow-lg shadow-brand-500/30">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <h3 className="relative mt-6 font-bold text-navy">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* leadership */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal className="mb-14 text-center">
          <SectionTag>Leadership</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Meet our senior doctors
          </h2>
        </Reveal>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.slice(0, 4).map((doc, i) => (
            <Reveal key={doc.name} delay={0.08 * i}>
              <div className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <div className="h-72 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-navy">{doc.name}</h3>
                  <p className="mt-1 text-sm text-brand-600">{doc.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </Page>
  )
}
