import React from 'react'
import { classname } from '../../../utils/utils'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'

import './Techs.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'MongoDB']

const Techs = () => {
  const { block, element } = classname('techs')

  return (
    <section className={block}>
      <Container>
        <h4 className={element('header')}>Технологии</h4>
        <Divider />

        <div className={element('content')}>
          <h3 className={element('content-title')}>7 Технологий</h3>
          <p className={element('content-text')}>
            На курсе веб-разработки мы освоили технологии,
            которые применили в дипломном проекте.
          </p>

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
