import { FaWhatsapp } from 'react-icons/fa'
import { SITE } from '@/data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <FaWhatsapp size={26} />
      <span className="absolute h-full w-full rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  )
}
