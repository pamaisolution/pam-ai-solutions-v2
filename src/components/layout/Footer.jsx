import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaGithub } from 'react-icons/fa6'
import { Mail, Phone, Send } from 'lucide-react'
import { SITE, SOCIALS, FOOTER_LINKS, NAV_LINKS } from '@/data/site'
import { SERVICES } from '@/data/services'
import { PRODUCTS } from '@/data/products'
import Container from '@/components/ui/Container'
import Logo from './Logo'

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  github: FaGithub,
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(113,201,206,0.1)] mt-20">
      <Container className="py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo />
            <p className="text-[15px] text-ink-muted leading-relaxed max-w-sm">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4 pt-2">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/40 text-ink-muted transition-all hover:bg-primary hover:text-white hover:-translate-y-1 border border-[#71C9CE]/10"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-base text-ink mb-6 uppercase tracking-widest text-[12px]">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[15px] text-ink-muted hover:text-primary transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-base text-ink mb-6 uppercase tracking-widest text-[12px]">
              Services
            </h3>
            <ul className="flex flex-col gap-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-[15px] text-ink-muted hover:text-primary transition-all"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-base text-ink mb-6 uppercase tracking-widest text-[12px]">
              Stay Updated
            </h3>
            <p className="text-[15px] text-ink-muted mb-6">
              Subscribe to our newsletter for the latest AI insights.
            </p>
            {subscribed ? (
              <div className="bg-surface/50 p-4 rounded-xl border border-primary/20 flex items-center gap-3 text-ink font-semibold">
                <Send size={18} className="text-primary" /> Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-input border border-surface bg-surface/30 px-6 py-4 text-[14px] text-ink placeholder:text-ink-muted/50 focus:border-primary focus:outline-none transition-all pr-14"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center rounded-xl bg-primary text-white hover:bg-primary-hover transition-all"
                >
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-surface flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[14px] text-ink-muted text-center lg:text-left">
            © {new Date().getFullYear()} {SITE.name}. Built for the future.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-3">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.to} to={link.to} className="text-[14px] text-ink-muted hover:text-primary whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
