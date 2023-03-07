import React from 'react'
import { classname } from '../../../utils/utils'
import { Button } from '..'

import './DeleteButton.css'

type DeleteButtonProps = {
  deleteHandler: (...args: any) => any
  className?: string
}

function DeleteButton({ deleteHandler, className }: DeleteButtonProps): JSX.Element {
  const { block } = classname('delete-button', {}, [className])

  return (
    <Button
      onClick={deleteHandler}
      type='button'
      variant='tertiary'
      className={block}>
    </Button>
  )
}

export default DeleteButton
