import * as Icons from 'lucide-react'
import { WHY_CHOOSE_US, COUNTERS } from '@/data/stats'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { useCountUp } from '@/hooks/useCountUp'
import advantageBg from '@/assets/bg-advantage.jpg'

function Counter({ value, suffix, label }) {
  const { ref, value: animated } = useCountUp(value)
  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="font-heading text-5xl font-extrabold text-primary drop-shadow-sm">
        {animated}{suffix}
      </span>
      <span className="text-[13px] font-bold text-white/70 uppercase tracking-widest">{label}</span>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="relative section-py overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${advantageBg})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <SectionHeading
            eyebrow="The PAM AI Advantage"
            title="A partnership built on execution and engineering excellence"
            description="We move beyond strategy into deep execution, ensuring every AI implementation is robust, scalable, and secure."
            className="!mb-0 !text-left [&_h2]:text-white [&_p]:text-white/80"
          />

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {COUNTERS.map((counter) => (
              <Reveal key={counter.id} delay={0.1}>
                <Counter value={counter.value} suffix={counter.suffix} label={counter.label} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Feature Cards / Timeline inspired layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = Icons[item.icon] ?? Icons.Sparkles
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-card h-full p-10 flex flex-col gap-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 group">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-premium group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </span>
                    <span className="text-4xl font-extrabold text-white/10 group-hover:text-primary/20 transition-colors">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl text-white font-bold">{item.title}</h3>
                  <p className="text-[15px] text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
