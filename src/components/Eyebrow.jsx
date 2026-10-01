export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-xs tracking-[0.35em] uppercase text-muted-foreground ${className}`}>{children}</p>
  )
}
