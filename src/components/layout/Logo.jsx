import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-2 sm:gap-3 font-heading font-extrabold text-lg sm:text-xl tracking-tight text-ink ${className}`}
      aria-label="PAM AI Solutions home"
    >
      <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-primary shadow-premium transition-transform group-hover:scale-110">
        <svg width="18" height="18" viewBox="0 0 64 64" fill="none" className="sm:w-[22px] sm:h-[22px]">
           <path
            d="M32 8L52 20V44L32 56L12 44V20L32 8Z"
            stroke="white"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path d="M32 20L42 32L32 44L22 32L32 20Z" fill="white" />
        </svg>
      </div>
      <span className="flex items-center gap-1.5">
        <span className="text-ink">PAM</span>
        <span className="px-2 py-0.5 bg-primary/10 rounded-lg text-primary">AI</span>
        <span className="text-ink">Solutions</span>
      </span>
    </Link>
  )
}
