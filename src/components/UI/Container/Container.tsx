import React, { type FC, type HTMLAttributes, type ReactNode } from 'react'
import './Container.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Container: FC<ContainerProps> = ({ children, className, ...props }) => {
  const classes = `container ${className ?? ''}`

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

export default Container
