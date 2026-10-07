import { Page, PageHeader, Reveal } from '../components/ui.jsx'

const privacySections = [
  {
    title: 'Information we collect',
    body: 'We collect the information you provide when booking appointments, filling forms or contacting us — such as your name, contact details, date of birth and medical history. We also collect technical data like your device and browser type to improve the website.',
  },
  {
    title: 'How we use your information',
    body: 'Your information is used to schedule and manage appointments, deliver medical services, process billing and insurance claims, and — with your consent — send health tips and hospital updates. We never sell your personal data to third parties.',
  },
  {
    title: 'Medical records confidentiality',
    body: 'All medical records are stored on encrypted systems with strict access controls. Only your treating team and authorized staff can view your file, in line with national health-data regulations.',
  },
  {
    title: 'Data retention & your rights',
    body: 'We keep records only as long as legally required. You may request a copy of your data, correct inaccuracies, or ask for deletion of non-medical data at any time by contacting care@abdali-hospital.com.',
  },
  {
    title: 'Cookies',
    body: 'This website uses minimal cookies for essential functionality and anonymous analytics. You can disable cookies in your browser settings without losing access to core content.',
  },
]

const termsSections = [
  {
    title: 'Using this website',
    body: 'This website provides general information about Abdali Hospital and its services. Content is for informational purposes only and is not a substitute for professional medical advice, diagnosis or treatment.',
  },
  {
    title: 'Appointments',
    body: 'Appointment requests made online are confirmed by our scheduling team within 2 business hours. Please arrive 15 minutes early and bring a valid ID and insurance card where applicable.',
  },
  {
    title: 'Cancellations',
    body: 'We kindly ask you to cancel or reschedule at least 24 hours in advance so we can offer the slot to another patient. Repeated no-shows may affect online booking privileges.',
  },
  {
    title: 'Payments & pricing',
    body: 'Published package prices are guaranteed in writing before treatment. For insured visits, patient responsibility (co-pay) is confirmed before your appointment. Emergency care is never delayed due to payment concerns.',
  },
  {
    title: 'Intellectual property',
    body: 'All content on this website — text, imagery and branding — belongs to Abdali Hospital & Healthcare and may not be reproduced without written permission.',
  },
  {
    title: 'Limitation of liability',
    body: 'While we strive for accuracy, the hospital is not liable for decisions made solely based on website content. Always consult a qualified physician for medical concerns. In an emergency, call +962 6 500 9111.',
  },
]

function LegalPage({ title, subtitle, sections }) {
  return (
    <Page>
      <PageHeader title={title} subtitle={subtitle} image="/images/building.jpg" />
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i}>
              <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                <h2 className="flex items-center gap-3 text-lg font-bold text-navy">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-sm font-extrabold text-brand-600">
                    {i + 1}
                  </span>
                  {s.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-slate-400">
            Last updated: October 2026 · Questions? Email care@abdali-hospital.com
          </p>
        </Reveal>
      </section>
    </Page>
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How Abdali Hospital collects, uses and protects your personal and medical information."
      sections={privacySections}
    />
  )
}

export function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The terms that govern your use of this website and our services."
      sections={termsSections}
    />
  )
}
