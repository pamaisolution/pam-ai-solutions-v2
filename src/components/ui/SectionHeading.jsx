import { cn } from '@/utils/cn'
import Reveal from './Reveal'
import { Sparkles } from 'lucide-react'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
}) {
  const alignment = center ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <Reveal className={cn('flex flex-col gap-6 max-w-3xl mb-14', alignment, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-white shadow-sm">
          <Sparkles size={14} className="text-primary" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink">{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-ink">
        {title}
      </h2>

      {description && (
        <p className="text-lg text-ink-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </Reveal>
  )
}
