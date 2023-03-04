import React, { type PropsWithChildren, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { type Size } from '../../../types/types'
import { classname, merge } from '../../../utils/utils'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'link' | 'tertiary'

type ButtonProps = {
  children: ReactNode
  size?: Size
  isLoading?: boolean
  onClick?: (...args: any) => any
  rounded?: boolean
  variant: Variant
  to?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    to,
    children,
    className,
    size,
    variant = 'primary',
    isLoading = false,
    rounded = false,
    ...attrs
  } = props

  const { block } = classname('button', {
    size,
    variant,
    rounded
  })
  const classnames = merge(block, className)

  const loader = isLoading ? <></> : null

  return (
    <button {...attrs} className={classnames}>
      {loader}{children}
    </button>
  )
}

export default Button
