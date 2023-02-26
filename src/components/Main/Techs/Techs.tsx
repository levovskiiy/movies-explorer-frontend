import React from 'react'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import Heading from '../../UI/Heading/Heading'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'
import Paragraph from '../../UI/Paragraph/Paragraph'

import './Techs.css'

const Techs = () => {
  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'MongoDB']

  return (
    <section className='techs'>
      <Container>
        <Heading as='h4' size='md' className='techs__header'>Технологии</Heading>
        <Divider />

        <div className="techs__content">
          <Heading as='h3' size='xxl' className='techs__content-title'>7 Технологий</Heading>
          <Paragraph className='techs__content-text'>
            На курсе веб-разработки мы освоили технологии,
            которые применили в дипломном проекте.
          </Paragraph>

          <List
            className='techs__list'
            items={techs}
            renderItem={
              (item) => <ListItem
                className='techs__list-item'
                key={item}>
                {item}
              </ListItem>} />
        </div>
      </Container>
    </section>
  )
}

export default Techs
