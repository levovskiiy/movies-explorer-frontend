import React, { type ChangeEvent, type ChangeEventHandler, useContext } from 'react'
import { classname } from '../../../utils/utils'
import { MoviesContext } from 'context/movies/context'
import './FilterCheckbox.css'

type FilterCheckboxProps = {
  label: string
}

function FilterCheckbox({ label }: FilterCheckboxProps): JSX.Element {
  const { block, element } = classname('filter-checkbox')
  const { state, actions } = useContext(MoviesContext)

  function onChange() {
    actions?.setShort(!state.isShort)
  }

  return (
    <div className={block}>
      <input
        type="checkbox"
        role='switch'
        name='short'
        value='short'
        checked={state.isShort}
        onChange={onChange}
        className={element('checkbox')}
      />
      <label className={element('label')}>{label}</label>
    </div>
  )
}

export default FilterCheckbox
