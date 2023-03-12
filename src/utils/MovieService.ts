import { type Movie } from './../types/types'
import Api from './Api'

class MovieService {
  private readonly api: Api

  constructor(private readonly url: string) {
    this.api = new Api(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  }

  public async getMovies(): Promise<Movie[]> {
    try {
      const movies = await this.api.get<Movie[]>('movies')

      return movies
    } catch (error: any) {
      return error
    }
  }

  public async saveMovie(movie: Movie): Promise<Movie> {
    try {
      const savedMovie = await this.api.post<Movie>('movies', movie)
      return savedMovie
    } catch (error: any) {
      return error
    }
  }

  public async deleteMovie(movieId: string): Promise<Movie> {
    try {
      const deletedMovie = await this.api.delete<Movie>(`movies/${movieId}`)
      return deletedMovie
    } catch (error: any) {
      return error
    }
  }
}

export default new MovieService('https://api.moviesapp.nomoredomains.work')
