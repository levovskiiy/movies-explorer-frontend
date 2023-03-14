import { type UserState } from 'context/user/context'
import { ProfileActions } from './actions'

type State = {
  values: UserState
  nameVisible: boolean
  emailVisible: boolean
  formValid: boolean
  error: { status: 'SUCCESS' | 'FAIL', message: string }
}

type Action =
  | { type: ProfileActions.SET_VALUES, payload: UserState }
  | { type: ProfileActions.SET_FORM_VALID, payload: boolean }
  | { type: ProfileActions.SET_NAME_VISIBLE, payload: boolean }
  | { type: ProfileActions.SET_EMAIL_VISIBLE, payload: boolean }
  | { type: ProfileActions.SET_ERROR, payload: { status: 'SUCCESS' | 'FAIL', message: string } }
  | { type: ProfileActions.RESET }

export const initialState: State = {
  values: { name: '', email: '' },
  nameVisible: true,
  emailVisible: true,
  formValid: false,
  error: { status: 'FAIL', message: '' }
}
export default function profileReducer(state: State, action: Action): State {
  switch (action.type) {
    case ProfileActions.SET_VALUES:
      return {
        ...state,
        values: { ...state.values, ...action.payload }
      }
    case ProfileActions.SET_FORM_VALID:
      return {
        ...state,
        formValid: action.payload
      }
    case ProfileActions.SET_NAME_VISIBLE:
      console.log(action.payload)
      return {
        ...state,
        nameVisible: action.payload
      }
    case ProfileActions.SET_EMAIL_VISIBLE:
      return {
        ...state,
        emailVisible: action.payload
      }
    case ProfileActions.SET_ERROR:
      return {
        ...state,
        error: { ...state.error, ...action.payload }
      }
    case ProfileActions.RESET:
      return initialState
    default:
      return state
  }
}
