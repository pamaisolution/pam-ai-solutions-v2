import { cn } from '@/utils/cn'

export default function GlowOrb({ className, color = 'primary', size = 420 }) {
  const colors = {
    primary: 'rgba(0,87,255,0.35)',
    secondary: 'rgba(255,193,7,0.25)',
    accent: 'rgba(59,130,246,0.3)',
  }

  return (
    <div
      aria-hidden="true"
      className={cn('absolute rounded-full blur-[100px] pointer-events-none', className)}
      style={{
        width: size,
        height: size,
        background: colors[color] ?? colors.primary,
      }}
    />
  )
}
