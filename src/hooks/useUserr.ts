import UserService from 'utils/UserService'
import { useLocation, useNavigate } from 'react-router-dom'
import { type UserState } from 'context/user/context'
import { useState, useEffect } from 'react'
import { type User } from 'types/types'

export type OnAuthorizeFunc = () => void

export type Callbacks = {
  onAuthorize?: OnAuthorizeFunc
}

export function useUser(callbacks?: Callbacks) {
  const [currentUser, setCurrentUser] = useState<UserState>({
    name: '',
    email: '',
    isLoggedIn: true
  })

  const navigate = useNavigate()
  const location = useLocation()

  console.log(currentUser)

  /* ----------------------------- State changers ----------------------------- */
  function authorizeUser({ name, email }: Pick<User, 'name' | 'email'>) {
    setCurrentUser((user) => ({
      ...user,
      email,
      name,
      isLoggedIn: true
    }))
  }

  function updateUser({ email, name }: Pick<User, 'name' | 'email'>) {
    setCurrentUser({ ...currentUser, name, email })
  }

  function setUnAuthorizedUser() {
    setCurrentUser((user) => ({ ...user, isLoggedIn: false }))
  }

  function setLoadingEnd() {
    setCurrentUser((user) => ({
      ...user
    }))
  }

  /* -------------------------------- Handlers -------------------------------- */

  function handleSuccessAuthorizing(
    user: Pick<User, 'name' | 'email'>
  ): Pick<User, 'name' | 'email'> {
    callbacks?.onAuthorize?.()
    authorizeUser(user)
    navigate('/movies')
    return user
  }

  async function handleFailureAuthorizing(err: Error) {
    setUnAuthorizedUser()
    return await Promise.reject(err)
  }

  function handleSuccessLogout() {
    setUnAuthorizedUser()
    navigate('/')
  }

  function handleSuccessProfileUpdate(data: Pick<User, 'name' | 'email'>) {
    updateUser(data)
    return data
  }

  /* -------------------------------- Internal -------------------------------- */
  function checkToken() {
    UserService
      .checkToken()
      .then(authorizeUser)
      .catch(setUnAuthorizedUser)
      .finally(setLoadingEnd)
  }

  /* ---------------------------- Export functions ---------------------------- */

  async function login(data: Pick<User, 'password' | 'email'>) {
    return await UserService
      .login(data)
      .then(handleSuccessAuthorizing)
      .catch(handleFailureAuthorizing)
      .finally(setLoadingEnd)
  }

  async function register(data: Pick<User, 'name' | 'password' | 'email'>) {
    return await UserService
      .register(data)
      .then(async () => await login(data))
      .catch(handleFailureAuthorizing)
  }

  async function updateUserInfo(data: Pick<User, 'name' | 'email'>): Promise<Pick<User, 'name' | 'email'>> {
    return await UserService.updateUser(data).then(handleSuccessProfileUpdate)
  }

  async function logout() {
    await UserService.logout().then(handleSuccessLogout)
  }

  /* --------------------------------- Effects -------------------------------- */

  /** Проверка токена при монтировании */
  useEffect(() => {
    checkToken()
    navigate('/movies')
  }, [])

  /** Проверка токена при изменении страницы */
  useEffect(() => {
    checkToken()
  }, [location])

  return {
    user: currentUser,
    login,
    register,
    updateUserInfo,
    logout
  }
}

export default useUser
