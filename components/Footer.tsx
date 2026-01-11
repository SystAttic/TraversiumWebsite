'use client'

import Image from 'next/image'
import TransitionLink from './TransitionLink'

export default function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-12 bg-dark-bg1 border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <Image
                  src="/assets/logo.png"
                  alt="Traversium Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-white">TRAVERSIUM</span>
            </div>
            <p className="text-dark-textMuted text-sm">
              travel together, remember forever
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <TransitionLink
                  href="/"
                  className="text-dark-textMuted hover:text-white transition-colors text-sm"
                >
                  Home
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/#features"
                  className="text-dark-textMuted hover:text-white transition-colors text-sm"
                >
                  Features
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/about"
                  className="text-dark-textMuted hover:text-white transition-colors text-sm"
                >
                  About Us
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/download"
                  className="text-dark-textMuted hover:text-white transition-colors text-sm"
                >
                  Download
                </TransitionLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Coming Soon</h3>
            <p className="text-dark-textMuted text-sm mb-4">
              Be first to experience Traversium.
            </p>
            <a
              href="#coming-soon"
              className="inline-block px-6 py-2.5 bg-accent-primary hover:bg-accent-primaryLight rounded-lg text-white font-medium transition-colors text-sm"
            >
              Get Notified
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-border text-center">
          <p className="text-dark-textMuted text-sm">
            © {new Date().getFullYear()} Traversium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

