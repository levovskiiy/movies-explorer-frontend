import React from 'react'
import { classname } from '../../../utils/utils'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import Heading from '../../UI/Heading/Heading'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'
import Text from '../../UI/Text/Text'

import './Techs.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'MongoDB']

const Techs = () => {
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
