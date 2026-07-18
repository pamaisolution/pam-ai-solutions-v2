import { motion } from 'framer-motion'
import defaultBg from '@/assets/hero-bg1.jpg'

export default function HeroBackground({ bgImage }) {
  const backgroundImage = bgImage || defaultBg

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Background Image Layer - Optimized for Performance */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          /* Disable heavy transform on very small screens if it causes lag */
          transform: window.innerWidth > 768 ? 'scale(1.2)' : 'scale(1.1)',
          backgroundPosition: '50% 15%'
        }}
      />

      {/* Darker overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Grid Pattern - Subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}
