import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
}

export default function Testimonials() {
  return (
    <section className="section-py bg-bg">
      <Container>
        <SectionHeading
          eyebrow="Success Stories"
          title="Endorsed by industry leaders"
          description="We take pride in building long-term relationships through transformative technology."
          center
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <div className="glass-card h-full p-10 flex flex-col bg-white/40 border-white/60 group">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={idx < t.rating ? 'fill-primary text-primary' : 'text-primary/10'}
                    />
                  ))}
                </div>

                <Quote className="text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" size={40} />

                <p className="text-[16px] text-ink-muted leading-relaxed mb-10 italic">
                  "{t.review}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center font-heading font-bold text-lg shadow-premium">
                    {initials(t.name)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-ink text-[16px]">{t.name}</h4>
                    <p className="text-[13px] text-primary font-bold uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
