enum API_METHODS {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT',
  patch = 'PATCH'
}

type Options = Pick<RequestInit, 'credentials' | 'headers'>

export default class Api {
  constructor(
    private readonly url: string,
    private readonly intialOptions: Options
  ) { }

  private async request(path: string, params: RequestInit): Promise<any> {
    const { headers, credentials } = this.intialOptions

    try {
      const response = await fetch(`${this.url}/${path}`, {
        ...params,
        credentials,
        headers: { ...headers, ...params.headers }

      })

      if (response.ok) {
        return response
      }

      throw new Error(response.statusText)
    } catch (error) {
      return error
    }
  }

  public async get(path: string, params?: RequestInit): Promise<any> {
    return await this.request(path, { method: API_METHODS.get })
  }

  public async post(path: string, data?: any, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.post, body: JSON.stringify(data), ...params })
  }

  public async patch(path: string, data?: any, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.patch, body: JSON.stringify(data), ...params })
  }

  public async delete(path: string, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.delete, ...params })
  }

  public async put(path: string, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.put, ...params })
  }
}
