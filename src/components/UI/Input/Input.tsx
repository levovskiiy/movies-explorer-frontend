import React, { type InputHTMLAttributes } from 'react'
import { classname } from '../../../utils/utils'
import './Input.css'

type InputProps = {
  variant?: 'primary' | 'ghost' | 'profile'
  error?: boolean
} & InputHTMLAttributes<HTMLInputElement>

function Input({ className, variant = 'primary', error, ...props }: InputProps): JSX.Element {
  const { block } = classname('input', { variant, error }, [className])

  return (
    <input {...props} className={block} />
  )
}

export default Input
