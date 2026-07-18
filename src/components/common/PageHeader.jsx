import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import { Sparkles } from 'lucide-react'
import { cn } from '@/utils/cn'
import heroBg from '@/assets/hero-bg1.jpg'

export default function PageHeader({ eyebrow, title, description, className, bgImage }) {
  const backgroundImage = bgImage || heroBg

  return (
    <section className={cn("relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 z-20", className)}>
      {/* Background Image Layer - Original Color - Positioned to hide watermark more aggressively */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top_15%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'scale(1.2)', // Increased zoom to ensure watermark is pushed completely out
        }}
      />

      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <Container className="relative">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-2">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-white">{eyebrow}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white drop-shadow-lg">
            {title}
          </h1>

          {description && (
            <p className="max-w-2xl text-base md:text-lg text-white/80 leading-relaxed drop-shadow-md">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
