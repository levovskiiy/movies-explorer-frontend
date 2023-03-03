import React, { type LabelHTMLAttributes } from 'react'
import './Label.css'

type LabelProps = {
  label: string
} & LabelHTMLAttributes<HTMLLabelElement>

function Label({ label, className, ...props }: LabelProps): JSX.Element {
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
