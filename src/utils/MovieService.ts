// import { type IMovie } from './../types/types'
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
}

export default new MovieService('http://localhost:5000')
