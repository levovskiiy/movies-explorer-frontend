import React, { type FC, type ReactNode, type ChangeEvent, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
  onChange: (evt: ChangeEvent) => any
}

const Input: FC<InputProps> = ({ children, className, onChange }) => {
  return (
    <input onChange={onChange} className={['input', className].join(' ')}>
      {children}
    </input>
  )
}

export default Input
