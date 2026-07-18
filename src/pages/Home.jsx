import Seo from '@/components/common/Seo'
import Hero from '@/sections/home/Hero'
import ServicesGrid from '@/sections/home/ServicesGrid'
import WhyChooseUs from '@/sections/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Seo
        title="Build. Automate. Grow."
        description="PAM AI Solutions helps businesses grow using AI, automation and digital technology — web development, app design, AI automation and more."
        path="/"
      />
      <Hero />
      <ServicesGrid compact />
      <WhyChooseUs />
    </>
  )
}
