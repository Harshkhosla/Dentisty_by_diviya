import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact-us', label: 'Contact' },
]

const navClass = ({ isActive }) =>
  `px-5 py-2 text-sm rounded-full transition-colors ${
    isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Dentistry by Divya"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="font-serif text-lg leading-tight">
            Dentistry
            <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-1 font-sans">
              by Divya
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-cream/70 border border-border/60 px-2 py-2 shadow-sm">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className={navClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact-us"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm"
        >
          Book Appointment
        </Link>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-full border border-border p-3"
        >
          <span className={`block w-5 h-px bg-foreground transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : 'mb-1.5'}`} />
          <span className={`block w-5 h-px bg-foreground transition-transform ${open ? 'translate-y-[-3.5px] -rotate-45 mt-1.5' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end className={navClass}>
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact-us"
              className="mt-3 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm text-center"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
