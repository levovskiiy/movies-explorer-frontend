import React, { type LabelHTMLAttributes } from 'react'
import './InputLabel.css'

type InputLabelProps = {
  label: string
} & LabelHTMLAttributes<HTMLLabelElement>

function InputLabel({ label, className, ...props }: InputLabelProps): JSX.Element {
  return (
    <label
      {...props}
      className={['input-label', className].join(' ')}
    >
      {label}
    </label>
  )
}

export default InputLabel
