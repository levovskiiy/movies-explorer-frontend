import React, { type ButtonHTMLAttributes } from 'react'
import { classname } from '../../../utils/utils'
import Button from '../Button/Button'

import './SaveButton.css'

type SaveButtonProps = {
  saveHandler: (...args: any) => any
  className?: string
  saved: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const SaveButton = React.forwardRef<HTMLButtonElement, SaveButtonProps>(
  function SaveButton({ saveHandler, saved, className }: SaveButtonProps, ref): JSX.Element {
    const { block } = classname('save-button', { saved }, [className])

    function onClickHandler(): void {
      saveHandler()
    }

    return (
      <Button
        ref={ref}
        onClick={onClickHandler}
        type='button'
        variant='tertiary'
        className={block}
      >
        {
          !saved && 'Сохранить'
        }
      </Button>
    )
  }
)

export default SaveButton
