import React, { useEffect, useRef } from 'react'
import { SaveButton, DeleteButton, BaseLink, Heading } from 'components/UI'
import useHover from 'hooks/useHover'
import { useLocation } from 'react-router-dom'
import { type Movie } from 'types/types'
import MovieService from 'utils/MovieService'
import { classname, formatDuration } from 'utils/utils'
import './MovieCard.css'
import useMovies from 'hooks/useMovies'
import useSavedMovies from 'hooks/useSavedMovies'

type MovieCardProps = {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps): JSX.Element {
  const location = useLocation()
  const ref = useRef(null)
  const isHover = useHover(ref)
  const { actions: moviesActions } = useMovies()
  const { state: savedMoviesStore, actions: savedMoviesActions } = useSavedMovies()
  const { block, element } = classname('movie-card')

  useEffect(() => {
    const isSaved = savedMoviesStore.movies.some((savedMovie) => savedMovie.movieId === movie.movieId)
    moviesActions?.setIsSavedMovie(isSaved, movie.movieId)
  }, [savedMoviesStore.movies, movie.movieId])

  function deleteHandler(): void {
    const currentMovie = savedMoviesStore.movies.find((m) => m.movieId === movie.movieId)
    if (currentMovie?._id) {
      MovieService
        .deleteMovie(currentMovie._id)
        .then((deletedMovie) => {
          console.log('delete')
          savedMoviesActions?.deleteMovie(deletedMovie.movieId)
          moviesActions?.setIsSavedMovie(false, movie.movieId)
        })
    }
  }

  function saveHandler(): void {
    const newMovie = {
      ...movie,
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co/' + (movie.thumbnail ?? '')
    }

    if (!movie.isSaved) {
      MovieService.saveMovie(newMovie)
        .then(() => {
          moviesActions?.setIsSavedMovie(true, movie.movieId)
        })
    } else {
      deleteHandler()
    }
  }

  const button = location.pathname === '/movies'
    ? <SaveButton
      saved={movie.isSaved}
      saveHandler={saveHandler}
      className={element('action-button', { visible: isHover || movie.isSaved })}
    />
    : <DeleteButton
      deleteHandler={deleteHandler}
      className={element('action-button', { visible: isHover })}
    />

  return (
    <article className={block} ref={ref}>
      <BaseLink target='_blank' to={movie.trailerLink} className={element('link')}>
        <img src={movie.image} alt={movie.nameRU} className={element('image')} />
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
