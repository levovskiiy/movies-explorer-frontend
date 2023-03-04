import React, { type PropsWithChildren, type HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { classname, merge } from '../../../utils/utils'

import './BaseLink.css'

type LinkProps = {
  to: string
  isRoute?: boolean
  variant?: 'secondary' | 'danger'
} & HTMLAttributes<HTMLAnchorElement>

function BaseLink(props: PropsWithChildren<LinkProps>): JSX.Element {
  const { children, variant, to, className, isRoute = false, ...attrs } = props

  const { block } = classname('base-link', {
    variant: (variant as string)
  })

  const classnames = merge(block, className)

  if (isRoute) {
    return <Link {...attrs} to={to} className={classnames}>{children}</Link>
  }

  return (
    <a {...attrs} href={to} className={classnames}>
      {children}
    </a>
  )
}

export default BaseLink
