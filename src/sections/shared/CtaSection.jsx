import { ArrowRight, Sparkles } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

export default function CtaSection() {
  return (
    <section className="relative section-py bg-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[48px] bg-ink px-10 py-20 lg:py-24 text-center shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="relative flex flex-col items-center gap-8 z-10">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-white">
                <Sparkles size={16} className="text-primary" />
                <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Scale Your Vision</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
                Ready to Architect the <span className="text-primary">Next Generation</span> of Your Business?
              </h2>

              <p className="max-w-xl text-white/70 text-lg md:text-xl leading-relaxed">
                Connect with our AI specialists today for a deep-dive strategy session. We turn complex problems into elegant software solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button to="/contact" icon={ArrowRight} className="bg-white text-ink hover:bg-surface !px-10">
                  Start Consultation
                </Button>
                <Button to="/services" variant="outline" className="border-white/20 text-white hover:bg-white/10 !px-10">
                  Our Methodology
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
