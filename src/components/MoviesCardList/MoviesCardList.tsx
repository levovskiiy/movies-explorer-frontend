import React from 'react'
import { type Movie } from '../../types/types'
import { classname } from '../../utils/utils'
import MovieCard from '../MovieCard/MovieCard'
import { List } from '../UI'
import Item from '../UI/List/Item/ListItem'

import './MoviesCardList.css'

type MoviesCardListProps = {
  movies: Movie[]
  className?: string
}

function MoviesCardList({ movies, className }: MoviesCardListProps): JSX.Element {
  const { block, element } = classname('movies-card-list', {}, [className])

  return (
    <section className={block}>
      <List className={element('movies')}
        items={movies}
        renderItem={(item) => (
          <Item className={element('movie')} key={item.movieId}>
            <MovieCard movie={item} />
          </Item>
        )}
      />
    </section>
  )
}

export default React.memo(MoviesCardList)
