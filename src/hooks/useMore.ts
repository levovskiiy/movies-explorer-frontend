import { type MutableRefObject, useEffect, useState } from 'react'
import { getVisibleConfig } from 'utils/visibleCards'
import useResize from './useResize'

export default function useMore<R extends HTMLElement>(
  ref: MutableRefObject<R | null>,
  initialMoreItems: number = 12,
  initialStep: number = 0
) {
  const [endIndex, setEndIndex] = useState(initialMoreItems)
  const [step, setStep] = useState(initialStep)
  const width = useResize(window.innerWidth)

  useEffect(() => {
    const config = getVisibleConfig(width)
    setStep(config.more)
    setEndIndex(config.total)
  }, [width])

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [endIndex])

  return { endIndex, setEndIndex, step, setStep }
}
