import React, { type PropsWithChildren, type HTMLAttributes, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { classname, merge } from '../../../utils/utils'

import './BaseLink.css'

type LinkProps = {
  to: string
  isRoute?: boolean
  isNavLink?: boolean
  variant?: 'secondary' | 'danger'
} & HTMLAttributes<HTMLAnchorElement>

function BaseLink(props: PropsWithChildren<LinkProps>): JSX.Element {
  const { children, variant, to, className, isRoute = false, isNavLink = false, ...attrs } = props

  const active = useRef(false)

  const { block } = classname('base-link', {
    variant: (variant as string),
    active: active.current
  })

  const classnames = merge(block, className)

  if (isRoute) {
    return <Link {...attrs} to={to} className={classnames}>{children}</Link>
  }

  if (isNavLink) {
    return (
      <NavLink {...attrs} to={to} className={((props => {
        if (props.isActive) {
          active.current = true
        }

        return classnames
      }))}>
        {children}
      </NavLink>
    )
  }

  return (
    <a {...attrs} href={to} className={classnames}>
      {children}
    </a>
  )
}

export default BaseLink
