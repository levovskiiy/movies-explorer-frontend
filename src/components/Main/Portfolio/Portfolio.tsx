import React from 'react'
import BaseLink from '../../UI/Link/BaseLink'
import ListItem from '../../UI/List/Item/ListItem'
import List from '../../UI/List/List'

import './Portfolio.css'
import Divider from '../../UI/Divider/Divider'

interface IPortfolio {
  name: string
  url: string
  id: number
}

const Portfolio = () => {
  const portfolio: IPortfolio[] = [
    {
      name: 'Статический сайт',
      url: 'https://github.com/levovskiiy/',
      id: Date.now()
    },
    {
      name: 'Сайт Vanilla JS',
      url: 'https://github.com/levovskiiy/',
      id: Date.now()
    },
    {
      name: 'Сайт React',
      url: 'https://github.com/levovskiiy/',
      id: Date.now()
    },
    {
      name: 'FullStack App',
      url: 'https://github.com/levovskiiy/',
      id: Date.now()
    }
  ]

  return (
    <List
      className="portfolio__items"
      items={portfolio}
      renderItem={(item, idx) => (
        <ListItem key={item.id + idx}>
          <BaseLink className="portfolio__link" to={item.url}>
            {item.name}
          </BaseLink>
          {idx !== portfolio.length - 1 && <Divider />}
        </ListItem>
      )}>
    </List>
  )
}

export default Portfolio
