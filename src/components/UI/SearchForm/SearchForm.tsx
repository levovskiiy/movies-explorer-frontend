import React from 'react'
import Form from '../Form/Form'
import { classname } from '../../../utils/utils'
import Input from '../Input/Input'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Button from '../Button/Button'

import './SearchForm.css'
import Divider from '../Divider/Divider'
import useForm from 'hooks/useFormValidator'

function SearchForm(): JSX.Element {
  const { values, handleChange, isValid } = useForm({ search: '' })
  const { block, element } = classname('search-form')

  return (
    <>
      <Form className={block} onSubmit={(e) => { e.preventDefault() }}>
        <div className={element('container')}>
          <Input
            value={values.search}
            onChange={handleChange}
            variant='ghost'
            className={element('input')}
            type='text'
            name='search'
            placeholder='Фильм'
            required
          />
          <Button disabled={!isValid} size='xl' rounded variant='primary' className={element('button')}>Поиск</Button>
        </div>
        <FilterCheckbox label='Короткометражки' />
        <Divider className={element('divider')} />
      </Form>
    </>

  )
}

export default SearchForm
