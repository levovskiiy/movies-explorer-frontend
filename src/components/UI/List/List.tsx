import React, { type PropsWithChildren, type HTMLAttributes, type ReactNode } from 'react'
import { classname } from '../../../utils/utils'

import './List.css'

type ListProps<T> = {
  items?: T[]
  renderItem?: (item: T, index: number) => ReactNode
} & HTMLAttributes<HTMLUListElement>

function List<T>(props: PropsWithChildren<ListProps<T>>): JSX.Element {
  const { items, renderItem, children, className, ...attrs } = props
  const { block } = classname('list', {}, [className])

  if (items !== undefined && renderItem !== undefined) {
    return (
      <ul {...attrs} className={block}>
        {items.map(renderItem)}
      </ul>
    )
  }

  return (
    <ul {...attrs} className={block}>
      {children}
    </ul>
  )
}

export default List
