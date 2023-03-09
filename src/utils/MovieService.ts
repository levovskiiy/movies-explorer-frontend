import { type IMovie } from './../types/types'
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

  public async getMovies(): Promise<IMovie[]> {
    try {
      const movies = await this.api.get<IMovie[]>('movies')

      return movies
    } catch (error: any) {
      return error
    }
  }

  public async saveMovie(movie: IMovie): Promise<IMovie> {
    try {
      const savedMovie = await this.api.post<IMovie>('movies', movie)
      return savedMovie
    } catch (error: any) {
      return error
    }
  }

  public async deleteMovie(movieId: string): Promise<IMovie> {
    try {
      const deletedMovie = await this.api.delete<IMovie>(`movies/${movieId}`)
      return deletedMovie
    } catch (error: any) {
      return error
    }
  }
}

export default new MovieService('http://localhost:5000')
