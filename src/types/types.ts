export type Size = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'mb'

export type Theme = 'landing' | 'app' | 'auth'

export type ISocial = {
  social: string
  link: string
  id: number
}

export type IBeatfilmMovie = {
  id: number
  country: string
  director: string
  duration: number
  year: string
  description: string
  image: {
    url: string
  }
  trailerLink: string
  thumbnail: string
  nameRU: string
  nameEN: string
}

export type IMovie = {
  image: string
} & Omit<IBeatfilmMovie, 'image'>

export type IUser = {
  _id?: string
  name: string
  email: string
  password: string
}
