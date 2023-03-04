import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import Container from '../../components/UI/Container/Container'
import Heading from '../../components/UI/Heading/Heading'
import Text from '../../components/UI/Text/Text'
import { classname } from '../../utils/utils'

import './NotFoundPage.css'

function NotFoundPage(): JSX.Element {
  const navigate = useNavigate()

  const { block, element } = classname('not-found-page')

  function goBack() {
    navigate(-1)
  }

  return (
    <Container>
      <section className={block}>
        <Heading className={element('title')}>
          404
        </Heading>
        <Text className={element('text')}>Старница не найдена</Text>
        <Button className={element('link')} onClick={goBack} variant='link'>Назад</Button>
      </section>
    </Container>
  )
}

export default NotFoundPage
