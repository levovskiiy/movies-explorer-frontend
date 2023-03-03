import React, { type HTMLAttributes, type PropsWithChildren } from 'react'
import './Text.css'

type TextProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

function Text({ children, className, ...props }: TextProps): JSX.Element {
  return (
    <p {...props} className={`text ${className}`}>{children}</p>
  )
}

export default Text
