import React, { type FormHTMLAttributes, type ReactNode, type PropsWithChildren } from 'react'
import { classname } from '../../../utils/utils'
import './Form.css'

type FormProps = {
  children?: ReactNode
  className?: string
} & FormHTMLAttributes<HTMLFormElement>

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  function Form({ children, className, ...props }: PropsWithChildren<FormProps>, ref): JSX.Element {
    const { block } = classname('form', {}, [className])

    return (
      <form {...props} ref={ref} className={block}>
        {children}
      </form>
    )
  }
)

export default Form
