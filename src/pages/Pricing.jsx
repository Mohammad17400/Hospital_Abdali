import { Check, ShieldCheck, Sparkles } from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag, Button, CTABanner } from '../components/ui.jsx'
import { pricingPlans } from '../data/content.js'

export default function Pricing() {
  return (
    <Page>
      <PageHeader
        title="Pricing"
        subtitle="Transparent, honest pricing for checkups and care packages — no hidden fees."
        image="/images/building.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <SectionTag>Care Packages</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Simple plans for every need
          </h2>
          <p className="mt-4 text-slate-500">
            All packages include a doctor consultation and a digital health report. Insurance
            billing is available for covered services.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-7 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.08 * i} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[2rem] p-9 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-navy text-white shadow-soft hover:shadow-xl md:-my-4 md:py-13'
                    : 'border border-slate-100 bg-white shadow-card hover:shadow-soft'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/40">
                    <Sparkles className="h-3.5 w-3.5" /> Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-white/60' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="mt-6 flex items-end gap-2">
                  <span className={`text-5xl font-extrabold tracking-tight ${plan.popular ? 'text-white' : 'text-navy'}`}>
                    ${plan.price}
                  </span>
                  <span className={`pb-1.5 text-sm ${plan.popular ? 'text-white/50' : 'text-slate-400'}`}>
                    / {plan.period}
                  </span>
                </div>
                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-medium">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          plan.popular ? 'bg-brand-500/25 text-brand-300' : 'bg-emerald-50 text-emerald-600'
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className={plan.popular ? 'text-white/80' : 'text-slate-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    to="/contact"
                    variant={plan.popular ? 'primary' : 'dark'}
                    className="w-full"
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 flex max-w-2xl items-start gap-4 rounded-3xl border border-brand-100 bg-brand-50 p-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500 text-white">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-bold text-navy">Insurance & billing</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                We work with all major insurance providers. For insured visits you only pay your
                co-pay — our billing desk handles the paperwork. Cash-pay patients always receive
                the exact price above, guaranteed in writing before treatment.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Not sure which package fits you?"
        subtitle="Send us a message and our team will recommend the right checkup for your age and health goals."
      />
    </Page>
  )
}
