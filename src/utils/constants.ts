const { NODE_ENV, REACT_APP_DOMAIN } = process.env

export const PROTOCOL = NODE_ENV === 'development' ? 'http' : 'https'
export const API_HOST = NODE_ENV === 'development' ? 'localhost' : REACT_APP_DOMAIN ?? 'localhost'
export const API_PORT = NODE_ENV === 'development' ? 3080 : null
export const BEATFILM_MOVIE_API_URL = 'https://api.nomoreparties.co'
export const API_URL = `${PROTOCOL}://${API_HOST}${API_PORT ? ':' + API_PORT : ''}`
export const SHORT_DURATION = 40

export const VALIDATION_ERROR_MESSAGE = {
  email: {
    REQUIRED: 'Заполните поле',
    INCORRECT_FORMAT: 'Некорректный адрес электронной почты. Напишите в формате "example@domain.com"'
  }
} as const
