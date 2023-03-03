import React from 'react'
import './Divider.css'

type DividerProps = {
  className?: string
}

function Divider({ className }: DividerProps): JSX.Element {
  const classnames = 'divider' + ' ' + className

  return (
    <div className={classnames}></div>
  )
}

export default Divider
