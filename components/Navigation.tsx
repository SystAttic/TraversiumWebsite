'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import TransitionLink from './TransitionLink'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <a
              href="#coming-soon"
              className="px-6 py-2.5 bg-accent-primary hover:bg-accent-primaryLight rounded-lg text-white font-medium transition-colors"
            >
              Coming Soon
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
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
          </button>
        </div>
      </div>
    </nav>
  )
}

