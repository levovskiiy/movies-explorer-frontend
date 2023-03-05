import React, { type HTMLAttributes, type ReactNode, type PropsWithChildren } from 'react'
import { classname } from '../../../utils/utils'
import './Form.css'

type FormProps = {
  children?: ReactNode
  className?: string
} & HTMLAttributes<HTMLFormElement>

function Form({ children, className, ...props }: PropsWithChildren<FormProps>): JSX.Element {
  const { block } = classname('form', {}, [className])

  return (
    <form {...props} className={block}>
      {children}
    </form>
  )
}

export default Form
