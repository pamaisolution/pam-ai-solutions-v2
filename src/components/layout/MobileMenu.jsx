import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '@/data/site'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import Button from '@/components/ui/Button'

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/10 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dropdown Menu - Positioned below the Navbar */}
          <motion.div
            className="fixed top-[84px] inset-x-4 z-[70] flex flex-col gap-6 bg-white/95 p-6 rounded-3xl lg:hidden shadow-2xl border border-white/40 overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `rounded-2xl px-5 py-3.5 font-heading font-bold text-base transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-premium'
                        : 'text-ink-muted hover:bg-surface/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-2">
              <Button to="/contact" onClick={onClose} className="w-full !py-4 !rounded-2xl shadow-premium">
                Get Started
              </Button>
            </div>

            <p className="text-center text-[11px] text-ink-muted/50 font-bold uppercase tracking-widest">
              PAM AI Solutions
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
