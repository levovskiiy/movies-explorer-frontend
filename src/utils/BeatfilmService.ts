import { type BeatfilmMovie, type Movie } from 'types/types'
import Api from './Api'
import { BEATFILM_MOVIE_API_URL } from './constants'

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
      const { id: movieId, ...other } = movie
      return {
        ...other,
        movieId: Number(movie.id),
        isSaved: false,
        image: BEATFILM_MOVIE_API_URL + movie.image.url
      }
    })
  }
}

export default new BeatfilmService(BEATFILM_MOVIE_API_URL)
