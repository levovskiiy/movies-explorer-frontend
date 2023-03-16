import { type Movie } from 'types/types'
import bem from './bem'
import validator from 'validator'

function findMovies(value: Movie[], query: string): Movie[] {
  return value.filter(v => {
    console.log(v)
    console.log(query)
    console.log(v.nameRU.toLowerCase().includes(query.toLowerCase()))
    return v.nameRU.toLowerCase().includes(query.toLowerCase())
  })
}

function filterMovies(movies: Movie[], isShort: boolean): Movie[] {
  return isShort ? movies.filter(m => m.duration <= 40) : movies
}

function merge(...tokens: Array<string | undefined>): string {
  const result: string[] = []
  const classnames = tokens.join(' ').split(' ')
  const unique = new Set()

  for (const classname of classnames) {
    if (classname !== '' && !unique.has(classname)) {
      unique.add(classname)
      result.push(classname)
    }
  }

  return result.join(' ')
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

const emailValidator = (email: string): string => {
  if (email.length === 0) {
    return 'Заполните поле'
  }

  if (!validator.isEmail(email)) {
    return 'Некорректный адрес электронной почты. Напишите в формате "example@domain.com"'
  }

  return ''
}

const classname = bem({
  modDelimeter: '_',
  elementDelimeter: '__'
})

export {
  classname,
  merge,
  formatDuration,
  findMovies,
  filterMovies,
  emailValidator
}
