'use client'

import React, { useEffect, useRef } from 'react'

interface LocomotiveScrollProviderProps {
  children: React.ReactNode
}

export default function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const refreshScroll = (instance: any) => {
    try {
      const fn =
        instance?.update ||
        instance?.resize ||
        instance?.scroll?.update ||
        instance?.updateScroll

      if (typeof fn === 'function') {
        fn.call(instance)
      }
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    let scrollInstance: any

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default

        if (!scrollContainerRef.current) return

        scrollInstance = new LocomotiveScroll({
          el: scrollContainerRef.current as HTMLElement, 
          smooth: true,
          multiplier: 1,
          lerp: 0.05,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        } as any)

        ;(scrollContainerRef.current as any).locomotive = scrollInstance

        // Update scroll on mount with a delay
        const timeout = setTimeout(() => {
          refreshScroll(scrollInstance)
        }, 1000)

        const handleResize = () => {
          refreshScroll(scrollInstance)
        }

        window.addEventListener('resize', handleResize)

        return () => {
          clearTimeout(timeout)
          window.removeEventListener('resize', handleResize)
        }
      } catch (error) {
        console.error("Locomotive Scroll failed to load:", error)
      }
    }

    initScroll()

    return () => {
      if (scrollInstance && typeof scrollInstance.destroy === 'function') {
        scrollInstance.destroy()
      }
    }
  }, [])

  return (
    <div 
      ref={scrollContainerRef} 
      data-scroll-container 
      className="scroll-container"
      style={{ isolation: 'isolate' }}
    >
      {children}
    </div>
  )
}