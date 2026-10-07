import { Check, CalendarCheck } from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag, Button, CTABanner } from '../components/ui.jsx'
import { services, processSteps } from '../data/content.js'

export default function Services() {
  return (
    <Page>
      <PageHeader
        title="Our Services"
        subtitle="From emergency care to routine checkups — every service delivered with excellence."
        image="/images/care.jpg"
      />

      {/* services grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mb-14 max-w-2xl">
          <SectionTag>What We Offer</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Excellence in every medical service
          </h2>
        </Reveal>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.06 * i}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-soft">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-400 to-brand-600 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand-500 group-hover:text-white">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="bg-slate-50/70 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionTag>Your Journey</SectionTag>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
                Simple steps to better healthcare outcomes
              </h2>
              <p className="mt-5 leading-relaxed text-slate-500">
                Getting great care should not be complicated. We have designed every step of the
                Abdali experience around your time, comfort and clarity.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="dark">
                  Start Your Journey
                </Button>
              </div>
            </Reveal>
            <div className="space-y-4">
              {processSteps.map((s, i) => (
                <Reveal key={s.title} delay={0.08 * i}>
                  <div className="group flex items-start gap-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy font-extrabold text-white transition-colors duration-500 group-hover:bg-brand-500">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* guarantee strip */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="grid items-center gap-10 rounded-[2.5rem] bg-brand-500 px-8 py-14 text-white md:grid-cols-[1fr_auto] md:px-16">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Every service, backed by our care guarantee
              </h2>
              <ul className="mt-6 grid gap-3 text-white/90 sm:grid-cols-2">
                {[
                  'Transparent pricing before treatment',
                  'Specialists available same week',
                  'Digital reports within 24 hours',
                  'Free follow-up within 7 days',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-semibold">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15">
                <CalendarCheck className="h-8 w-8" />
              </span>
              <Button to="/contact" variant="white">
                Book Appointment
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </Page>
  )
}
