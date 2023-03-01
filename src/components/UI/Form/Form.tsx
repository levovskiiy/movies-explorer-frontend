import React, { type FC, type ReactNode } from 'react'
import { classname } from '../../../utils/utils'
import './Form.css'

interface FormProps {
  children?: ReactNode
  className?: string
}

const Form: FC<FormProps> = ({
  children,
  className
}) => {
  const { block } = classname('form', {}, [className])

  return (
    <form className={block}>
      {children}
    </form>
  )
}

export default Form
