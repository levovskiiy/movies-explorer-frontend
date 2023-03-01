import React, { type FC, type ComponentType } from 'react'
import { classname, type Bem } from '../../utils/utils'
import './WithForm.css'

interface WithFormProps {
  withForm: Bem
}

function withForm<P extends WithFormProps>(WrappedComponent: ComponentType<P>): FC<Omit<P, keyof WithFormProps>> {
  const WithForm = (props: Omit<P, keyof WithFormProps>) => {
    const withForm = classname('with-form')

    return (
      <WrappedComponent {...props as P} withForm={withForm} />
    )
  }

  return WithForm
}

export default withForm
