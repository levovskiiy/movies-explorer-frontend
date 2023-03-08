import React, { type PropsWithChildren } from 'react'
import { classname } from 'utils/utils'

type FieldWrapperProps = {
  className?: string
}

function FieldWrapper({ children, className }: PropsWithChildren<FieldWrapperProps>): JSX.Element {
  const { block } = classname('field-wrapper', {}, [className])
  return (
    <div className={block}>
      {children}
    </div>
  )
}

export default FieldWrapper
