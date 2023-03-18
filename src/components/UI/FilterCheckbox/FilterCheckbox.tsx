import React, { useState, type ChangeEvent, type ChangeEventHandler } from 'react'
import { classname } from '../../../utils/utils'
import './FilterCheckbox.css'

type FilterCheckboxProps = {
  label: string
  isShort: boolean
  onChange: ChangeEventHandler
}

function FilterCheckbox({ label, isShort, onChange }: FilterCheckboxProps): JSX.Element {
  const { block, element } = classname('filter-checkbox')
  const [checked, setChecked] = useState(isShort)

  function change(evt: ChangeEvent<HTMLInputElement>) {
    onChange(evt)
    setChecked(!checked)
  }

  return (
    <div className={block}>
      <input
        type="checkbox"
        role='switch'
        name='short'
        value='short'
        checked={checked}
        onChange={change}
        className={element('checkbox')}
      />
      <label className={element('label')}>{label}</label>
    </div>
  )
}

export default FilterCheckbox
