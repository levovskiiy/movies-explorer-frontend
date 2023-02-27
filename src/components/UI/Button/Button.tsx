import React, { useMemo, type FC, type HTMLAttributes, type ReactNode } from 'react'
import { type Size } from '../../../types/types'
import { classess } from '../../../utils/utils'
import BaseLink from '../Link/BaseLink'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'link' | 'ghost'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
  const styles = [
    'button',
    `button_size_${size}`,
    `button_variant_${variant}`,
    rounded ? 'button_rounded' : '',
    className
  ]

  const cls = useMemo(() => classess(...styles), [styles])
  const loader = isLoading ? <></> : null

  if (to !== undefined) {
    return <BaseLink isRoute to={to} className={cls}>{children}</BaseLink>
  }

  return (
    <button {...props} className={cls}>
      {loader}{children}
    </button>
  )
}

export default Button
