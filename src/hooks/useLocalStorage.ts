import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue?: T): [T, Dispatch<SetStateAction<T>>] {
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

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storeValue))
  }, [storeValue])

  return [storeValue, setStoreValue]
}
