import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import { CLINIC } from '../data.js'
import clinic1 from '../assets/clinic-1.jpg'
import clinic4 from '../assets/clinic-4.jpg'
import doctor from '../assets/doctor.jpg'

const PILLARS = [
  {
    title: 'Our Vision',
    text: 'To be the most trusted dental destination — one that inspires confidence and transforms the way people experience dental care.',
  },
  {
    title: 'Our Mission',
    text: 'To deliver world-class dentistry through innovation, education, and empathy, giving every patient a seamless journey from consultation to care.',
  },
]

export default function About() {
  return (
    <div>
      <section className="container-x pt-20 pb-16">
        <Eyebrow>About Us</Eyebrow>
        <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.02]">
          Because Every Smile Tells a Story.
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          At Dentistry by Divya, we blend clinical expertise with aesthetic artistry and boutique comfort. Ours is a
          modern practice dedicated to exceptional care in a welcoming environment — equipped with the latest
          technology and staffed by highly trained professionals who prioritize your comfort and well-being.
        </p>
      </section>

      <section className="container-x pb-20 grid md:grid-cols-2 gap-6">
        <img src={clinic1} alt="Clinic interior" loading="lazy" className="rounded-3xl aspect-[4/5] object-cover w-full" />
        <img src={clinic4} alt="Reception" loading="lazy" className="rounded-3xl aspect-[4/5] object-cover w-full" />
      </section>

      <section className="container-x pb-20 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.05]">Expanding Care, Building Trust</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Our story is deeply rooted in Jaipur. We aim to grow alongside our patients, building lasting
            relationships founded on trust and care.
          </p>
          <p>
            Every healthy, confident smile we help create is our greatest achievement — and we remain committed to
            serving our community for many years to come.
          </p>
        </div>
      </section>

      <section className="container-x pb-20 grid md:grid-cols-2 gap-6">
        {PILLARS.map((p) => (
          <div key={p.title} className="rounded-3xl bg-cream border border-border/50 p-8 md:p-10">
            <div className="h-12 w-12 rounded-full bg-gold/25 border border-gold/40 grid place-items-center font-serif">
              ✦
            </div>
            <h3 className="font-serif text-3xl mt-6">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="container-x grid md:grid-cols-2 gap-14 items-center">
        <img src={doctor} alt={CLINIC.doctors} loading="lazy" className="rounded-3xl aspect-[3/4] object-cover w-full" />
        <div>
          <Eyebrow>Meet the Smile Curator</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-[1.05]">
            Dr. Divya
          </h2>
          <p className="mt-2 text-sm tracking-[0.3em] uppercase text-muted-foreground">Boutique Dentistry · Jaipur</p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Dentistry by Divya, smiles are crafted with care, precision, and a touch of elegance. {CLINIC.doctors}{' '}
            blends advanced dental care with a personal, boutique approach — with the goal of making every patient feel
            cared for, comfortable, and confident in their smile.
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
