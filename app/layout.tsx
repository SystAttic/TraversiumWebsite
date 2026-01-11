import type { Metadata } from 'next'
import './globals.css'
import { TransitionProvider } from '@/contexts/TransitionContext'
import TransitionOverlay from '@/components/TransitionOverlay'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Traversium - Travel Together, Remember Forever',
  description: 'Your adventures deserve a home. Traversium makes capturing memories beautiful again.',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>
          <ScrollToTop />
          <TransitionOverlay />
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}

