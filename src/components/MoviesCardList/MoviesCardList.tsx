import React, { useEffect, useState } from 'react'
import { type IMovie } from '../../types/types'
import MoviesService from '../../utils/MoviesService'
import { classname } from '../../utils/utils'
import MovieCard from '../MovieCard/MovieCard'
import Item from '../UI/List/Item/ListItem'
import List from '../UI/List/List'

import './MoviesCardList.css'

const MoviesCardList = () => {
  const { block, element } = classname('movies-card-list')
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    MoviesService.getMovies()
      .then(movies => {
        setMovies(movies)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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

export default MoviesCardList
