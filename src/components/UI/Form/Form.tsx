import React, { type FC, type ReactNode, type FormEvent, useMemo } from 'react'
import { bem, classess } from '../../../utils/utils'

interface FormProps {
  children: ReactNode
  className?: string
  onSubmit: (evt: FormEvent) => any
}

const Form: FC<FormProps> = ({
  children,
  onSubmit,
  className
}) => {
  const [form] = bem({
    block: 'form'
  })

  const cls = useMemo(() => classess(form, className), [form, className])

  return (
    <form onSubmit={onSubmit} className={cls}>
      {children}
    </form>
  )
}

export default Form
