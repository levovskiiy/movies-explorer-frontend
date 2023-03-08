import Api from './Api'

class MoviesService extends Api {
  constructor(protected readonly url: string) {
    super(url)
  }

  public async getMovies() {
    return await super.get('beatfilm-movies', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }
}

export default new MoviesService('https://api.nomoreparties.co')
