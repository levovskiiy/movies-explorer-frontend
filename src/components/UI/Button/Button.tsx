import React, { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { type Size } from '../../../types/types'
import { classname, merge } from '../../../utils/utils'
import BaseLink from '../BaseLink/BaseLink'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'link' | 'ghost' | 'tertiary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: Size
  isLoading?: boolean
  onClick?: (...args: any) => any
  rounded?: boolean
  variant: Variant
  to?: string
}

const Button: FC<ButtonProps> = (
  {
    children,
    size = 'lg',
    variant = 'primary',
    isLoading = false,
    rounded = false,
    className,
    to,
    ...props
  }) => {
  const { block } = classname('button', {
    size,
    variant,
    rounded
  })
  const classnames = merge(block, className)

  const loader = isLoading ? <></> : null

  if (to !== undefined) {
    return <BaseLink isRoute to={to} className={classnames}>{children}</BaseLink>
  }

  return (
    <button {...props} className={classnames}>
      {loader}{children}
    </button>
  )
}

export default Button
