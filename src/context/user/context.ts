import { type User } from '../../types/types'

export type UserState = Omit<User, 'password'>

export const initialState: UserState = {
  _id: '',
  name: '',
  email: '',
  isLoggedIn: false
}
