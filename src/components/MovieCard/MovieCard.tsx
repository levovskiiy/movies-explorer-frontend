import { BaseLink, DeleteButton, Heading, SaveButton } from 'components/UI'
import useHover from 'hooks/useHover'
import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { type Movie } from 'types/types'
import { classname, formatDuration } from 'utils/utils'

import './MovieCard.css'

type MovieCardProps = {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const [saved, setSaved] = useState(false)
  const location = useLocation()
  const ref = useRef(null)
  const isHover = useHover(ref)

  const { block, element } = classname('movie-card')

  function saveHandler(): void {
    setSaved(true)
    console.log('save')
  }

  function deleteHandler(): void {
    console.log('delete')
  }

  const button = location.pathname === '/movies'
    ? <SaveButton saved={saved} saveHandler={saveHandler} className={element('action-button', { visible: isHover || saved })} />
    : <DeleteButton deleteHandler={deleteHandler} className={element('action-button', { visible: isHover })} />

  return (
    <article className={block} ref={ref}>
      <BaseLink target='_blank' to={movie.trailerLink} className={element('link')}>
        <img src={`https://api.nomoreparties.co/${movie.image}`} alt={movie.nameRU} className={element('image')} />
      </BaseLink>
      <div className={element('text')}>
        <Heading as='h4' className={element('title')}>{movie.nameRU}</Heading>
        <span className={element('duration')}>{formatDuration(movie.duration)}</span>
      </div>
      {button}
    </article>
  )
}

export default MovieCard
