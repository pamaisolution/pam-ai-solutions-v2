import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import PricingSection from '@/sections/shared/PricingSection'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { cn } from '@/utils/cn'

// Using existing asset hero-bg.jpg as pricing background
import pricingBg from '@/assets/hero-bg.jpg'

const FAQS = [
  {
    q: 'What happens after I choose a plan?',
    a: 'We schedule a free 30-minute discovery call to confirm scope, timeline and any customizations before any work begins.',
  },
  {
    q: 'Can I upgrade my plan mid-project?',
    a: 'Yes — plans are a starting point. If scope grows, we adjust the quote transparently before continuing.',
  },
  {
    q: 'Do you offer ongoing maintenance?',
    a: 'All plans include a support window after launch, and we offer monthly maintenance retainers for ongoing updates.',
  },
  {
    q: 'What payment terms do you work with?',
    a: 'Typically a 50% deposit to begin, with the remainder due at delivery. Enterprise engagements can use milestone billing.',
  },
]

function FaqItem({ item, isOpen, onClick }) {
  return (
    <div className="glass-card overflow-hidden bg-white/40 border-white/60">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 p-8 text-left group"
      >
        <span className="font-heading font-bold text-lg text-ink group-hover:text-primary transition-colors">{item.q}</span>
        <ChevronDown
          size={20}
          className={cn('shrink-0 text-primary transition-transform duration-300', isOpen && 'rotate-180')}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-8 pb-8 text-[15px] text-ink-muted leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <>
      <Seo
        title="Pricing"
        description="Transparent Starter, Professional and Enterprise pricing plans from PAM AI Solutions."
        path="/pricing"
      />

      <PageHeader
        eyebrow="Pricing Plans"
        title="Scalable Solutions for Every Ambition"
        description="Transparent pricing designed for clarity. No hidden costs, just high-performance results."
        bgImage={pricingBg}
      />

      <PricingSection showHeading={false} />

      <section className="section-py bg-white">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Answers to Common Questions" center />
          <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-6">
            {FAQS.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.1}>
                <FaqItem
                  item={item}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
