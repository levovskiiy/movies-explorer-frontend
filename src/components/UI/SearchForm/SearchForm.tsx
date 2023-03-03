import React from 'react'
import Form from '../Form/Form'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

import './SearchForm.css'

function SearchForm() {
  const { block, element } = classname('search-form')

  return (
    <Form className={block}>
      <div className={element('container')}>
        <Input variant='ghost' className={element('input')} type='text' name='search' placeholder='Фильм' />
        <Button size='xl' rounded variant='primary' className={element('button')}>Поиск</Button>
      </div>
      <FilterCheckbox label='Короткометражки' />
    </Form>
  )
}

export default SearchForm
