import React, { type HTMLAttributes } from 'react'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import Label from '../Label/Label'

import './TextInput.css'

type TextInputProps = {
  label: string
  id: string
  type: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | 'password'
  name: string
  error?: boolean
  errorMessage?: string
  variant?: 'profile'
} & HTMLAttributes<HTMLInputElement>

function TextInput({ label, id, type, name, error, className, variant, errorMessage, ...rest }: TextInputProps): JSX.Element {
  const { block, element } = classname('text-input', {}, [className])

  return (
    <div className={element('field')}>
      <Label label={label} htmlFor={id} className={element('label', { variant })} />
      <Input {...rest} variant={variant} id={id} type={type} name={name} className={block} />
      <span className={element('error', { visible: error })}>{errorMessage}</span>
    </div>
  )
}

export default TextInput
