import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <ScrollToTop />
      {/* Navbar is fixed, so it stays at z-50 */}
      <Navbar />

      {/*
        The main content area.
        pt-20 (80px) on mobile and pt-24 (96px) on desktop
        to account for the fixed floating navbar height.
      */}
      <main className="flex-1 pt-20 lg:pt-24 relative z-10">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
