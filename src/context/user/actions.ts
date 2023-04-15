import { type UserState } from './context'

export enum UserActions {
  SIGNIN = 'SIGNIN',
  SIGNOUT = 'SIGNOUT',
  SIGNUP = 'SIGNUP',
  UPDATE = 'UPDATE',
}

export type UserActionsType = {
  type: UserActions
  payload: UserState
} | { type: UserActions.SIGNOUT, payload: null }
