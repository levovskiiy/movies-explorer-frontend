export type Size = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'mb'

export type Theme = 'landing' | 'app' | 'auth'

export interface ISocial {
  social: string
  link: string
  id: number
}

export interface IMovie {
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
  owner: any
  movieId: any
  nameRU: string
  nameEN: string
}
