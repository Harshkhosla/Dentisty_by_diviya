import cosmetic from './assets/service-cosmetic.jpg'
import preventive from './assets/service-preventive.jpg'
import child from './assets/service-child.jpg'
import rootcanal from './assets/service-rootcanal.jpg'
import biomimetic from './assets/service-biomimetic.jpg'
import makeover from './assets/service-makeover.jpg'
import braces from './assets/service-braces.jpg'
import implants from './assets/service-implants.jpg'
import rehab from './assets/service-rehab.jpg'
import wisdom from './assets/service-wisdom.jpg'
import whitening from './assets/service-whitening.jpg'

export const CLINIC = {
  name: "Dentistry by Divya",
  doctors: 'Dr. Divya',
  address:
    '5/97 A, Bhawani Singh Lane, C-Scheme, Jaipur',
  phone: '+91 96600 25726',
  // Appointment requests are sent here via WhatsApp (digits only, with country code).
  whatsapp: '919660025726',
  email: 'dentistrybydivya1928@gmail.com',
  hours: 'Mon–Fri · 10:00 AM – 7:00 PM',
  mapsUrl: 'https://maps.google.com/?q=5%2F97+A+Bhawani+Singh+Lane+C-Scheme+Jaipur',
}

export const SERVICE_TAGS = [
  'Cosmetic Dentistry',
  'Preventive & Restorative Care',
  'Child Dentistry',
  'Root Canal Treatment',
  'Biomimetic Dentistry',
  'Smile Makeovers',
  'Orthodontic Braces & Clear Aligners',
  'Dental Implants',
]

// `home` is the longer copy used on the home page; `short` is used on /services.
export const SERVICES = [
  {
    title: 'Cosmetic Dentistry',
    img: cosmetic,
    home: "Enhance your smile's appearance with advanced aesthetic solutions tailored to your facial harmony.",
    short: "Enhance your smile's appearance with advanced aesthetic solutions tailored to your facial harmony.",
  },
  {
    title: 'Preventive & Restorative Care',
    img: preventive,
    home: 'From cleanings to fillings — we focus on prevention first, and precision when restoration is needed.',
    short: 'From cleanings to fillings — prevention first, precision when restoration is needed.',
  },
  {
    title: 'Child Dentistry',
    img: child,
    home: 'Gentle, fun, and fear-free dental care for kids — helping them build lifelong healthy habits.',
    short: 'Gentle, fun, and fear-free dental care for kids — building lifelong healthy habits.',
  },
  {
    title: 'Root Canal Treatment',
    img: rootcanal,
    home: 'Save your natural tooth with our gentle, anesthesia-assisted, pain-free root canal procedures.',
    short: 'Save your natural tooth with our gentle, anesthesia-assisted, pain-free procedures.',
  },
  {
    title: 'Biomimetic Dentistry',
    img: biomimetic,
    home: 'Preserve your natural tooth structure with cutting-edge, minimally invasive techniques inspired by nature.',
    short: 'Preserve your natural tooth structure with cutting-edge, minimally invasive techniques.',
  },
  {
    title: 'Smile Makeovers',
    img: makeover,
    home: 'Transform your smile with custom-designed veneers, crowns, and dentures that look and feel completely natural.',
    short: 'Custom-designed veneers, crowns, and dentures that look and feel natural.',
  },
  {
    title: 'Orthodontic Braces & Clear Aligners',
    img: braces,
    short: 'Straighten your teeth with aesthetic braces or near-invisible clear aligners.',
  },
  {
    title: 'Dental Implants',
    img: implants,
    short: 'Durable, natural-looking replacements for missing teeth.',
  },
  {
    title: 'Full Mouth Rehabilitation',
    img: rehab,
    short: 'Comprehensive treatment plans that restore function, aesthetics, and balance to your entire mouth.',
  },
  {
    title: 'Wisdom Tooth Extraction',
    img: wisdom,
    short: 'Safe, comfortable extractions to relieve pain and prevent future problems.',
  },
  {
    title: 'Teeth Whitening',
    img: whitening,
    short: 'In-clinic or take-home whitening for a brighter smile that lasts.',
  },
]

export const TESTIMONIALS = [
  {
    title: 'Wonderful Experience!',
    quote:
      "Dentistry by Divya is unlike any dental clinic I've been to. Dr. Divya and the team made me feel so comfortable, and my smile has never looked better!",
    name: 'Riya S.',
  },
  {
    title: 'Highly Recommended!',
    quote:
      'From the moment I walked in, the atmosphere was warm and welcoming. The treatment was precise, pain-free, and personalized. I actually look forward to my visits!',
    name: 'Amit K.',
  },
  {
    title: 'Amazing Experience!',
    quote:
      'Dr. Divya truly creates a personal experience for your teeth. Every step was explained, and I felt confident throughout my smile makeover.',
    name: 'Sneha P.',
  },
]
