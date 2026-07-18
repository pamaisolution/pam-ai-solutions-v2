import { Check, Sparkles } from 'lucide-react'
import { PRICING_PLANS } from '@/data/pricing'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export default function PricingSection({ showHeading = true }) {
  return (
    <section id="pricing" className="section-py bg-surface/20">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Investment"
            title="Premium Plans for Growing Enterprises"
            description="Scalable pricing designed to deliver maximum value at every stage of your growth."
            center
          />
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
                className={cn(
                  'relative h-full flex flex-col rounded-[32px] p-10 lg:p-12 transition-all duration-500 border-2',
                  plan.highlight
                    ? 'bg-white border-primary shadow-premium scale-105 z-10'
                    : 'bg-white/40 border-white/60 hover:border-primary/30',
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-premium">
                    <Sparkles size={14} /> Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-ink mb-2">{plan.name}</h3>
                  <p className="text-[14px] text-ink-muted leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-extrabold text-ink">{plan.price}</span>
                  {plan.period !== 'project' && <span className="text-base text-ink-muted uppercase tracking-widest font-bold">/ {plan.period}</span>}
                </div>

                <ul className="flex flex-col gap-5 flex-1 mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-[15px] text-ink-muted">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                         <Check size={14} className="text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contact"
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  className="w-full !rounded-2xl"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
