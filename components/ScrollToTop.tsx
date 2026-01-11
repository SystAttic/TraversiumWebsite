'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when pathname changes (but not for hash-only changes)
    // Use setTimeout to ensure it happens after the page transition
    const timer = setTimeout(() => {
      // Only scroll to top if there's no hash in the URL
      // Hash links should be handled by the browser's default behavior
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
