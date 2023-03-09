enum API_METHODS {
  get = 'GET',
  post = 'POST',
  delete = 'DELETE',
  put = 'PUT',
  patch = 'PATCH'
}

type Options = Pick<RequestInit, 'credentials' | 'headers'>

class UnauthorizedError extends Error {
  public readonly status: number

  constructor(message: string) {
    super(message)
    this.name = 'UnauthorizedError'
    this.status = 401
  }
}

class ForbiddenError extends Error {
  public readonly status: number

  constructor(message: string) {
    super(message)
    this.name = 'ForbiddenError'
    this.status = 403
  }
}

class NotFoundError extends Error {
  public readonly status: number

  constructor(message: string) {
    super(message)
    this.name = 'NotFoundError'
    this.status = 404
  }
}

class InternalServerError extends Error {
  public readonly status: number

  constructor(message: string) {
    super(message)
    this.name = 'InternalServerError'
    this.status = 500
  }
}

function APIErrorHandler(status: number): never {
  if (status === 401) {
    throw new UnauthorizedError('Неверный Email или пароль')
  } else if (status === 403) {
    throw new ForbiddenError('Не возможно обработать ресурс')
  } else if (status === 404) {
    throw new NotFoundError('Данный ресурс не найден')
  }
  throw new InternalServerError('Что-то пошло не так')
}

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
      APIErrorHandler(response.status)
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
