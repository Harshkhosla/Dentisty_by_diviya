import { useState } from 'react'
import Eyebrow from '../components/Eyebrow.jsx'
import { CLINIC } from '../data.js'

const FIELDS = [
  { name: 'name', label: 'Full name', required: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'date', label: 'Preferred date', type: 'date' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend yet: hand the request off to the clinic's inbox via the user's mail client.
  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const body = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || '-'}`,
      `Preferred date: ${data.date || '-'}`,
      '',
      data.message || '',
    ].join('\n')
    window.location.href = `mailto:${CLINIC.email}?subject=${encodeURIComponent(
      'Appointment request',
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div>
      <section className="container-x pt-20 pb-10">
        <Eyebrow>Get in Touch</Eyebrow>
        <h1 className="font-serif text-5xl md:text-7xl mt-4 max-w-4xl leading-[1.02]">
          We're committed to providing you with care and support.
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Whether you have questions about our services, need to schedule an appointment, or want to learn more about
          improving your oral health, we're just a message or call away. Our team is available Monday through Friday,
          10:00 AM to 7:00 PM.
        </p>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-10">
        <div className="rounded-3xl bg-cream border border-border/50 p-8 md:p-10">
          <h2 className="font-serif text-3xl">Visit us</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dentistry by Divya
            <br />
            Shop No 22, Rupal Market,
            <br />
            Opposite Lakshya Indane Gas Agency,
            <br />
            Ramnagariya Road, Jagatpura Getor, Jaipur
          </p>
          <div className="mt-8 space-y-6">
            <InfoRow label="Phone">
              <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}>{CLINIC.phone}</a>
            </InfoRow>
            <InfoRow label="Email">
              <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
            </InfoRow>
            <InfoRow label="Hours">{CLINIC.hours}</InfoRow>
          </div>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full border border-primary px-6 py-3 text-sm"
          >
            Open in Maps →
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
          <h2 className="font-serif text-3xl">Book an appointment</h2>
          <div className="mt-6 space-y-4">
            {FIELDS.map((f) => (
              <label key={f.name} className="block">
                <span className="text-xs tracking-[0.25em] uppercase opacity-70">{f.label}</span>
                <input name={f.name} type={f.type || 'text'} required={f.required} className="input mt-2" />
              </label>
            ))}
            <label className="block">
              <span className="text-xs tracking-[0.25em] uppercase opacity-70">Message</span>
              <textarea name="message" rows={4} className="input mt-2 resize-none" />
            </label>
            <button className="mt-2 rounded-full bg-primary-foreground text-primary px-7 py-4 text-sm w-full">
              Send request
            </button>
            {sent && (
              <p className="text-sm opacity-80 text-center">
                Thanks! Your email app should open with the request — just hit send.
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  )
}

function InfoRow({ label, children }) {
  return (
    <p>
      <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
      <br />
      {children}
    </p>
  )
}
