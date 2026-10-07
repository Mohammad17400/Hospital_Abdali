import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, MessageCircleQuestion } from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag, Button, CTABanner } from '../components/ui.jsx'
import { faqs } from '../data/content.js'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Page>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Quick answers about appointments, insurance, visiting and more."
        image="/images/hero.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal className="mb-14 text-center">
          <SectionTag>Need Help?</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Everything you need to know
          </h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={0.04 * i}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-brand-200 bg-brand-50/50 shadow-card'
                      : 'border-slate-100 bg-white hover:border-brand-200'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`hidden h-9 w-9 shrink-0 place-items-center rounded-xl sm:grid ${
                          isOpen ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600'
                        }`}
                      >
                        <MessageCircleQuestion className="h-4.5 w-4.5" />
                      </span>
                      <span className={`font-bold transition-colors duration-300 ${isOpen ? 'text-brand-700' : 'text-navy'}`}>
                        {f.q}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        isOpen ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-7 leading-relaxed text-slate-600 sm:pl-20">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-[2rem] bg-navy px-8 py-10 text-center text-white">
            <h3 className="text-2xl font-extrabold">Still have questions?</h3>
            <p className="mx-auto mt-2 max-w-md text-white/60">
              Our patient support team is available Saturday to Thursday, 8:00 – 22:00.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </Page>
  )
}
