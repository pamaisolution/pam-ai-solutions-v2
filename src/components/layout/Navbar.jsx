import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/site'
import { useScrolled } from '@/hooks/useScrollPosition'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import { cn } from '@/utils/cn'

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // If clicking a link to the current page, scroll to top
  const handleLinkClick = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out pointer-events-none',
          scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6',
        )}
      >
        <Container className="pointer-events-auto">
          <div
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2 transition-all duration-500 border border-white/20 shadow-premium',
              scrolled
                ? 'bg-white/90 backdrop-blur-md sm:backdrop-blur-xl'
                : 'bg-white/40 backdrop-blur-none sm:backdrop-blur-md',
            )}
          >
            <Logo />

            <nav className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => handleLinkClick(link.to)}
                  className={({ isActive }) =>
                    cn(
                      'font-heading text-[15px] font-semibold transition-all duration-300 hover:text-primary relative group',
                      isActive ? 'text-primary' : 'text-ink-muted hover:translate-y-[-1px]',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full opacity-50 group-hover:opacity-100"
                      )} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button to="/contact" onClick={() => handleLinkClick('/contact')} className="!py-3 !px-7 !text-[13px] !rounded-[14px]">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-surface/50 text-ink lg:hidden border border-white/40 active:scale-95 transition-transform"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
