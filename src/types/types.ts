export type Size = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'mb'

export type Theme = 'landing' | 'app' | 'auth'

export type ISocial = {
  social: string
  link: string
  id: number
}

export type IMovie = {
  id: number
  country: string
  director: string
  duration: number
  year: string
  description: string
  image: {
    id: number
    url: string
    previewUrl: string

  }
  trailerLink: string
  thumbnail: string
  nameRU: string
  nameEN: string
}

export type IUser = {
  name: string
  email: string
  password: string
  isAuth: boolean
}
