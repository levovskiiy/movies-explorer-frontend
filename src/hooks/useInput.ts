import { type ChangeEventHandler, useState, type ChangeEvent } from 'react'

export default function useInput(initialValue: string | number): { value: string | number, onChange: ChangeEventHandler<HTMLInputElement> } {
  const [value, setValue] = useState<string | number>(initialValue)

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value)
  }

  return {
    value, onChange
  }
}
