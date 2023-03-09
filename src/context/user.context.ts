import { type ActionTypes } from 'components/reducers/user/user.reducer'
import { type User } from './../types/types'
import { createContext } from 'react'

const UserContext = createContext<{
  state: Partial<User> | null
  dispatch: React.Dispatch<ActionTypes>
}>({ state: null, dispatch: () => null })

export default UserContext
