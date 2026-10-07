import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube,
  Send, CheckCircle2, ArrowUpRight,
} from 'lucide-react'
import { contactInfo, departments } from '../data/content.js'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/doctors', label: 'Our Doctors' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
]

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const onSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className="relative overflow-hidden bg-navy text-slate-300">
      {/* giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-black tracking-tighter text-white/[0.03]"
      >
        ABDALI
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20">
        {/* Newsletter strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-12 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-extrabold text-white">Health tips, straight to your inbox</h3>
            <p className="mt-2 text-sm text-slate-400">
              Monthly advice from our doctors. No spam, unsubscribe anytime.
            </p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3.5 text-sm font-semibold text-emerald-300">
              <CheckCircle2 className="h-5 w-5" /> You are subscribed. Welcome aboard.
            </div>
          ) : (
            <form onSubmit={onSubscribe} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-slate-400 outline-none backdrop-blur transition-colors focus:border-brand-400"
              />
              <button
                type="submit"
                className="group grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 text-white transition-all duration-300 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/40"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <div className="leading-none">
                <span className="text-xl font-extrabold text-white">Abdali</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
                  Hospital & Healthcare
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Exceptional care, better health. Trusted by thousands of patients across the region since 2001.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Departments</h4>
            <ul className="mt-5 space-y-3">
              {departments.map((d) => (
                <li key={d.id}>
                  <Link
                    to="/departments"
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">{contactInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`tel:${contactInfo.phone}`} className="text-slate-400 transition-colors hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-slate-400 transition-colors hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-slate-400">
                  {contactInfo.hours}
                  <br />
                  <span className="text-emerald-400">{contactInfo.emergencyHours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-xs text-slate-500 md:flex-row">
          <p>© 2026 Abdali Hospital & Healthcare. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
