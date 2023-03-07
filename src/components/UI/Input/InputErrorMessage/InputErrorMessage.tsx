import React from 'react'
import { classname } from 'utils/utils'

import './InputErrorMessage.css'

type InputErrorMessageProps = {
  className?: string
  message?: string
}

function InputErrorMessage({ className, message }: InputErrorMessageProps): JSX.Element {
  const { block } = classname('input-error-message', {}, [className])

  return (
    <span className={block}>{message}</span>
  )
}

export default InputErrorMessage
