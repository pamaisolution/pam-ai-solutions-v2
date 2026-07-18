import { CheckCircle } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import defaultInnovationsBg from '@/assets/bg-innovations.jpg'

export default function ProductsShowcase({ bgImage }) {
  const backgroundImage = bgImage || defaultInnovationsBg

  return (
    <section
      id="products"
      className="relative section-py overflow-hidden z-10"
      style={{
        clipPath: 'ellipse(170% 100% at 50% 0%)',
        WebkitClipPath: 'ellipse(170% 100% at 50% 0%)'
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Proprietary Innovations"
          title="Advanced Product Ecosystem"
          description="High-performance tools built by our engineers to solve complex business challenges."
          center
          className="[&_h2]:text-white [&_p]:text-white/80"
        />

        <div className="mt-16 grid grid-cols-1 gap-12">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.1}>
              <div
                id={product.id}
                className="glass-card flex flex-col lg:flex-row overflow-hidden bg-white/10 backdrop-blur-md border-white/20 group"
              >
                {/* Image / Preview Area */}
                <div className="lg:w-2/5 relative overflow-hidden bg-white/5 aspect-video lg:aspect-auto min-h-[300px] flex items-center justify-center border-r border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-700" />
                  <div className="z-10 text-center p-8">
                     <h4 className="text-3xl font-extrabold text-white opacity-60 group-hover:opacity-100 transition-opacity">
                      {product.name}
                     </h4>
                     <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-primary mt-2">
                       Production Ready
                     </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['React', 'Next.js', 'AI', 'Cloud'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl mb-4 text-white font-bold">{product.name}</h3>
                  <p className="text-white/70 leading-relaxed mb-8 text-[16px] max-w-2xl">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/80 text-[15px]">
                        <CheckCircle size={18} className="text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
