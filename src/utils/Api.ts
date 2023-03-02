enum API_METHODS {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT',
  patch = 'PATCH'
}

export default class Api {
  constructor(protected readonly url: string) {

  }

  protected async request(path: string, params: RequestInit): Promise<any> {
    const response = await fetch(`${this.url}/${path}`, params)

    if (response.ok) {
      return await response.json()
    }

    return await Promise.reject(new Error('При запросе произошла ошибка'))
  }

  protected async get(path: string, params?: RequestInit): Promise<any> {
    return await this.request(path, { method: API_METHODS.get })
  }

  protected async post(path: string, data?: any, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.post, body: JSON.stringify(data), ...params })
  }

  protected async patch(path: string, data?: any, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.patch, body: JSON.stringify(data), ...params })
  }

  protected async delete(path: string, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.delete, ...params })
  }

  protected async put(path: string, params?: RequestInit) {
    return await this.request(path, { method: API_METHODS.put, ...params })
  }
}
