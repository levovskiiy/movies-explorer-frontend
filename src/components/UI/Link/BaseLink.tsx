import React, { type ReactNode, useMemo, type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { classess } from '../../../utils/utils'

import './BaseLink.css'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string
  isRoute?: boolean
  children: ReactNode
}

const BaseLink: FC<LinkProps> = ({ children, to, isRoute = false, className, ...props }) => {
  const styles = ['base-link', className]

  const cls = useMemo(() => classess(...styles), [styles])

  if (isRoute) {
    return <Link to={to} className={cls}>{children}</Link>
  }

  return (
    <a {...props} href={to} className={cls}>
      {children}
    </a>
  )
}

export default BaseLink
