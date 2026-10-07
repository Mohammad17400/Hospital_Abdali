import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, MessageCircle } from 'lucide-react'
import { Page } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <Page>
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-300 bg-clip-text text-[8rem] font-black leading-none tracking-tighter text-transparent md:text-[12rem]"
          >
            404
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">This page is off the charts</h2>
            <p className="mx-auto mt-3 max-w-md text-white/60">
              The page you are looking for does not exist or may have been moved. Let us get you
              back to safety.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <Home className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-navy"
              >
                <MessageCircle className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Page>
  )
}
