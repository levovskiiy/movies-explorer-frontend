import { useState } from 'react'

type UseLocalStorageAction<T> = (value: T) => void

export default function useLocalStorage<T>(key: string, initialValue?: T): [T, UseLocalStorageAction<T>] {
  const [storeValue, setStoreValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error: any) {
      return initialValue
    }
  })

  function setValue<T>(value: T) {
    try {
      const newValue = value instanceof Function ? value(storeValue) : value
      setStoreValue(newValue)

      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  return [storeValue, setValue]
}
