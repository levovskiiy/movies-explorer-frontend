import React, { type PropsWithChildren, type HTMLAttributes, type ForwardedRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { classname, merge } from '../../../utils/utils'

import './BaseLink.css'

type LinkProps = {
  to: string
  isRoute?: boolean
  isNavLink?: boolean
  variant?: 'secondary' | 'danger'
} & HTMLAttributes<HTMLAnchorElement>

function BaseLink(props: PropsWithChildren<LinkProps>, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element {
  const { children, variant, to, className, isRoute = false, isNavLink = false, ...attrs } = props

  const { block } = classname('base-link', {
    variant: (variant as string)
  })

  const classnames = merge(block, className)

  return (
    <>
      {isRoute && <Link {...attrs} to={to} className={classnames} ref={ref}>{children}</Link>}
      {
        isNavLink && (
          <NavLink {...attrs} ref={ref} to={to} className={((props => {
            return props.isActive ? merge(classnames, 'base-link_active') : classnames
          }))}>
            {children}
          </NavLink>)
      }

      {(!isRoute && !isNavLink) && (
        <a {...attrs} href={to} className={classnames} ref={ref}>
          {children}
        </a>)}
    </>
  )
}

export default React.forwardRef(BaseLink)
