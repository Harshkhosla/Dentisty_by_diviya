import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <div>
      <section className="container-x pt-20 pb-14">
        <Eyebrow>Our Core Services</Eyebrow>
        <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.02]">
          What Your Smile Deserves from Us
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          From routine check-ups to complex procedures, we're dedicated to keeping your oral health in top shape and
          your smile confident. Every treatment is delivered with attention to detail, advanced technology, and
          personalized care.
        </p>
      </section>

      <section className="container-x pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} title={s.title} img={s.img} text={s.short} />
        ))}
      </section>

      <section className="container-x">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl">Schedule an appointment with us today!</h2>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              Whether it's a routine visit or an advanced procedure, your oral health is in good hands with us.
            </p>
          </div>
          <Link to="/contact-us" className="rounded-full bg-primary-foreground text-primary px-7 py-4 text-sm">
            Book Appointment →
          </Link>
        </div>
      </section>
    </div>
  )
}
