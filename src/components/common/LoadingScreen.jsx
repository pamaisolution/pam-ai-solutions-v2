import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#E3FDFD]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 rounded-full border-2 border-[#71C9CE]/30" />
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-t-[#A6E3E9] border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            <span className="h-3 w-3 rounded-full bg-[#71C9CE]" />
          </div>
          <p className="mt-6 font-heading font-bold tracking-[0.3em] text-[10px] text-[#355C65] uppercase">
            PAM AI Solutions
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
