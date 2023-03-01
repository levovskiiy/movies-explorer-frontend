import React, { type HTMLAttributes, type FC } from 'react'
import './Divider.css'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Divider: FC<DividerProps> = ({ className = '' }) => {
  const classnames = 'divider' + ' ' + className
  return (
    <div className={classnames}></div>
  )
}

export default Divider
