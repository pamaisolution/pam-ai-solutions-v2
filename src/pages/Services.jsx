import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import ServicesGrid from '@/sections/home/ServicesGrid'

// Using existing asset hero-bg2.jpg as services background
import servicesBg from '@/assets/hero-bg2.jpg'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Web development, app design, digital marketing, AI automation, QA testing, content writing and UI/UX design — explore PAM AI Solutions' full service list."
        path="/services"
      />

      <PageHeader
        eyebrow="Services"
        title="Every capability your product needs, under one roof"
        description="Pick a single service or bring us in end-to-end — each one is designed to work seamlessly with the others."
        bgImage={servicesBg}
      />

      <ServicesGrid />
    </>
  )
}
