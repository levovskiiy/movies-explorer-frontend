import React, { useMemo, type FC, type HTMLAttributes } from 'react'
import { type Size } from '../../../types/types'
import { bem, classess } from '../../../utils/utils'
import './Heading.css'

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingTag = keyof JSX.IntrinsicElements & HeadingType

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag
  size?: Size
}

const Heading: FC<HeadingProps> = ({ as, children, className = '', size = 'xl', ...props }) => {
  const Tag = as ?? 'h1'
  const [block] = bem({
    block: 'heading',
    modifiers: { size }
  })

  const cls = useMemo(() => {
    return classess(block, className)
  }, [size, className])

  return (
    <Tag {...props} className={cls}>
      {children}
    </Tag>
  )
}

export default Heading
