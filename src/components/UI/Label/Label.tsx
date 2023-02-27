import React, { type FC, type LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
}

const Label: FC<LabelProps> = ({ label, className, ...props }) => {
  return (
    <label
      {...props}
      className={['label', className].join(' ')}
    >
      {label}
    </label>
  )
}

export default Label
