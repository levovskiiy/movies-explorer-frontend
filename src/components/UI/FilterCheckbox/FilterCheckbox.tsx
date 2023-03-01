import React from 'react'

const FilterCheckbox = () => {
  return (
    <label htmlFor='switcher' className='filter-checkbox'>
      <input type="checkbox" role='switch' id='switcher' checked />
    </label>
  )
}

export default FilterCheckbox
