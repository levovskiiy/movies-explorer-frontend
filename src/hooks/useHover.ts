import { type MutableRefObject, useState, useEffect } from 'react'

export default function useHover<T extends HTMLElement>(ref: MutableRefObject<T | null>): boolean {
  const [isHovering, setHovering] = useState(false)

  const hover = () => {
    setHovering(true)
  }
  const unHover = () => {
    setHovering(false)
  }

  useEffect(() => {
    if (ref.current === undefined) {
      return
    }

    const node = ref.current

    if (node === null) {
      return
    }

    node.addEventListener('mouseenter', hover)
    node.addEventListener('mousemove', hover)
    node.addEventListener('mouseleave', unHover)

    return () => {
      node.removeEventListener('mouseenter', hover)
      node.removeEventListener('mousemove', hover)
      node.removeEventListener('mouseleave', unHover)
    }
  }, [])

  return isHovering
}
