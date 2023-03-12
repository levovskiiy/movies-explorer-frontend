import { useEffect, useState } from 'react'
export default function useResize(initalWidth: number) {
  const [currentWidth, setCurrentWidth] = useState(initalWidth)

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return currentWidth
}
