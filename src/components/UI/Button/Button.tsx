import React, { useMemo, type FC, type HTMLAttributes, type ReactNode } from 'react'
import { type Size } from '../../../types/types'
import { bem, classess } from '../../../utils/utils'
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
  const cls = useMemo(() => {
    const [block] = bem({
      block: 'button',
      modifiers: {
        size,
        variant,
        rounded
      }
    })
    return classess(block, className)
  }, [size, variant, rounded, className])
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
