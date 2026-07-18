import { motion } from 'framer-motion'
import defaultBg from '@/assets/hero-bg1.jpg'

export default function HeroBackground({ bgImage }) {
  const backgroundImage = bgImage || defaultBg

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Background Image Layer - Original Color - Positioned to hide watermark more aggressively */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top_15%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'scale(1.2)', // Increased zoom to ensure watermark is pushed completely out
        }}
      />

      {/* Darker overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}
