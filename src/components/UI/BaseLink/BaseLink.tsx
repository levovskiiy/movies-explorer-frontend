import React, { type ReactNode, useMemo, type FC, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { bem, merge } from '../../../utils/utils'

import './BaseLink.css'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string
  variant?: 'secondary' | 'danger'
  isRoute?: boolean
  children: ReactNode
}

const BaseLink: FC<LinkProps> = ({ children, variant, to, isRoute = false, className, ...props }) => {
  const cls = useMemo(() => {
    const [baseLink] = bem({
      block: 'base-link',
      modifiers: {
        variant: (variant as string)
      }
    })

    return merge(baseLink, className ?? '')
  }, [className])

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
