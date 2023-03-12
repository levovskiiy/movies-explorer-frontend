import { useCallback } from 'react'
import { useState, type ChangeEvent, type ChangeEventHandler } from 'react'

type ReturnUseForm<V, T> = {
  values: V
  errors: V
  isValid: boolean
  setValues: React.Dispatch<React.SetStateAction<V>>
  setErrors: React.Dispatch<React.SetStateAction<V>>
  setValid: React.Dispatch<React.SetStateAction<boolean>>
  handleChange: ChangeEventHandler<T>
  checkValidity: (field: keyof V) => boolean
  resetForm: (newValues: V, newErrors: V, newIsValid: boolean) => void
}

export default function useForm<V, T extends HTMLInputElement>(initialValue: V): ReturnUseForm<V, T> {
  const [values, setValues] = useState<V>(initialValue)
  const [errors, setErrors] = useState<V>(initialValue)
  const [isValid, setValid] = useState(false)

  const checkValidity = useCallback((field: keyof V) => {
    if (errors[field] !== undefined) {
      return errors[field] !== ''
    }

    return false
  }, [errors])

  const resetForm = useCallback(
    (newValues: V, newErrors: V, newIsValid: boolean = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setValid(newIsValid)
    },
    [setValues, setErrors, setValid]
  )

  function handleChange(e: ChangeEvent<T>): void {
    const input = e.target
    const { name, value } = input

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: input.validationMessage })
    setValid(input.closest('form')?.checkValidity() ?? false)
  }

  return {
    values, setValues, errors, setErrors, isValid, setValid, handleChange, checkValidity, resetForm
  }
}
