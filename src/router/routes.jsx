import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Products from '@/pages/Products'
import Contact from '@/pages/Contact'
import LegalPrivacy from '@/pages/LegalPrivacy'
import Terms from '@/pages/Terms'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/products', element: <Products /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy-policy', element: <LegalPrivacy /> },
  { path: '/terms', element: <Terms /> },
]
