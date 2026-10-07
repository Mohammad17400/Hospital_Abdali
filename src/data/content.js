import {
  HeartPulse, Brain, Bone, Sparkles, Smile, Baby,
  Siren, Stethoscope, Microscope, Scissors, Pill,
} from 'lucide-react'

export const contactInfo = {
  phone: '+962 6 500 1234',
  emergency: '+962 6 500 9111',
  email: 'care@abdali-hospital.com',
  address: 'Abdali Boulevard, Amman, Jordan',
  hours: 'Saturday – Thursday · 8:00 – 22:00',
  emergencyHours: 'Emergency department: open 24/7',
}

export const stats = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 150, suffix: '+', label: 'Expert Doctors' },
  { value: 120, suffix: 'K+', label: 'Patients Cared For' },
  { value: 98, suffix: '%', label: 'Patient Satisfaction' },
]

export const departments = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: HeartPulse,
    image: '/images/dept-cardiology.jpg',
    tagline: 'Complete heart care, from prevention to advanced intervention.',
    description:
      'Our cardiology department combines advanced diagnostic technology with internationally trained specialists to prevent, detect and treat every kind of heart condition — all under one roof.',
    points: ['Cardiac screening & diagnostics', 'Interventional cardiology', '24/7 chest-pain emergency unit'],
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: Brain,
    image: '/images/dept-neurology.jpg',
    tagline: 'Expert care for the brain, spine and nervous system.',
    description:
      'From stroke response to chronic migraine care, our neurologists use MRI, EEG and modern neuro-rehabilitation to diagnose and treat disorders of the brain and nervous system.',
    points: ['Stroke & epilepsy care', 'MRI & EEG diagnostics', 'Memory & headache clinics'],
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: Bone,
    image: '/images/dept-orthopedics.jpg',
    tagline: 'Restoring movement with advanced bone & joint care.',
    description:
      'Our orthopedic surgeons cover everything from sports injuries to full joint replacement, with dedicated physiotherapy to get you back on your feet faster.',
    points: ['Joint replacement surgery', 'Sports injury clinic', 'Pediatric orthopedics'],
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    icon: Sparkles,
    image: '/images/dept-dermatology.jpg',
    tagline: 'Healthy skin, hair and nails — medical and cosmetic.',
    description:
      'Medical dermatology meets modern cosmetic care: skin cancer screening, allergy testing, laser treatments and personalized skin-health plans for every age.',
    points: ['Skin cancer screening', 'Laser & cosmetic care', 'Allergy patch testing'],
  },
  {
    id: 'dentistry',
    name: 'Dentistry',
    icon: Smile,
    image: '/images/dept-dentistry.jpg',
    tagline: 'Modern dental care for the whole family.',
    description:
      'From routine cleanings to implants and orthodontics, our dental clinic uses digital imaging and painless techniques to keep every smile healthy.',
    points: ['Implants & oral surgery', 'Orthodontics & braces', 'Pediatric dentistry'],
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    image: '/images/dept-pediatrics.jpg',
    tagline: 'Gentle, specialized care for infants and children.',
    description:
      'Our pediatric team watches over your child from the very first day — vaccination programs, growth tracking, neonatal care and same-day sick visits.',
    points: ['Neonatal intensive care', 'Vaccination programs', 'Growth & development follow-up'],
  },
]

export const services = [
  { icon: Siren, title: 'Emergency Care', description: '24/7 emergency department with rapid response teams and trauma-ready facilities.' },
  { icon: Stethoscope, title: 'General Medicine', description: 'Comprehensive primary care, annual checkups and chronic disease management.' },
 { icon: HeartPulse, title: "Women's Health", description: 'Obstetrics, gynecology, prenatal care and breast health screening programs.' },
  { icon: Baby, title: 'Pediatrics', description: 'Child-focused care from newborn screening to adolescent health.' },
  { icon: HeartPulse, title: 'Cardiology', description: 'Heart screening, ECG, echocardiography and interventional procedures.' },
  { icon: Microscope, title: 'Diagnostics & Lab', description: 'Full-service laboratory, imaging and same-day test results.' },
  { icon: Scissors, title: 'Surgery', description: 'Modern operating theaters covering general, orthopedic and minimally invasive surgery.' },
  { icon: Pill, title: 'Pharmacy', description: 'In-house pharmacy stocked with genuine medication, open around the clock.' },
]

export const doctors = [
  { name: 'Dr. Sarah Mansour', role: 'Head of Cardiology', dept: 'Cardiology', image: '/images/doctor-1.jpg', exp: '15 yrs experience' },
  { name: 'Dr. Omar Haddad', role: 'Orthopedic Surgeon', dept: 'Orthopedics', image: '/images/doctor-2.jpg', exp: '12 yrs experience' },
  { name: 'Dr. Lina Khalil', role: 'Senior Neurologist', dept: 'Neurology', image: '/images/doctor-3.jpg', exp: '11 yrs experience' },
  { name: 'Dr. Rania Saleh', role: 'Pediatric Specialist', dept: 'Pediatrics', image: '/images/doctor-4.jpg', exp: '10 yrs experience' },
  { name: 'Dr. Adam Nasser', role: 'General Practitioner', dept: 'General Medicine', image: '/images/doctor-5.jpg', exp: '8 yrs experience' },
  { name: 'Dr. Maya Awad', role: 'Consultant Dermatologist', dept: 'Dermatology', image: '/images/doctor-6.jpg', exp: '9 yrs experience' },
]

export const testimonials = [
  {
    name: 'Huda Al-Khatib',
    role: 'Cardiology patient',
    text: 'The cardiology team detected my condition early and treated it the same week. I have never felt more cared for in a hospital.',
    rating: 5,
  },
  {
    name: 'Mohammed Al-Rashid',
    role: 'Orthopedics patient',
    text: 'After my knee replacement the physiotherapy team had me walking within days. Professional, kind and extremely organized.',
    rating: 5,
  },
  {
    name: 'Rana Abdelaziz',
    role: 'Pediatrics parent',
    text: 'The pediatricians are so gentle with my children. Appointments start on time and the follow-up calls after visits are a lovely touch.',
    rating: 5,
  },
]

export const pricingPlans = [
  {
    name: 'Essential Checkup',
    price: 49,
    period: 'one-time',
    description: 'A complete baseline health screening.',
    features: ['General health screening', 'Blood work & vitals', 'Doctor consultation', 'Digital health report'],
    popular: false,
  },
  {
    name: 'Standard Care',
    price: 99,
    period: 'one-time',
    description: 'Deeper screening for total peace of mind.',
    features: ['Everything in Essential', 'Cardiac risk assessment', 'X-ray & ultrasound', 'Personalized diet plan'],
    popular: true,
  },
  {
    name: 'Premium Family',
    price: 199,
    period: 'one-time',
    description: 'Full-body care for you and your family.',
    features: ['Everything in Standard', 'Full body MRI', 'Specialist referrals', '12-month follow-up plan'],
    popular: false,
  },
]

export const faqs = [
  { q: 'How do I book an appointment?', a: 'You can book online through our contact page, call our reception at +962 6 500 1234, or visit the hospital in person. Online requests are confirmed within 2 business hours.' },
  { q: 'Do you accept health insurance?', a: 'Yes. We work with all major insurance providers. Bring your insurance card and ID to your visit and our billing team will handle the paperwork for you.' },
  { q: 'Is the emergency department really open 24/7?', a: 'Absolutely. Our emergency department, pharmacy and laboratory operate around the clock, every day of the year, with specialists on call.' },
  { q: 'What are the visiting hours?', a: 'General wards welcome visitors daily from 10:00 to 21:00. Intensive care units have dedicated visiting windows — our staff will guide you on arrival.' },
  { q: 'Can I get my medical records or lab results online?', a: 'Yes. All lab results are delivered digitally through our patient portal, and copies of medical records can be requested at the reception desk with a valid ID.' },
  { q: 'Do you offer teleconsultations?', a: 'Yes. Follow-up consultations and minor complaints can be handled via video visit. Book a "Teleconsultation" slot through the contact form.' },
  { q: 'Is parking available at the hospital?', a: 'Free on-site parking is available for patients and visitors, including accessible parking spaces near the main entrance.' },
  { q: 'Do I need a referral to see a specialist?', a: 'No referral is needed. You can book directly with any of our specialists, though some insurance plans may require one for coverage.' },
]

export const blogPosts = [
  {
    title: '10 habits for a healthier heart',
    category: 'Cardiology',
    date: 'Oct 2, 2026',
    image: '/images/dept-cardiology.jpg',
    excerpt: 'Small daily changes — from walking to sleep — can cut your cardiac risk dramatically. Here is what our cardiologists recommend.',
  },
  {
    title: 'When should you see a neurologist?',
    category: 'Neurology',
    date: 'Sep 24, 2026',
    image: '/images/dept-neurology.jpg',
    excerpt: 'Headaches, numbness, memory lapses — which symptoms deserve a specialist visit and which are harmless? A neurologist explains.',
  },
  {
    title: 'A parent’s guide to child vaccinations',
    category: 'Pediatrics',
    date: 'Sep 15, 2026',
    image: '/images/dept-pediatrics.jpg',
    excerpt: 'Our pediatric team breaks down the recommended vaccine schedule, common side effects and why timing matters.',
  },
]

export const processSteps = [
  { title: 'Book an appointment', description: 'Choose a department and a time that suits you — online, by phone or in person.' },
  { title: 'Consultation & diagnosis', description: 'Meet your specialist, run any needed tests and get a clear diagnosis.' },
  { title: 'Personalized treatment plan', description: 'Receive a treatment plan built around your condition, lifestyle and budget.' },
  { title: 'Follow-up care', description: 'We stay with you after treatment with scheduled checkups and direct contact.' },
]
