import React, { type FC, type HTMLAttributes } from 'react'
import { classname } from '../../../../utils/utils'
import './ListItem.css'
interface ListItemProps extends HTMLAttributes<HTMLLIElement> {

}

const Item: FC<ListItemProps> = ({ children, className = '' }) => {
  const { block } = classname('list__item', {}, [className])

  return (
    <li className={block}>{children}</li>
  )
}

export default Item
