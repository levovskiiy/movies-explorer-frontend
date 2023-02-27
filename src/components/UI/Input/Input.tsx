import React, { type FC, type ChangeEvent, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (evt: ChangeEvent) => any
}

const Input: FC<InputProps> = ({ className, onChange, ...props }) => {
  return (
    <input {...props} onChange={onChange} className={['input', className].join(' ')} />
  )
}

export default Input
