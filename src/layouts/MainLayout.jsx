import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
