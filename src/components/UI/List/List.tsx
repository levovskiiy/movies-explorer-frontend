import React, { useMemo, type HTMLAttributes, type ReactNode } from 'react'
import { classess } from '../../../utils/utils'

import './List.css'

interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[]
  direction?: 'row' | 'col'
  renderItem: (item: T) => ReactNode
}

export default function List<T>({ items, renderItem, className = '', direction = 'row', ...props }: ListProps<T>) {
  const styles = ['list', `list_dir_${direction}`, className]

  const cls = useMemo(() => classess(...styles), [className, direction])

  return (
    <ul {...props} className={cls}>
      {items.map(renderItem)}
    </ul>
  )
}
