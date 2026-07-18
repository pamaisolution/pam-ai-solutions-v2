import { useEffect, useState } from 'react'
import AppRouter from '@/router/AppRouter'
import LoadingScreen from '@/components/common/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <AppRouter />
    </>
  )
}
