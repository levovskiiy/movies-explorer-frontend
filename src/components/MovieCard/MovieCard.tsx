import React from 'react'
import { type IMovie } from '../../types/types'
import { classname } from '../../utils/utils'
import BaseLink from '../UI/BaseLink/BaseLink'
import Button from '../UI/Button/Button'
import Heading from '../UI/Heading/Heading'

import './MovieCard.css'

type MovieCardProps = {
  movie: IMovie
}

function formatDuration(duration: number): string {
  if (duration > 60) {
    return (duration / 60 | 0) + 'ч ' + duration % 60 + 'м'
  }

  if (duration === 60) {
    return (duration / 60) + 'ч'
  }

  return duration + 'м'
}

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const { element } = classname('movie-card')

  return (
    <>
      <BaseLink to={movie.trailerLink} className={element('link')}>
        <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt="" className={element('image')} />
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
