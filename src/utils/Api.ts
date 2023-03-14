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

  private async request<T>(path: string, params: RequestInit): Promise<T> {
    const { headers, credentials } = this.intialOptions

    const response = await fetch(`${this.url}/${path}`, {
      ...params,
      credentials,
      headers: { ...headers, ...params.headers }

    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json() as T
  }

  public async get<T>(path: string, params?: RequestInit): Promise<T> {
    return await this.request<T>(path, { method: API_METHODS.get, ...params })
  }

  public async post<T>(path: string, data?: T, params?: RequestInit): Promise<T> {
    return await this.request<T>(path, { method: API_METHODS.post, body: JSON.stringify(data), ...params })
  }

  public async patch<T>(path: string, data?: T, params?: RequestInit): Promise<T> {
    return await this.request<T>(path, { method: API_METHODS.patch, body: JSON.stringify(data), ...params })
  }

  public async delete<T>(path: string, params?: RequestInit): Promise<T> {
    return await this.request<T>(path, { method: API_METHODS.delete, ...params })
  }

  public async put<T>(path: string, params?: RequestInit): Promise<T> {
    return await this.request<T>(path, { method: API_METHODS.put, ...params })
  }
}
