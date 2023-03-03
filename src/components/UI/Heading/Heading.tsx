import React, { type PropsWithChildren } from 'react'
import './Heading.css'

type HeadingProps = {
  as?: keyof JSX.IntrinsicElements & ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
  className?: string
}

function Heading({ as, children, className, ...props }: PropsWithChildren<HeadingProps>): JSX.Element {
  const Tag = as ?? 'h1'

  return (
    <Tag {...props} className={`heading ${className}`}>{children}</Tag>
  )
}

export default Heading
