import React, { type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { classname, merge } from '../../../utils/utils'

import './BaseLink.css'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string
  isRoute?: boolean
  variant?: 'secondary' | 'danger'
}

const BaseLink: FC<LinkProps> = ({ children, variant, to, isRoute = false, className, ...props }) => {
  const { block } = classname('base-link', {
    variant: (variant as string)
  })

  const classnames = merge(block, className)

  if (isRoute) {
    return <Link to={to} className={classnames}>{children}</Link>
  }

  return (
    <a {...props} href={to} className={classnames}>
      {children}
    </a>
  )
}

export default BaseLink
