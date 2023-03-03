import React from 'react'
import { type ISocial } from '../../../types/types'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'
import PresonImage from '../../../images/person_image.jpg'
import BaseLink from '../../UI/BaseLink/BaseLink'
import Portfolio from '../Portfolio/Portfolio'
import { classname } from '../../../utils/utils'
import Heading from '../../UI/Heading/Heading'
import Text from '../../UI/Text/Text'

import './AboutMe.css'

const AboutMe = () => {
  const socialLinks: ISocial[] = [{
    social: 'GitHub',
    link: 'https://github.com/levovskiiy',
    id: Date.now()
  }]

  const { block, element } = classname('about-me')

  return (
    <section className={block}>
      <Container>
        <Heading as='h4' className={element('title')}>
          Студент
        </Heading>
        <Divider />

        <div className={element('content')}>
          <div className={element('student')}>
            <Heading as='h3' className={element('name')}>Лев</Heading>
            <Heading as='h4' className={element('profession')}>Фронтенд-разработчик, 21 год</Heading>
            <Text className={element('text')}>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </Text>
            <List className={element('social-list')} items={socialLinks} renderItem={(item) => <ListItem key={item.id}>
              <BaseLink to={element('link')} className='about-me__social-link'>{item.social}</BaseLink>
            </ListItem>} />
          </div>
          <img className={element('student-image')} src={PresonImage} alt="Фото студента" />
        </div>
        <div className={element('portfolio')}>
          <Portfolio />
        </div>
      </Container>
    </section>
  )
}

export default AboutMe
