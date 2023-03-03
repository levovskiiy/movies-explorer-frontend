import React, { type InputHTMLAttributes } from 'react'
import { classname } from '../../../utils/utils'
import './Input.css'

type InputProps = {
  variant?: 'primary' | 'ghost'
} & InputHTMLAttributes<HTMLInputElement>

function Input({ className, variant = 'primary', ...props }: InputProps): JSX.Element {
  const { block } = classname('input', { variant }, [className])

  return (
    <input {...props} className={block} />
  )
}

export default Input
