enum API_METHODS {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT',
  patch = 'PATCH'
}

export default class Api {
  constructor(private readonly url: string) {

  }

  private async request(path: string, params: RequestInit): Promise<any> {
    const response = await fetch(`${this.url}/${path}`, params)

    if (response.ok) {
      return response
    }

    return await Promise.reject(new Error('При запросе произошла ошибка'))
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
