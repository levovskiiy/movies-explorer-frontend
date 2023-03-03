import React, { type FC, type ReactNode } from 'react'
import './Text.css'

interface TextProps {
  children?: ReactNode
  className?: string
}

const Text: FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={`text ${className}`}>{children}</p>
  )
}

export default Text
