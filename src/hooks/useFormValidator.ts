import { useCallback } from 'react'
import { useState, type ChangeEvent, type ChangeEventHandler } from 'react'

type FormFields<V> = Record<keyof V, string>
type FormErrors<V> = Record<keyof V, string>

type ReturnUseForm<V, T> = {
  values: FormFields<V>
  errors: FormErrors<V>
  isValid: boolean
  setValues: React.Dispatch<React.SetStateAction<V>>
  setErrors: React.Dispatch<React.SetStateAction<V>>
  setValid: React.Dispatch<React.SetStateAction<boolean>>
  handleChange: ChangeEventHandler<T>
  checkValidity: (field: keyof FormErrors<V>) => boolean
}

export default function useForm<V extends Record<string, string>, T extends HTMLInputElement>(initialValue: V): ReturnUseForm<V, T> {
  const [values, setValues] = useState<V>(initialValue)
  const [errors, setErrors] = useState<V>(initialValue)
  const [isValid, setValid] = useState(false)

  const checkValidity = useCallback((field: keyof FormErrors<V>) => {
    if (errors[field] !== undefined) {
      return errors[field] !== ''
    }

    return false
  }, [errors])

  function handleChange(e: ChangeEvent<T>): void {
    const input = e.target
    const { name, value } = input

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: input.validationMessage })
    setValid(input.closest('form')?.checkValidity() ?? false)
  }

  return {
    values, setValues, errors, setErrors, isValid, setValid, handleChange, checkValidity
  }
}
