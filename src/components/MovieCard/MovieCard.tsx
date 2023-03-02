import React, { type FC } from 'react'
import { type IMovie } from '../../types/types'
import { classname } from '../../utils/utils'
import Button from '../UI/Button/Button'

import './MovieCard.css'

interface MovieCardProps {
  movie: IMovie
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const { element } = classname('movie-card')
  return (
    <>
      <div className={element('image')}>
        <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt="" className={element('image-img')} />
        <Button type='button' variant='tertiary' className={element('save')}>Сохранить</Button>
      </div>
      <h4 className={element('title')}>{movie.nameRU}</h4>
      <span className={element('duration')}>{movie.duration}</span>
    </>
  )
}

export default MovieCard
