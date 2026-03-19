'use client'

import { useState, useEffect } from 'react'

interface LocationData {
  country: string
  // other fields if needed
}

export function useLocation() {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLocation() {
      try {
        const token = process.env.NEXT_PUBLIC_IPINFO_TOKEN
        if (!token) {
          console.warn('IPInfo token not found in environment variables.')
          setLoading(false)
          return
        }

        const response = await fetch(`https://ipinfo.io/json?token=${token}`)
        const data = await response.json()
        setLocation(data)
      } catch (error) {
        console.error('Error fetching location:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  return { location, loading }
}
