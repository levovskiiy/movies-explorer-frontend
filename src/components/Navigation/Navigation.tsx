import React, { useMemo, useState, type MouseEvent } from 'react'
import { classname } from '../../utils/utils'
import { Button, BaseLink, List } from '../UI'
import ListItem from '../UI/List/Item/ListItem'
import './Navigation.css'

function Navigation(): JSX.Element {
  const { block, element } = classname('navigation', { overlay: false })

  const [activeMenu, setActiveMenu] = useState(false)

  const styles = useMemo(() => {
    return {
      list: element('list'),
      burgerBtn: element('burger-btn', { clicked: activeMenu }),
      overlay: element('overlay', { open: activeMenu }),
      menu: element('menu', { active: activeMenu }),
      listItem: element('list-item'),
      listLink: element('list-link'),
      listIcon: element('list-icon')
    }
  }, [activeMenu])

  function toggle(): void {
    setActiveMenu(!activeMenu)
  }

  function close(): void {
    setActiveMenu(false)
  }

  function clickOutside(e: MouseEvent): void {
    e.stopPropagation()
  }

  return (
    <nav className={block}>
      <Button type='button' variant="ghost" className={styles.burgerBtn} onClick={toggle}>
        <span className={element('burger-line')}></span>
      </Button>
      <div className={styles.overlay} onClick={close}>
        <div className={styles.menu} onClick={clickOutside}>
          <List className={styles.list}>
            <ListItem className={element('list-item', { 'to-main': true })}>
              <BaseLink onClick={close} className={styles.listLink} to='/' isRoute>
                Главная
              </BaseLink>
            </ListItem>
            <ListItem className={styles.listItem}>
              <BaseLink onClick={close} className={styles.listLink} to='/movies' isNavLink>
                Фильмы
              </BaseLink>
            </ListItem>
            <ListItem className={styles.listItem}>
              <BaseLink onClick={close} className={styles.listLink} to='/saved-movies' isNavLink>
                Сохраненные фильмы
              </BaseLink>
            </ListItem>
            <ListItem className={styles.listItem}>
              <BaseLink onClick={close} className={styles.listLink} to='/profile' isRoute>
                Профиль
                <div className={styles.listIcon}></div>
              </BaseLink>

            </ListItem>
          </List>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
