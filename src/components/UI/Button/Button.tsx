import React, { type PropsWithChildren, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { type Size } from '../../../types/types'
import { classname, merge } from '../../../utils/utils'
import BaseLink from '../BaseLink/BaseLink'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'link' | 'tertiary' | 'ghost'

type ButtonProps = {
  children?: ReactNode
  size?: Size
  rounded?: boolean
  variant: Variant
  to?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props: PropsWithChildren<ButtonProps>, ref): JSX.Element {
    const {
      to,
      children,
      className,
      size,
      variant = 'primary',
      rounded = false,
      ...attrs
    } = props

    const { block } = classname('button', {
      size,
      variant,
      rounded
    })
    const classnames = merge(block, className)

    if (to) {
      return <BaseLink className={classnames} isRoute to={to}>{children}</BaseLink>
    }

    return (
      <button ref={ref} {...attrs} className={classnames}>
        {children}
      </button>
    )
  })

export default Button
