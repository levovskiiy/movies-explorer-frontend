import { useState, type ChangeEvent, type ChangeEventHandler } from 'react'

type FormFields = Record<string, string>
type FormErrors = Record<string, string>

type ReturnUseForm<T> = {
  values: FormFields
  errors: FormErrors
  isValid: boolean
  setValues: React.Dispatch<React.SetStateAction<FormFields>>
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
  setValid: React.Dispatch<React.SetStateAction<boolean>>
  handleChange: ChangeEventHandler<T>
}

export default function useForm<T extends HTMLInputElement>(): ReturnUseForm<T> {
  const [values, setValues] = useState<FormFields>({})
  const [errors, setErrors] = useState<FormErrors>({})
  const [isValid, setValid] = useState(false)

  function handleChange(e: ChangeEvent<T>): void {
    const input = e.target
    const { name, value } = input

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: input.validationMessage })
    setValid(input.closest('form')?.checkValidity() ?? false)
  }

  return {
    values, setValues, errors, setErrors, isValid, setValid, handleChange
  }
}
