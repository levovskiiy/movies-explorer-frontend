import React, { type PropsWithChildren, type HTMLAttributes, type ReactNode } from 'react'
import './Container.css'

type ContainerProps = {
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

function Container({ children, className, ...props }: PropsWithChildren<ContainerProps>): JSX.Element {
  const classnames = `container ${className ?? ''}`

  return (
    <div {...props} className={classnames}>
      {children}
    </div>
  )
}

export default Container
