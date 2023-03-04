import React, { type ChangeEvent } from 'react'
import Form from '../Form/Form'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

import './SearchForm.css'

type SearchFormProps = {
  searchQuery: string
  searchQueryHandler: (query: string) => void
}

function SearchForm({ searchQuery, searchQueryHandler }: SearchFormProps): JSX.Element {
  const { block, element } = classname('search-form')

  function onSearch(e: ChangeEvent<HTMLInputElement>): void {
    searchQueryHandler(e.target.value)
  }

  return (
    <Form className={block}>
      <div className={element('container')}>
        <Input
          value={searchQuery}
          onChange={onSearch}
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
  )
}

export default SearchForm
