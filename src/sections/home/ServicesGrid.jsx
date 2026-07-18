import * as Icons from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES } from '@/data/services'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

export default function ServicesGrid({ compact = false }) {
  // Show only 3 services on home page if compact
  const items = compact ? SERVICES.slice(0, 3) : SERVICES

  return (
    <section id="services" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="Intelligence in Action"
          title="Premium AI & Digital Services"
          description="Crafting the future through high-performance software and autonomous agents designed for scale."
          center
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => {
            const Icon = Icons[service.icon] ?? Icons.Sparkles
            return (
              <Reveal key={service.id} delay={i * 0.1}>
                <Link
                  to={`/services#${service.id}`}
                  className="glass-card group p-10 flex flex-col h-full bg-surface/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="mb-8 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/10 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-[10deg]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-[15px] text-ink-muted leading-relaxed">
                    {service.short}
                  </p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
