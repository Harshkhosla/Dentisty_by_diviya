import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { CLINIC, SERVICES, SERVICE_TAGS, TESTIMONIALS } from '../data.js'
import logo from '../assets/logo.jpeg'
import heroSmile from '../assets/hero-smile.jpg'
import clinic1 from '../assets/clinic-1.jpg'
import clinic2 from '../assets/clinic-2.jpg'
import clinic3 from '../assets/clinic-3.jpg'
import clinic4 from '../assets/clinic-4.jpg'
import doctor from '../assets/doctor.jpg'

const CLINIC_PHOTOS = [clinic1, clinic2, clinic3, clinic4, clinic1, clinic2]

const HIGHLIGHTS = [
  'Comprehensive Services',
  'Experienced Professionals',
  'State-of-the-Art Technology',
  'Personalized Treatment Plans',
  'Comfortable Relaxing Environment',
]

const VALUES = [
  {
    title: 'Patient-Centered Care',
    text: "Every patient is unique, and so is every treatment we provide. From the moment you step in, you'll find a supportive environment designed to ease anxiety and make every visit a positive one.",
  },
  {
    title: 'Excellence Through Innovation',
    text: "With advanced techniques and the latest dental innovations, Sadhnani's Dental Care ensures precise, pain-free, and lasting results. Our goal is to combine modern expertise with boutique care, giving you a smile that's as healthy as it is confident.",
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="container-x pt-14 md:pt-20 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.98] tracking-tight">
            Where Precision Meets Personalized Care
          </h1>
          <div className="md:pl-6">
            <p className="text-lg leading-relaxed text-muted-foreground max-w-md">
              Led by {CLINIC.doctors}, we combine years of expertise with advanced digital technology to deliver
              gentle, lasting results for your smile in Jaipur.
            </p>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm"
            >
              Book Appointment <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.5fr_1fr] gap-6">
          <div className="rounded-3xl bg-cream p-8 md:p-12 border border-border/50">
            <h2 className="font-serif text-3xl md:text-4xl max-w-xl">
              We provide boutique dental care, tailored just for you.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold/60 text-foreground/80 px-5 py-2 text-sm bg-background/60"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-10 max-w-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Precision dentistry with personalized boutique care.</strong> Led by{' '}
              <strong className="text-foreground">{CLINIC.doctors}</strong>, we offer advanced dental solutions in a
              modern, comfortable, and patient-friendly environment.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-secondary min-h-[440px]">
            <img src={heroSmile} alt="Boutique dental care" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-primary-foreground">
              <p className="font-serif text-2xl">Services</p>
              <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            </div>
            <p className="absolute bottom-6 left-6 right-16 text-primary-foreground text-sm leading-relaxed">
              At Sadhnani's Dental Care, every smile deserves precision, comfort, and elegance.
            </p>
            <Link
              to="/services"
              aria-label="View services"
              className="absolute bottom-6 right-6 h-12 w-12 rounded-full bg-background text-foreground grid place-items-center"
            >
              →
            </Link>
          </div>
        </div>
      </section>

      {/* About clinic */}
      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <Eyebrow>About Clinic</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-[1.05]">
              Sadhnani's Dental Care is a modern practice dedicated to exceptional care in a welcoming environment.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              Our clinic is equipped with the latest technology and staffed by highly trained professionals who
              prioritize your comfort and well-being.
            </p>
          </div>
          <div className="space-y-8">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-5">
                <div className="h-12 w-12 rounded-full bg-gold/25 border border-gold/40 grid place-items-center shrink-0 font-serif">
                  ✦
                </div>
                <div>
                  <h3 className="font-serif text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-6 py-3 text-sm"
            >
              About Our Clinic →
            </Link>
          </div>
        </div>

        {/* Infinite photo marquee: list is doubled so the -50% translate loops seamlessly */}
        <div className="mt-16 -mx-6 md:-mx-10 overflow-hidden">
          <div className="flex gap-4 animate-marquee w-max">
            {[...CLINIC_PHOTOS, ...CLINIC_PHOTOS].map((src, i) => (
              <div key={i} className="w-[320px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
                <img src={src} alt="Clinic" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-2xl leading-[1.05]">
              We are committed to providing a range of dental services.
            </h2>
          </div>
          <Link to="/services" className="rounded-full border border-primary px-6 py-3 text-sm">
            All Services →
          </Link>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.title} title={s.title} img={s.img} text={s.home} withLink />
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden bg-secondary">
              <img src={doctor} alt={CLINIC.doctors} loading="lazy" className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 rounded-full bg-cream border border-border/50 px-6 py-4">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase">Dr. Gunja &amp; Dr. Sunny Sadhnani</p>
                <p className="text-xs text-muted-foreground mt-1">FOUNDERS · SADHNANI'S DENTAL CARE</p>
              </div>
              <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.02]">Meet the Smile Curators</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              {CLINIC.doctors} are dedicated to blending advanced dental care with a personal, boutique approach. Their
              goal is simple: to make every patient feel cared for, comfortable, and confident in their smile.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container-x">
          <p className="text-xs tracking-[0.35em] uppercase opacity-70">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-6xl mt-3 max-w-2xl leading-[1.02]">Smiles in Their Own Words</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 p-8">
                <p className="font-serif text-2xl">"{t.title}"</p>
                <blockquote className="mt-4 text-sm opacity-80 leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-primary-foreground/10 pt-6">
                  <div className="h-11 w-11 rounded-full bg-gold/40 grid place-items-center font-serif text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm">{t.name}, Jaipur</p>
                    <p className="text-xs opacity-60">Orthodontic Service</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Book a visit */}
      <section className="container-x py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Book a Visit</Eyebrow>
            <h2 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.02]">
              Come visit us and experience compassionate care.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              Whether it's your first visit or you're a returning patient, our team is here to provide you with
              personalized care in a relaxed and friendly environment.
            </p>
            <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
              Experience a boutique for your teeth, only at Sadhnani's Dental Care.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img src={clinic3} alt="Dental clinic" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x">
        <div className="rounded-3xl bg-cream border border-border/50 p-10 md:p-16 grid md:grid-cols-[auto_1fr_auto] items-center gap-8">
          <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center text-2xl">
            ✆
          </div>
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">Schedule your visit with us today!</h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Our dedicated team at Sadhnani's Dental Care is here to provide you with expert dental care in a
              comfortable and welcoming environment.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm whitespace-nowrap text-center"
          >
            Book Appointment →
          </Link>
        </div>
      </section>
    </div>
  )
}
