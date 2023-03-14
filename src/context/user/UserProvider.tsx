import React from 'react'
import { type PropsWithChildren, createContext, useReducer } from 'react'
import { type UserState, initialState } from './context'
import userReducer from './reducer'
import { type UserActionsType } from './actions'

export const UserContext = createContext<{
  state: UserState
  dispatch: React.Dispatch<UserActionsType>
}>({
  state: initialState,
  dispatch: () => null
})

export default function UserProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const value = {
    state,
    dispatch
  }

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </ UserContext.Provider >
  )
}
