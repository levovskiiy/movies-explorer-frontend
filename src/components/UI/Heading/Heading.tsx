import React, { useMemo, type FC, type HTMLAttributes } from 'react'
import { type Size } from '../../../types/types'
import { classess } from '../../../utils/utils'
import './Heading.css'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingTag = keyof JSX.IntrinsicElements & HeadingType

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag
  size?: Size
}

const Heading: FC<HeadingProps> = ({ as, children, className = '', size = 'xl', ...props }) => {
  const Tag = as ?? 'h1'

  const styles = [
    'heading',
    `heading_size_${size}`,
    className
  ]

  const cls = useMemo(() => classess(...styles), [styles])

  return (
    <Tag {...props} className={cls}>
      {children}
    </Tag>
  )
}

export default Heading
