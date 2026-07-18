import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import ProductsShowcase from '@/sections/home/ProductsShowcase'

// Import background images
import productsHeaderBg from '@/assets/hero-bg2.jpg'
import productsShowcaseBg from '@/assets/bg-products-showcase.jpg'

export default function Products() {
  return (
    <>
      <Seo
        title="Products"
        description="Explore PAM SQL Generator, our Lead Generation System, and WhatsApp Automation — products built and run by PAM AI Solutions."
        path="/products"
      />

      <PageHeader
        eyebrow="Products"
        title="Tools we've built, refined, and put into production"
        description="These aren't concepts — they're systems already running for real teams, ready to be adapted for yours."
        bgImage={productsHeaderBg}
      />

      <ProductsShowcase bgImage={productsShowcaseBg} />
    </>
  )
}
