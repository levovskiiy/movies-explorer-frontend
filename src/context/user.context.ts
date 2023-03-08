import { type IUser } from './../types/types'
import { createContext } from 'react'

const UserContext = createContext<IUser | null>(null)

export default UserContext
