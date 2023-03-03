import React from 'react'
import { classname } from '../../utils/utils'
import BaseLink from '../UI/BaseLink/BaseLink'
import ListItem from '../UI/List/Item/ListItem'
import List from '../UI/List/List'
import './Navigation.css'

function Navigation(): JSX.Element {
  const { block, element } = classname('navigation')

  const styles = {
    list: element('list'),
    listItem: element('list-item'),
    listLink: element('list-link'),
    listIcon: element('list-icon')
  }

  return (
    <nav className={block}>
      <List className={styles.list}>
        <ListItem className={styles.listItem}>
          <BaseLink className={styles.listLink} to='/movies' isRoute>
            Фильмы
          </BaseLink>
        </ListItem>
        <ListItem className={styles.listItem}>
          <BaseLink className={styles.listLink} to='/saved-movies' isRoute>
            Сохраненные фильмы
          </BaseLink>
        </ListItem>
        <ListItem className={styles.listItem}>
          <BaseLink className={styles.listLink} to='/profile' isRoute>
            Профиль
          </BaseLink>
        </ListItem>

        <ListItem className={styles.listItem}>
          <BaseLink className={styles.listLink} to='/profile' isRoute>
            <div className={styles.listIcon}></div>
          </BaseLink>
        </ListItem>
      </List>
    </nav>
  )
}

export default Navigation
