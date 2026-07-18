import Seo from '@/components/common/Seo'
import PageHeader from '@/components/common/PageHeader'
import Container from '@/components/ui/Container'
import ContactForm from '@/sections/contact/ContactForm'
import ContactInfo from '@/sections/contact/ContactInfo'
import Reveal from '@/components/ui/Reveal'

// Import background image
import contactBg from '@/assets/bg-contact.jpg'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with PAM AI Solutions — book a free consultation for your next web, app or AI automation project."
        path="/contact"
      />

      <PageHeader
        eyebrow="Reach Out"
        title="Start Your AI Transformation"
        description="Have a question or a project in mind? We'd love to hear from you."
        bgImage={contactBg}
      />

      <section className="section-py bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Reveal className="h-full">
              <div className="bg-surface/20 rounded-3xl p-8 lg:p-12 border border-surface h-full flex flex-col">
                <ContactInfo hideMap />
              </div>
            </Reveal>

            <Reveal delay={0.2} className="h-full">
              <div className="bg-surface/20 rounded-3xl p-8 lg:p-12 border border-surface h-full">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          {/* Full Width Map Section */}
          <Reveal delay={0.3} className="mt-8">
            <div className="bg-surface/20 rounded-3xl p-4 border border-surface overflow-hidden h-[400px]">
               <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.513468850!2d76.884832870198!3d11.0120145238246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
