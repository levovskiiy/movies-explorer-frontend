import { type IBeatfilmMovie, type IMovie } from 'types/types'
import Api from './Api'

class BeatfilmService {
  private readonly api: Api

  constructor(private readonly url: string) {
    this.api = new Api(this.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  public async getMovies(): Promise<IMovie[]> {
    try {
      const movies = await this.api.get<IBeatfilmMovie[]>('beatfilm-movies')

      return movies.map(movie => {
        return {
          ...movie,
          image: movie.image.url
        }
      })
    } catch (error: any) {
      return error
    }
  }
}

export default new BeatfilmService('https://api.nomoreparties.co')
