const { NODE_ENV, REACT_APP_DOMAIN } = process.env

export const PROTOCOL = NODE_ENV === 'development' ? 'http' : 'https'
export const API_HOST = NODE_ENV === 'development' ? 'localhost' : REACT_APP_DOMAIN ?? 'localhost'
export const API_PORT = NODE_ENV === 'development' ? 5000 : null
export const BEATFILM_MOVIE_API_URL = 'https://api.nomoreparties.co'
export const API_URL = `${PROTOCOL}://${API_HOST}${API_PORT ? ':' + API_PORT : ''}`

export const API_ERRORS_MESSAGES = {
  UNAUTHORIZED: 'Вы не авторизованы',
  INVALID_CREDENTIALS: 'Неверный логин или пароль',
  INTERNAL_SERVER_ERROR: 'Что-то произошло на сервере. Попробуйте перезагрузить страницу и сделать запрос снова.',
  EMAIL_ALREADY_EXIST: 'Пользователь с таким Email уже существует'
}
