import { Link } from 'react-router-dom'

export default function ServiceCard({ title, img, text, withLink = false }) {
  return (
    <article className="group rounded-3xl bg-cream border border-border/50 p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-serif text-2xl mt-6">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
      {withLink && (
        <Link
          to="/services"
          className="mt-5 inline-flex items-center gap-1 text-sm underline underline-offset-4 decoration-gold"
        >
          Learn More →
        </Link>
      )}
    </article>
  )
}
