import React, { type HTMLAttributes, type ReactNode } from 'react'
import { classname } from '../../../utils/utils'

import './List.css'

interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items?: T[]
  renderItem?: (item: T, index: number) => ReactNode
}

export default function List<T>({ items, renderItem, children, className, ...props }: ListProps<T>) {
  const { block } = classname('list', {}, [className])

  if (items !== undefined && renderItem !== undefined) {
    return (
      <ul {...props} className={block}>
        {items.map(renderItem)}
      </ul>
    )
  }

  return (
    <ul {...props} className={block}>
      {children}
    </ul>
  )
}
