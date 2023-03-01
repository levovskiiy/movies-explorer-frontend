import React, { type FC, type InputHTMLAttributes } from 'react'
import { classname } from '../../../utils/utils'
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'ghost'
}

const Input: FC<InputProps> = ({ className, variant = 'primary', ...props }) => {
  const { block } = classname('input', { variant }, [className])

  return (
    <input {...props} className={block} />
  )
}

export default Input
