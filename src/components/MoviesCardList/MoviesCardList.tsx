import React from 'react'
import { type IMovie } from '../../types/types'
import { classname } from '../../utils/utils'
import MovieCard from '../MovieCard/MovieCard'
import Item from '../UI/List/Item/ListItem'
import List from '../UI/List/List'

import './MoviesCardList.css'

type MoviesCardListProps = {
  movies: IMovie[]
}

function MoviesCardList({ movies }: MoviesCardListProps): JSX.Element {
  const { block, element } = classname('movies-card-list')
  return (
    <section className={block}>
      <List className={element('movies')}
        items={movies}
        renderItem={(item) => (
          <Item className={element('movie')} key={item.id}>
            <MovieCard movie={item} />
          </Item>
        )}
      />
    </section>
  )
}

export default React.memo(MoviesCardList)
