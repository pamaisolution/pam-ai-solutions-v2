import { useEffect } from 'react'

/**
 * Locks body scroll while `locked` is true. Used for the mobile nav drawer.
 * @param {boolean} locked
 */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    const original = window.document.body.style.overflow
    window.document.body.style.overflow = 'hidden'
    return () => {
      window.document.body.style.overflow = original
    }
  }, [locked])
}
