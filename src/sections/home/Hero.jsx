import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, ShieldCheck, Rocket } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import HeroBackground from './HeroBackground'

// Updated to existing asset
import homeBg from '@/assets/hero-bg1.jpg'

const STATS = [
  { label: 'Client Satisfaction', value: '99%', icon: ShieldCheck },
  { label: 'Efficiency Boost', value: '45%', icon: Zap },
  { label: 'Projects Delivered', value: '250+', icon: Rocket },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-10 lg:pb-32 z-20">
      <HeroBackground bgImage={homeBg} />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-6"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-[13px] font-bold tracking-[0.15em] uppercase text-white">
              The Future of Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 max-w-4xl text-white drop-shadow-xl"
          >
            Building Intelligent <span className="text-primary">Digital Solutions</span> for Modern Brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8 drop-shadow-md"
          >
            Helping businesses grow using premium AI, Automation and cutting-edge Digital Technology. Scalable solutions for the modern era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5 mb-16"
          >
            <Button to="/contact" icon={ArrowRight}>
              Book Consultation
            </Button>
            <Button to="/services" variant="secondary" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md">
              Explore Services
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-center gap-3 group bg-white/10 backdrop-blur-lg border-white/20"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-glow">
                  <stat.icon size={20} />
                </div>
                <div className="text-2xl font-bold text-white drop-shadow-sm">{stat.value}</div>
                <div className="text-[12px] font-medium text-white/70 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
