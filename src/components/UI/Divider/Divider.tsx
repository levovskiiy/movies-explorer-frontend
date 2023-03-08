import React from 'react'
import { classname } from 'utils/utils'
import './Divider.css'

type DividerProps = {
  className?: string
}

function Divider({ className }: DividerProps): JSX.Element {
  const { block } = classname('divider', {}, [className])

  return (
    <div className={block}></div>
  )
}

export default Divider
