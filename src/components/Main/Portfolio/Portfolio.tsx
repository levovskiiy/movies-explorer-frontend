import React from 'react'
import BaseLink from '../../UI/BaseLink/BaseLink'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'

import './Portfolio.css'
import Divider from '../../UI/Divider/Divider'
import { classname } from '../../../utils/utils'

const Portfolio = () => {
  const { element } = classname('portfolio')

  const styles = {
    items: element('items'),
    link: element('link')
  }

  return (
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
  )
}

export default Portfolio
