import React, { type ChangeEvent, useState } from 'react'
import { classname } from '../../../utils/utils'
import './FilterCheckbox.css'

type FilterCheckboxProps = {
  label: string
}

function FilterCheckbox({ label }: FilterCheckboxProps): JSX.Element {
  const { block, element } = classname('filter-checkbox')
  const [checked, setChecked] = useState(false)

  function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked)
  }

  return (
    <div className={block}>
      <input
        type="checkbox"
        role='switch'
        name='short-film'
        checked={checked}
        onChange={handleCheckbox}
        className={element('checkbox')}
      />
      <label className={element('label')}>{label}</label>
    </div>
  )
}

export default FilterCheckbox
