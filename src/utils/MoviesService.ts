import Api from './Api'

class MoviesService {
  private readonly api: Api

  constructor(private readonly url: string) {
    this.api = new Api(this.url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  public async getMovies() {
    return await this.api.get('beatfilm-movies')
  }
}

export default new MoviesService('https://api.nomoreparties.co')
