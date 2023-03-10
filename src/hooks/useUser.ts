import { UserContext } from 'context/user/UserProvider'
import { useContext } from 'react'

export default function useUser() {
  const context = useContext(UserContext)

  if (context) {
    return context
  }

  throw new Error('useUser must be used within a UserProvider')
}
