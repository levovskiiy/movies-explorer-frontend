import { type User } from 'types/types'

export const enum UserActions {
  AUTHORIZE = 'AUTHORIZE',
  UPDATE = 'UPDATE',
}

export type ActionTypes = {
  type: UserActions
  payload: Partial<User>
}

export default function (state: Partial<User>, action: ActionTypes): Partial<User> {
  switch (action.type) {
    case UserActions.AUTHORIZE:
      return { ...state, ...action.payload }
    case UserActions.UPDATE:
      return { ...state, name: action.payload.name, email: action.payload.email }
    default:
      return state
  }
}
