import Api from './Api'

class MoviesService {
  private readonly api: Api

  constructor(private readonly url: string) {
    this.api = new Api(this.url)
  }

  public async getMovies() {
    return await this.api.get('beatfilm-movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}

export default new MoviesService('https://api.nomoreparties.co')
