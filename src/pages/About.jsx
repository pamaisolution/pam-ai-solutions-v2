import * as Icons from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { VALUES, PROCESS } from '@/data/about'

// Asset import
import aboutBg from '@/assets/bg-about.png'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about PAM AI Solutions — the team building intelligent digital solutions for businesses ready to grow."
        path="/about"
      />

      <PageHeader
        eyebrow="Our Story"
        title="Crafting the Future of Business Intelligence"
        description="We are a collective of designers, engineers, and AI specialists dedicated to building the systems that define tomorrow's industry leaders."
        bgImage={aboutBg}
      />

      {/* About Section - Split Layout (White) */}
      <section className="section-py bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-white shadow-sm w-fit">
                   <Icons.History size={14} className="text-primary" />
                   <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink">Est. 2024</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-ink">
                  Closing the gap between <span className="gradient-text">vision</span> and <span className="gradient-text">execution</span>.
                </h2>
                <p className="text-lg text-ink-muted leading-relaxed">
                  PAM AI Solutions was born from a simple realization: the gap between AI potential and AI implementation was growing too wide for most businesses to cross. We built this firm to bridge that divide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-bold text-primary">250+</h4>
                    <p className="text-sm font-bold text-ink uppercase tracking-widest">Projects Shipped</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-bold text-primary">99%</h4>
                    <p className="text-sm font-bold text-ink uppercase tracking-widest">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                <div className="glass-card p-10 bg-surface/30 border-white/60">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
                    <Icons.Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-4">Our Mission</h3>
                  <p className="text-ink-muted leading-relaxed">
                    Democratize access to high-tier AI and automation software, empowering companies of all sizes to operate with the efficiency of global leaders.
                  </p>
                </div>
                <div className="glass-card p-10 bg-bg/50 border-white/60">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-ink flex items-center justify-center mb-6">
                    <Icons.Eye size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-4">Our Vision</h3>
                  <p className="text-ink-muted leading-relaxed">
                    A world where human creativity is amplified by intelligent systems, allowing teams to focus on innovation while technology handles the routine.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values Section (Now White) */}
      <section className="section-py bg-surface/20">
        <Container>
          <SectionHeading
            eyebrow="Our Principles"
            title="The DNA of Excellence"
            description="Our engineering culture is rooted in discipline, transparency, and an obsession with quality."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, i) => {
              const Icon = Icons[value.icon] ?? Icons.Sparkles
              return (
                <Reveal key={value.title} delay={i * 0.1}>
                  <div className="glass-card h-full p-10 flex flex-col bg-white/60">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/10 mb-8">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-4">{value.title}</h3>
                    <p className="text-[15px] text-ink-muted leading-relaxed">{value.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Section - High Visibility Update with Organic Mask */}
      <section
        className="relative section-py overflow-hidden"
        style={{
          clipPath: 'ellipse(160% 100% at 50% 0%)',
          WebkitClipPath: 'ellipse(160% 100% at 50% 0%)'
        }}
      >
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBg})` }}
        />

        {/* Darker overlay specifically for readability */}
        <div className="absolute inset-0 bg-black/50" />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Workflow"
            title="Seamless Development Process"
            description="From discovery to deployment, we follow a rigorous methodology designed for speed and reliability."
            center
            className="[&_h2]:text-white [&_p]:text-white/80 [&_span]:text-white"
          />

          <div className="relative mt-20">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {PROCESS.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.1}>
                  <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-20 h-20 rounded-full bg-primary text-white shadow-premium flex items-center justify-center text-3xl font-extrabold mb-8 group-hover:scale-110 transition-all duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{item.title}</h3>
                    <p className="text-[15px] text-white/85 leading-relaxed px-4 drop-shadow-sm">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
