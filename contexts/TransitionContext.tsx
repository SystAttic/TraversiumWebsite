'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface TransitionContextType {
  isTransitioning: boolean
  startTransition: () => void
  endTransition: () => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined
)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = () => {
    setIsTransitioning(true)
  }

  const endTransition = () => {
    // End transition after sun expansion completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000) // Match the sun expansion duration + buffer
  }

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, startTransition, endTransition }}
    >
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error('useTransition must be used within TransitionProvider')
  }
  return context
}

