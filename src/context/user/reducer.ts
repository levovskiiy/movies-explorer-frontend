import { type UserActionsType, UserActions } from './actions'
import { type UserState, initialState } from './context'

export default function userReducer(state: UserState = initialState, action: UserActionsType): UserState {
  const { type, payload } = action
  switch (type) {
    case UserActions.SIGNIN:
      return {
        ...state,
        _id: payload._id,
        name: payload.name,
        email: payload.email,
        isLoggedIn: payload.isLoggedIn
      }
    case UserActions.SIGNUP:
      return {
        ...state,
        _id: payload._id,
        name: payload.name,
        email: payload.email,
        isLoggedIn: payload.isLoggedIn
      }
    case UserActions.UPDATE:
      return {
        ...state,
        name: payload.name,
        email: payload.email
      }

    case UserActions.SIGNOUT:
      return initialState

    default:
      return state
  }
}
