import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { NAV_LINKS } from '@/data/site'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import Button from '@/components/ui/Button'
import Logo from './Logo'

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 z-[70] flex h-full w-[85%] max-w-sm flex-col gap-10 bg-white p-8 lg:hidden shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/50 text-ink border border-surface"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `rounded-2xl px-6 py-4 font-heading font-bold text-lg transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-premium'
                        : 'text-ink-muted hover:bg-surface/40'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <Button to="/contact" onClick={onClose} className="w-full !py-5 !rounded-2xl shadow-premium">
                Get Started
              </Button>
              <p className="text-center text-[12px] text-ink-muted/60 font-medium">
                © {new Date().getFullYear()} PAM AI Solutions
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
