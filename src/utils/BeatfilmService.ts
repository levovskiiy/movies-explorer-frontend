import { type BeatfilmMovie, type Movie } from 'types/types'
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

  public async getMovies(): Promise<Movie[]> {
    const movies = await this.api.get<BeatfilmMovie[]>('beatfilm-movies')

    return movies.map(movie => {
      return {
        ...movie,
        image: movie.image.url
      }
    })
  }
}

export default new BeatfilmService('https://api.nomoreparties.co')
