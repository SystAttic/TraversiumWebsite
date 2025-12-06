'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from '@/contexts/TransitionContext'
import { MouseEvent } from 'react'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { startTransition, endTransition } = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't trigger transition for same page or hash links
    if (href === pathname || href.startsWith('#')) {
      if (onClick) onClick()
      return
    }

    e.preventDefault()
    startTransition()

    // Navigate after a short delay to allow transition to start
    setTimeout(() => {
      router.push(href)
      // End transition after sun expansion completes
      endTransition()
    }, 100)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

