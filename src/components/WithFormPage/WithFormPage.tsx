import React, { type FC, type ComponentType } from 'react'
import { classname } from '../../utils/utils'
import logo from '../../images/logo.svg'
import Heading from '../UI/Heading/Heading'
import Container from '../UI/Container/Container'

import './WithFormPage.css'

function withFormPage<P extends object>(WrappedComponent: ComponentType<P>, title?: string): FC<P> {
  const WithFormPage: FC<P> = (props) => {
    const { block, element } = classname('form-page')

    const classnames = {
      content: element('content'),
      logo: element('logo'),
      title: element('title')
    }

    return (
      <Container>
        <section className={block}>
          <div className={classnames.content}>
            <img src={logo} alt="Логотип" className={classnames.logo} />
            <Heading className={classnames.title}>{title}</Heading>
            <WrappedComponent {...props} />
          </div>
        </section>
      </Container>
    )
  }

  return WithFormPage
}

export default withFormPage
