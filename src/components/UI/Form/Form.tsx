import React, { type FormHTMLAttributes, type ReactNode, type PropsWithChildren } from 'react'
import { classname } from '../../../utils/utils'
import './Form.css'

type FormProps = {
  children?: ReactNode
  className?: string
} & FormHTMLAttributes<HTMLFormElement>

function Form({ children, className, ...props }: PropsWithChildren<FormProps>): JSX.Element {
  const { block } = classname('form', {}, [className])

  return (
    <form {...props} className={block}>
      {children}
    </form>
  )
}

export default Form
