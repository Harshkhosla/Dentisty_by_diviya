import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import { CLINIC } from '../data.js'
import clinic1 from '../assets/clinic-1.jpg'
import clinic4 from '../assets/clinic-4.jpg'
import doctor from '../assets/doctor.jpg'

export default function About() {
  return (
    <div>
      <section className="container-x pt-20 pb-16">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.02]">
          A boutique practice, thoughtfully designed around you.
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Sadhnani's Dental Care is a modern practice dedicated to exceptional care in a welcoming environment. Our
          clinic is equipped with the latest technology and staffed by highly trained professionals who prioritize your
          comfort and well-being.
        </p>
      </section>

      <section className="container-x pb-20 grid md:grid-cols-2 gap-6">
        <img src={clinic1} alt="Clinic interior" loading="lazy" className="rounded-3xl aspect-[4/5] object-cover w-full" />
        <img src={clinic4} alt="Reception" loading="lazy" className="rounded-3xl aspect-[4/5] object-cover w-full" />
      </section>

      <section className="container-x grid md:grid-cols-2 gap-14 items-center">
        <img src={doctor} alt={CLINIC.doctors} loading="lazy" className="rounded-3xl aspect-[3/4] object-cover w-full" />
        <div>
          <Eyebrow>The Founders</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.05]">
            Dr. Gunja Sadhnani &amp; Dr. Sunny Sadhnani
          </h2>
          <p className="mt-2 text-sm tracking-[0.3em] uppercase text-muted-foreground">Boutique Dentistry · Jaipur</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {CLINIC.doctors} blend advanced dental care with a personal, boutique approach. Their practice is built on a
            simple belief: every patient deserves to feel cared for, comfortable, and confident in their smile.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}
