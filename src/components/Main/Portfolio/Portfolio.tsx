import React from 'react'
import { classname } from '../../../utils/utils'
import { Heading, List, BaseLink, Divider } from '../../UI'
import ListItem from '../../UI/List/Item/ListItem'

import './Portfolio.css'

function Portfolio(): JSX.Element {
  const { element } = classname('portfolio')

  const styles = {
    title: element('title'),
    items: element('items'),
    link: element('link')
  }

  return (
    <>
      <Heading as='h4' className={element('title')}>Портфолио</Heading>
      <List className={styles.items}>
        <ListItem>
          <BaseLink className={styles.link} to='https://github.com/levovskiiy/'>
            Статический сайт
          </BaseLink>
          <Divider />
        </ListItem>
        <ListItem>
          <BaseLink className={styles.link} to='https://github.com/levovskiiy/'>
            Сайт React
          </BaseLink>
          <Divider />
        </ListItem>
        <ListItem>
          <BaseLink className={styles.link} to='https://github.com/levovskiiy/'>
            Vainlla JS
          </BaseLink>
          <Divider />
        </ListItem>
        <ListItem>
          <BaseLink className={styles.link} to='https://github.com/levovskiiy/'>
            Fullstack Application
          </BaseLink>
        </ListItem>
      </List>
    </>
  )
}

export default Portfolio
