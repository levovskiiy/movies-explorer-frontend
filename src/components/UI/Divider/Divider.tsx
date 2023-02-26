import React, { type HTMLAttributes, useMemo, type FC } from 'react'
import { classess } from '../../../utils/utils'
import './Divider.css'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Divider: FC<DividerProps> = ({ className = '' }) => {
  const styles = useMemo(() => classess('divider', className), [className])
  return (
    <div className={styles}></div>
  )
}

export default Divider
