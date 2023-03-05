import React, { useState, type ChangeEvent } from 'react'
import Form from '../Form/Form'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

import './SearchForm.css'
import Divider from '../Divider/Divider'

function SearchForm(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')
  const { block, element } = classname('search-form')

  function handleSearchQuery(e: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value)
  }

  return (
    <>
      <Form className={block} onSubmit={(e) => { e.preventDefault() }}>
        <div className={element('container')}>
          <Input
            value={searchQuery}
            onChange={handleSearchQuery}
            variant='ghost'
            className={element('input')}
            type='text'
            name='search'
            placeholder='Фильм'
            maxLength={30}
          />
          <Button size='xl' rounded variant='primary' className={element('button')}>Поиск</Button>
        </div>
        <FilterCheckbox label='Короткометражки' />
      </Form>
      <Divider className={element('divider')} />
    </>

  )
}

export default SearchForm
