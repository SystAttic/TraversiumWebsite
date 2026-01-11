'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import TransitionLink from './TransitionLink'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent body scroll when mobile menu is open while preserving scroll position
    if (mobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      
      // Apply styles to prevent scrolling
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-position', scrollY.toString())
    } else {
      // Restore scroll position only if we're not navigating (check if attribute still exists)
      const scrollY = document.body.getAttribute('data-scroll-position')
      
      // Remove styles
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.top = 'unset'
      document.body.style.width = 'unset'
      
      // Restore scroll position only if attribute exists (wasn't cleared by navigation)
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10))
        document.body.removeAttribute('data-scroll-position')
      }
    }
    return () => {
      // Cleanup on unmount
      const scrollY = document.body.getAttribute('data-scroll-position')
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.top = 'unset'
      document.body.style.width = 'unset'
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10))
        document.body.removeAttribute('data-scroll-position')
      }
    }
  }, [mobileMenuOpen])

  // Helper function to close menu and clear scroll position (for navigation)
  const handleNavigationClick = () => {
    // Clear saved scroll position before closing menu
    document.body.removeAttribute('data-scroll-position')
    setMobileMenuOpen(false)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg2/95 backdrop-blur-md border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <TransitionLink href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/logo.png"
                alt="Traversium Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-white">TRAVERSIUM</span>
          </TransitionLink>

          <div className="hidden md:flex items-center space-x-8">
            <TransitionLink
              href="/"
              className="text-dark-textMuted hover:text-white transition-colors"
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/#features"
              className="text-dark-textMuted hover:text-white transition-colors"
            >
              Features
            </TransitionLink>
            <TransitionLink
              href="/about"
              className="text-dark-textMuted hover:text-white transition-colors"
            >
              About Us
            </TransitionLink>
            <TransitionLink
              href="/download"
              className="text-dark-textMuted hover:text-white transition-colors"
            >
              Download
            </TransitionLink>
            <a
              href="#coming-soon"
              className="px-6 py-2.5 bg-accent-primary hover:bg-accent-primaryLight rounded-lg text-white font-medium transition-colors"
            >
              Coming Soon
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          onTouchStart={(e) => {
            // Prevent scroll from closing menu
            e.stopPropagation()
          }}
        />
      )}

      {/* Mobile menu sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[55] md:hidden bg-dark-bg2 border-l border-dark-border shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onTouchStart={(e) => {
          // Prevent touch events from bubbling to backdrop
          e.stopPropagation()
        }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col pt-20 px-6 pb-6">
            <TransitionLink
              href="/"
              className="text-dark-textMuted hover:text-white transition-colors py-4 border-b border-dark-border"
              onClick={handleNavigationClick}
            >
              Home
            </TransitionLink>
            <TransitionLink
              href="/#features"
              className="text-dark-textMuted hover:text-white transition-colors py-4 border-b border-dark-border"
              onClick={handleNavigationClick}
            >
              Features
            </TransitionLink>
            <TransitionLink
              href="/about"
              className="text-dark-textMuted hover:text-white transition-colors py-4 border-b border-dark-border"
              onClick={handleNavigationClick}
            >
              About Us
            </TransitionLink>
            <TransitionLink
              href="/download"
              className="text-dark-textMuted hover:text-white transition-colors py-4 border-b border-dark-border"
              onClick={handleNavigationClick}
            >
              Download
            </TransitionLink>
            <a
              href="#coming-soon"
              className="mt-4 px-6 py-2.5 bg-accent-primary hover:bg-accent-primaryLight rounded-lg text-white font-medium transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Coming Soon
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

