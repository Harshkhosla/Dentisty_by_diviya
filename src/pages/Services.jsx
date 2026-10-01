import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <div>
      <section className="container-x pt-20 pb-14">
        <Eyebrow>Our Services</Eyebrow>
        <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.02]">
          A full spectrum of care, delivered the boutique way.
        </h1>
      </section>

      <section className="container-x pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} title={s.title} img={s.img} text={s.short} />
        ))}
      </section>

      <section className="container-x">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl max-w-xl">Not sure what you need? Let's talk.</h2>
          <Link to="/contact-us" className="rounded-full bg-primary-foreground text-primary px-7 py-4 text-sm">
            Book Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}
