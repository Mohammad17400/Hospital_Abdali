import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Star, Check, CheckCircle2, Quote, CalendarCheck,
  Microscope, HeartHandshake, Clock3, ShieldCheck,
} from 'lucide-react'
import { Page, Reveal, SectionTag, Button, StatCounter, CTABanner } from '../components/ui.jsx'
import { departments, services, doctors, testimonials, stats, blogPosts } from '../data/content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: 'easeOut' },
  }),
}

/* ============================ HERO ============================ */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <motion.img
        src="/images/hero.jpg"
        alt="Doctor consulting a patient at Abdali Hospital"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/60 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-36 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
          {/* rating */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {['/images/doctor-1.jpg', '/images/doctor-2.jpg', '/images/doctor-5.jpg'].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt="Patient"
                  className="h-10 w-10 rounded-full border-2 border-white/70 object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 font-bold text-white">4.9/5</span>
              </div>
              <p className="text-white/60">from 2,000+ patient reviews</p>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Exceptional care.
            <br />
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-300 bg-clip-text text-transparent">
              Better health.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Experience trusted healthcare delivered by skilled physicians and advanced diagnostic
            technology — at Abdali Hospital, your wellbeing comes first.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="primary">
              Book An Appointment
            </Button>
            <Button to="/doctors" variant="outlineLight">
              Find Doctors
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 backdrop-blur">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
                <span className="ml-1.5 font-bold text-white">4.9 (500+ reviews)</span>
              </div>
              <p className="text-white/50">Accredited, trusted patient care</p>
            </div>
          </motion.div>
        </motion.div>

        {/* floating appointment card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="hidden justify-end lg:flex"
        >
          <div className="animate-float w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 shadow-soft backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <img
                src="/images/doctor-5.jpg"
                alt="Dr. Adam Nasser"
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div>
                <p className="font-bold text-white">Book Appointment</p>
                <p className="text-sm text-white/60">Online consultation 24/7</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="group mt-6 flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-bold text-navy transition-colors duration-300 hover:bg-brand-50"
            >
              Let&apos;s Talk
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <div className="mt-5 flex items-center gap-2.5 text-sm text-white/70">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Our doctors are online now
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ============================ ABOUT STRIP ============================ */
function AboutStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src="/images/about-team.jpg"
                alt="Abdali Hospital medical team"
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 rounded-3xl bg-brand-500 p-7 text-white shadow-soft md:-right-8">
              <p className="text-4xl font-extrabold">25+</p>
              <p className="mt-1 text-sm text-white/80">Years of trusted care</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionTag>About Us</SectionTag>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
              We are committed to delivering exceptional medical care through skilled professionals
            </h2>
            <p className="mt-5 leading-relaxed text-slate-500">
              Since 2001, Abdali Hospital has grown from a small clinic into a full-service
              hospital — combining modern facilities, advanced diagnostics and a team of 150+
              specialists who treat every patient like family.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                'Nationally accredited facilities',
                'Advanced diagnostic technology',
                'Same-day appointment results',
                'Multilingual medical staff',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button to="/about" variant="dark">
                More About Us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* stats */}
      <Reveal delay={0.1}>
        <div className="mt-20 grid grid-cols-2 gap-10 rounded-[2rem] border border-slate-100 bg-slate-50/60 px-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ============================ DEPARTMENTS ============================ */
function DepartmentsPreview() {
  return (
    <section className="bg-slate-50/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionTag>Our Departments</SectionTag>
            <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
              Specialized care for every health need
            </h2>
          </div>
          <Button to="/departments" variant="ghost" className="font-bold">
            View All Departments
          </Button>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.id} delay={0.08 * i}>
              <Link
                to="/departments"
                className="group block overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================ SERVICES ============================ */
function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionTag>Our Services</SectionTag>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
              Excellence in every medical service
            </h2>
          </Reveal>
          <div className="mt-9 space-y-3">
            {services.slice(0, 5).map((s, i) => (
              <Reveal key={s.title} delay={0.07 * i}>
                <div className="group flex items-center gap-5 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-brand-50 p-3.5 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{s.title}</h3>
                    <p className="mt-0.5 text-sm text-slate-500">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button to="/services" variant="dark">
                Explore All Services
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src="/images/care.jpg"
                alt="Nurse caring for a patient"
                className="h-[560px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -left-4 top-10 rounded-2xl border border-slate-100 bg-white p-5 shadow-card md:-left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">24/7 Emergency</p>
                  <p className="text-xs text-slate-500">Always open, always ready</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Microscope className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">Advanced Lab</p>
                  <p className="text-xs text-slate-500">Same-day results</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ============================ WHY US ============================ */
function WhyUs() {
  const features = [
    { icon: Microscope, title: 'Advanced Technology', text: 'MRI, CT, digital X-ray and a fully automated laboratory for precise diagnosis.' },
    { icon: HeartHandshake, title: 'Expert Specialists', text: '150+ internationally trained doctors across every major specialty.' },
    { icon: Clock3, title: '24/7 Emergency', text: 'Round-the-clock emergency and ICU teams with rapid response times.' },
    { icon: ShieldCheck, title: 'Trusted Healthcare', text: 'Accredited, transparent and trusted by 120,000+ patients since 2001.' },
  ]
  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <SectionTag light>Why Abdali</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
            Why patients trust our hospital most
          </h2>
        </Reveal>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-brand-400/40 hover:bg-white/10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/20 text-brand-300 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white group-hover:rotate-6">
                  <f.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================ DOCTORS ============================ */
function DoctorsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionTag>Meet Our Team</SectionTag>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Skilled specialists, dedicated to you
          </h2>
        </div>
        <Button to="/doctors" variant="ghost" className="font-bold">
          View All Doctors
        </Button>
      </Reveal>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.slice(0, 4).map((doc, i) => (
          <Reveal key={doc.name} delay={0.08 * i}>
            <div className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />
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
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ============================ TESTIMONIALS ============================ */
function Testimonials() {
  return (
    <section className="bg-slate-50/70 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Stories from our patients
          </h2>
        </Reveal>
        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * i}>
              <div className="group relative h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                <Quote className="h-9 w-9 text-brand-100 transition-colors duration-500 group-hover:text-brand-500/30" />
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-slate-600">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================ BLOG ============================ */
function BlogPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionTag>Health Blog</SectionTag>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Latest articles & health tips
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-7 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal key={post.title} delay={0.08 * i}>
            <article className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold text-brand-600 backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{post.date}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-brand-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                  Read Article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ============================ PAGE ============================ */
export default function Home() {
  return (
    <Page>
      <Hero />
      <AboutStrip />
      <DepartmentsPreview />
      <ServicesSection />
      <WhyUs />
      <DoctorsPreview />
      <Testimonials />
      <BlogPreview />
      <CTABanner />
    </Page>
  )
}
