import React, { type FC, type ReactNode } from 'react'
import './Heading.css'

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements & ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
  children?: ReactNode
  className?: string
}

const Heading: FC<HeadingProps> = ({ as, children, className, ...props }) => {
  const Tag = as ?? 'h1'

  return (
    <Tag {...props} className={`heading ${className}`}>{children}</Tag>
  )
}

export default Heading
