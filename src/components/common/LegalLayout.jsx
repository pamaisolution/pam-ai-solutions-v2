import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import Container from '@/components/ui/Container'

// Import a default legal background
import legalBg from '@/assets/bg-legal.jpg'

export default function LegalLayout({ title, path, updated, children }) {
  return (
    <>
      <Seo title={title} description={`${title} for PAM AI Solutions.`} path={path} />
      <PageHeader
        eyebrow="Legal"
        title={title}
        description={`Last updated ${updated}`}
        bgImage={legalBg}
      />
      <section className="pb-32 bg-white">
        <Container>
          <div className="glass-card mx-auto max-w-3xl p-10 lg:p-16 flex flex-col gap-10 bg-surface/20 border-white/60 [&_h2]:text-2xl [&_h2]:text-ink [&_h2]:font-bold [&_p]:text-ink-muted [&_p]:text-[16px] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-3 [&_ul]:text-ink-muted [&_li]:leading-relaxed">
            {children}
          </div>
        </Container>
      </section>
    </>
  )
}
