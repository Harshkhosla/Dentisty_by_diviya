import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import { CLINIC } from '../data.js'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt={CLINIC.name} className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/40" />
            <div>
              <p className="font-serif text-2xl">{CLINIC.name}</p>
              <p className="text-xs tracking-[0.3em] uppercase opacity-70">Boutique Dentistry · Jaipur</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm opacity-80 leading-relaxed">
            Precision dentistry with personalized boutique care. Led by {CLINIC.doctors}.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4">Visit</p>
          <p className="text-sm opacity-90 leading-relaxed">{CLINIC.address}</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-4">Contact</p>
          <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`} className="block text-sm opacity-90">
            {CLINIC.phone}
          </a>
          <a href={`mailto:${CLINIC.email}`} className="block text-sm opacity-90 mt-1">
            {CLINIC.email}
          </a>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <Link to="/about-us" className="opacity-80 hover:opacity-100">About</Link>
            <Link to="/services" className="opacity-80 hover:opacity-100">Services</Link>
            <Link to="/contact-us" className="opacity-80 hover:opacity-100">Book Appointment</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-wrap gap-2 justify-between text-xs opacity-60">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>{CLINIC.hours}</p>
        </div>
      </div>
    </footer>
  )
}
