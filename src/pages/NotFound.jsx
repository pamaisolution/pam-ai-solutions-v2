import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Seo from '@/components/common/Seo'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import GlowOrb from '@/components/ui/GlowOrb'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="This page could not be found." path="/404" />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <GlowOrb className="top-10 left-1/3" color="primary" size={380} />
        <GlowOrb className="bottom-10 right-1/3" color="secondary" size={280} />
        <Container className="relative">
          <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
            <motion.span
              className="font-heading text-7xl sm:text-8xl font-extrabold gradient-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              404
            </motion.span>
            <h1 className="text-2xl sm:text-3xl">This page took a wrong turn</h1>
            <p className="text-muted/80">
              The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on
              track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button to="/" icon={Home} iconPosition="left">
                Back to Home
              </Button>
              <Button to="/contact" variant="outline" icon={ArrowLeft} iconPosition="left">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
