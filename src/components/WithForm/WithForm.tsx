import React, { type FC, type ComponentType } from 'react'
import { bem, type BemConfigurator } from '../../utils/utils'
import './WithForm.css'

interface WithFormProps {
  bemConfigurator: BemConfigurator
}

function withForm<P extends WithFormProps>(WrappedComponent: ComponentType<P>): FC<Omit<P, keyof WithFormProps>> {
  const WithForm = (props: Omit<P, keyof WithFormProps>) => {
    const withFormBem = bem({
      block: 'with-form'
    })

    return (
      <WrappedComponent {...props as P} bemConfigurator={withFormBem} />
    )
  }

  return WithForm
}

export default withForm
