import React from 'react'
import { type IMovie } from '../../types/types'
import { classname, formatDuration } from '../../utils/utils'
import { BaseLink, Button, Heading } from '../UI'

import './MovieCard.css'

type MovieCardProps = {
  movie: IMovie
}

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const { element } = classname('movie-card')

  return (
    <>
      <BaseLink target='_blank' to={movie.trailerLink} className={element('link')}>
        <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className={element('image')} />
      </BaseLink>
      <Button type='button' variant='tertiary' className={element('save')}>
        Сохранить
      </Button>
      <div className={element('text')}>
        <Heading as='h4' className={element('title')}>{movie.nameRU}</Heading>
        <span className={element('duration')}>{formatDuration(movie.duration)}</span>
      </div>
    </>
  )
}

export default MovieCard
