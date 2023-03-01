import React from 'react'
import Form from '../Form/Form'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'

import './SearchForm.css'
import Button from '../Button/Button'

const SearchForm = () => {
  const { block, element } = classname('search-form')

  return (
    <Form className={block}>
      <Input variant='ghost' className={element('input')} type='text' name='search' placeholder='Фильм' />
      <Button size='xl' rounded variant='primary' className={element('button')}>Поиск</Button>
    </Form>
  )
}

export default SearchForm
