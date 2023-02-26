import React from 'react'
import { type ISocial } from '../../../types/types'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import Heading from '../../UI/Heading/Heading'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'
import Paragraph from '../../UI/Paragraph/Paragraph'
import PresonImage from '../../../images/person_image.jpg'
import './AboutMe.css'
import BaseLink from '../../UI/Link/BaseLink'

const AboutMe = () => {
  const socialLinks: ISocial[] = [{
    social: 'GitHub',
    link: 'https://github.com/levovskiiy'
  }]

  return (
    <section className='about-me'>
      <Container>
        <Heading as='h4' size='md' className='about-me__title'>
          Студент
        </Heading>
        <Divider />

        <div className="about-me__content">
          <div className="about-me__student">
            <Heading as='h3' size='xxl' className='about-me__name'>Лев</Heading>
            <Heading as='h4' className='about-me__profession'>Фронтенд-разработчик</Heading>
            <Paragraph size='sm' className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
              С 2015 года работал в компании «СКБ Контур».
              После того, как прошёл курс по веб-разработке,
              начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </Paragraph>
            <List className='about-me__social-list' items={socialLinks} renderItem={(item) => <ListItem>
              <BaseLink href={item.link} className='about-me__social-link'>{item.social}</BaseLink>
            </ListItem>} />
          </div>
          <img className='about-me__student-image' src={PresonImage} alt="Фото студента" />
        </div>
      </Container>
    </section>
  )
}

export default AboutMe
