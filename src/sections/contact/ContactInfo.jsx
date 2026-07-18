import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub } from 'react-icons/fa6'
import { SITE, SOCIALS } from '@/data/site'

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  github: FaGithub,
}

const INFO = [
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: 'Phone', value: SITE.phone, href: SITE.phoneHref },
  { icon: MapPin, label: 'Office', value: SITE.address, href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM', href: '#' },
]

export default function ContactInfo({ hideMap = false }) {
  return (
    <div className="flex flex-col h-full space-y-10">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-ink">Let's Connect</h3>
        <p className="text-lg text-ink-muted leading-relaxed">
          Ready to transform your business with AI? Our team is standing by to help you build the future. Reach out through any of these channels.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {INFO.map((item) => (
          <div key={item.label} className="flex items-start gap-6 group">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-premium">
              <item.icon size={22} />
            </div>
            <div className="flex flex-col gap-1 pt-1">
              <span className="text-[12px] font-bold uppercase tracking-widest text-primary">{item.label}</span>
              <a
                href={item.href}
                className="text-[16px] text-ink font-semibold hover:text-primary transition-colors"
                onClick={item.href === '#' ? (e) => e.preventDefault() : undefined}
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 pt-4">
        <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] text-ink">Follow Our Journey</h4>
        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon]
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-ink-muted border border-primary/10 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>

      {!hideMap && (
        <div className="mt-auto pt-10 h-64 w-full rounded-card overflow-hidden border-4 border-surface shadow-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.513468850!2d76.884832870198!3d11.0120145238246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      )}
    </div>
  )
}
