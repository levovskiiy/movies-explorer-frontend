import React, { type FC, type ComponentType } from 'react'
import { bem } from '../../utils/utils'
import Heading from '../UI/Heading/Heading'
import logo from '../../images/logo.svg'
import './WithFormPage.css'

const withFormPage = <P extends object>(WrappedComponent: ComponentType<P>, title: string): FC<P> => {
  const WithFormPage: FC<P> = (props) => {
    const [block, cs] = bem({
      block: 'form-page'
    })

    return (
      <section className={block}>
        <div className={cs('content')}>
          <img src={logo} alt="Логотип" className={cs('logo')} />
          <Heading as='h1' size="md" className={cs('title')}>{title}</Heading>
          <WrappedComponent {...props} />
        </div>
      </section>
    )
  }

  return WithFormPage
}

export default withFormPage
