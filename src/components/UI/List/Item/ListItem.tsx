import React, { useMemo, type FC, type HTMLAttributes } from 'react'
import { classess } from '../../../../utils/utils'
import './ListItem.css'
interface ListItemProps extends HTMLAttributes<HTMLLIElement> {

}

const Item: FC<ListItemProps> = ({ children, className = '' }) => {
  const styles = ['list__item', className]

  const cls = useMemo(() => classess(...styles), [className])

  return (
    <li className={cls}>{children}</li>
  )
}

export default Item
