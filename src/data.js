import cosmetic from './assets/service-cosmetic.jpg'
import digital from './assets/service-digital.jpg'
import preventive from './assets/service-preventive.jpg'
import child from './assets/service-child.jpg'
import rootcanal from './assets/service-rootcanal.jpg'
import biomimetic from './assets/service-biomimetic.jpg'

export const CLINIC = {
  name: "Dentistry by Divya",
  doctors: 'Dr. Divya',
  address:
    'Shop No 22, Rupal Market, Opposite Lakshya Indane Gas Agency, Ramnagariya Road, Jagatpura Getor, Jaipur',
  phone: '+91 88758 63838',
  email: 'hello@sadhnanisdental.com',
  hours: 'Mon–Fri · 10:00 AM – 7:00 PM',
  mapsUrl: 'https://maps.google.com/?q=Rupal+Market+Ramnagariya+Road+Jagatpura+Jaipur',
}

export const SERVICE_TAGS = [
  'Cosmetic Dentistry',
  'Digital Dentistry',
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
    title: 'Digital Dentistry',
    img: digital,
    home: 'Enjoy faster, more precise treatments using 3D scanning, digital X-rays, and computer-aided design systems.',
    short: 'Faster, more precise treatments using 3D scanning, digital X-rays, and computer-aided design.',
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
    img: cosmetic,
    short: 'Ceramic veneers and crowns crafted for a natural, radiant result.',
  },
  {
    title: 'Orthodontic Braces & Clear Aligners',
    img: digital,
    short: 'Modern orthodontics — traditional braces and near-invisible aligners.',
  },
  {
    title: 'Dental Implants',
    img: biomimetic,
    short: 'Replace missing teeth with lifelike, long-lasting implant solutions.',
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
      'Dr. Divya truly creates a boutique experience for your teeth. Every step was explained, and I felt confident throughout my smile makeover.',
    name: 'Sneha P.',
  },
]
