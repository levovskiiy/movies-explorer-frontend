import React from 'react'
import { classname } from '../../../utils/utils'
import { Container, Heading, Divider, List, Text } from '../../UI'
import ListItem from '../../UI/List/Item/ListItem'

import './Techs.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'MongoDB']

function Techs(): JSX.Element {
  const { block, element } = classname('techs')

  return (
    <section className={block}>
      <Container>
        <Heading as='h4' className={element('header')}>Технологии</Heading>
        <Divider />

        <div className={element('content')}>
          <Heading as='h3' className={element('content-title')}>7 Технологий</Heading>
          <Text className={element('content-text')}>
            На курсе веб-разработки мы освоили технологии,
            которые применили в дипломном проекте.
          </Text>

          <List
            className={element('list')}
            items={techs}
            renderItem={
              (item) => <ListItem
                className={element('list-item')}
                key={item}>
                {item}
              </ListItem>} />
        </div>
      </Container>
    </section>
  )
}

export default Techs
