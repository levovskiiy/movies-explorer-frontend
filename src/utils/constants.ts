const { NODE_ENV, REACT_APP_DOMAIN } = process.env

export const PROTOCOL = NODE_ENV === 'development' ? 'http' : 'https'
export const API_HOST = NODE_ENV === 'development' ? 'localhost' : REACT_APP_DOMAIN ?? 'localhost'
export const API_PORT = NODE_ENV === 'development' ? 5000 : null
export const BEATFILM_MOVIE_API_URL = 'https://api.nomoreparties.co'
export const API_URL = `${PROTOCOL}://${API_HOST}${API_PORT ? ':' + API_PORT : ''}`
