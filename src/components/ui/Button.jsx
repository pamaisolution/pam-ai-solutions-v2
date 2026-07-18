import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-hover shadow-premium',
  secondary: 'bg-surface text-ink hover:bg-secondary',
  outline: 'border-2 border-primary/30 text-ink hover:bg-primary/10 hover:border-primary',
}

/**
 * Polymorphic button: renders a <Link>, <a>, or <button> depending on props.
 */
export default function Button({
  variant = 'primary',
  to,
  href,
  icon: Icon,
  iconPosition = 'right',
  className,
  children,
  ...rest
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2.5 rounded-btn px-8 py-4 font-heading font-bold text-sm transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5',
    VARIANTS[variant] ?? VARIANTS.primary,
    className
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} className="shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} className="shrink-0" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
