import React, { type HTMLAttributes } from 'react'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import Label from '../Label/Label'

import './TextInput.css'

type TextInputProps = {
  label: string
  id: string
  type: string
  name: string
  error?: boolean
  errorMessage?: string
} & HTMLAttributes<HTMLInputElement>

function TextInput({ label, id, type, name, error, className, errorMessage, ...rest }: TextInputProps): JSX.Element {
  const { block, element } = classname('text-input', {}, [className])

  return (
    <>
      <Label label={label} htmlFor={id} className={element('label')} />
      <Input {...rest} id={id} type={type} name={name} className={block} />
      <span className={element('error', { visible: error })}>{errorMessage}</span>
    </>
  )
}

export default TextInput
