import React, { type PropsWithChildren } from 'react'
import { classname } from 'utils/utils'

import './InputWrapper.css'

type InputWrapperProps = {
  className?: string
}

function InputWrapper({ children, className }: PropsWithChildren<InputWrapperProps>): JSX.Element {
  const { block } = classname('input-wrapper', {}, [className])
  return (
    <div className={block}>
      {children}
    </div>
  )
}

export default InputWrapper
