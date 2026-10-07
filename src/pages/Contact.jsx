import { useState } from 'react'
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Siren, ArrowUpRight,
} from 'lucide-react'
import { Page, PageHeader, Reveal, SectionTag } from '../components/ui.jsx'
import { contactInfo, departments } from '../data/content.js'

const inputCls =
  'w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-navy outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const infoCards = [
    { icon: Siren, title: 'Emergency (24/7)', value: contactInfo.emergency, color: 'bg-red-50 text-red-500' },
    { icon: Phone, title: 'Reception', value: contactInfo.phone, color: 'bg-brand-50 text-brand-600' },
    { icon: Mail, title: 'Email', value: contactInfo.email, color: 'bg-violet-50 text-violet-600' },
    { icon: Clock, title: 'Working Hours', value: 'Sat–Thu · 8:00 – 22:00', color: 'bg-emerald-50 text-emerald-600' },
  ]

  return (
    <Page>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out and start your health journey — we reply within 2 business hours."
        image="/images/care.jpg"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* info cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${c.color}`}>
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-bold text-navy">{c.title}</h3>
                <p className="mt-1.5 text-sm font-semibold text-slate-500">{c.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* form + map/info */}
        <div className="mt-20 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionTag>Send a Message</SectionTag>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Book an appointment or ask a question
            </h2>

            {sent ? (
              <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-10 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-navy">Request received!</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  Thank you for reaching out. Our scheduling team will confirm your appointment
                  within 2 business hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-600 transition-all duration-300 hover:border-navy hover:text-navy"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-9 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required type="text" placeholder="Full name" className={inputCls} />
                  <input required type="email" placeholder="Email address" className={inputCls} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required type="tel" placeholder="Phone number" className={inputCls} />
                  <select required defaultValue="" className={inputCls}>
                    <option value="" disabled>
                      Select department
                    </option>
                    {departments.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                    <option value="tele">Teleconsultation</option>
                  </select>
                </div>
                <input type="date" className={inputCls} aria-label="Preferred date" />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your symptoms or request..."
                  className={`${inputCls} resize-none`}
                />
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/35 sm:w-auto"
                >
                  Send Request
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-card">
              <iframe
                title="Abdali Hospital location"
                src="https://www.google.com/maps?q=Abdali%20Boulevard%2C%20Amman%2C%20Jordan&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
              />
              <div className="space-y-5 p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">Visit us</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{contactInfo.address}</p>
                    <a
                      href="https://www.google.com/maps?q=Abdali+Boulevard+Amman+Jordan"
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600"
                    >
                      Get directions
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">Opening hours</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {contactInfo.hours}
                      <br />
                      <span className="font-semibold text-emerald-600">{contactInfo.emergencyHours}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
