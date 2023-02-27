import React, { type FC, type LabelHTMLAttributes, type ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

const Label: FC<LabelProps> = ({ children, className, ...props }) => {
  return (
    <label
      {...props}
      className={['label', className].join(' ')}
    >
      {children}
    </label>
  )
}

export default Label
