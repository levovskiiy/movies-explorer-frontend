import React, { type PropsWithChildren, type HTMLAttributes } from 'react'
import { classname } from '../../../../utils/utils'
import './ListItem.css'

type ItemProps = PropsWithChildren<HTMLAttributes<HTMLLIElement>>

function Item({ children, className }: ItemProps): JSX.Element {
  const { block } = classname('list__item', {}, [className])

  return (
    <li className={block}>{children}</li>
  )
}

export default Item
