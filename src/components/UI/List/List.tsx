import React, { useMemo, type HTMLAttributes, type ReactNode } from 'react'
import { classess } from '../../../utils/utils'

import './List.css'

interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
}

export default function List<T>({ items, renderItem, className, ...props }: ListProps<T>) {
  const styles = ['list', className]

  const cls = useMemo(() => classess(...styles), [className, styles])

  return (
    <ul {...props} className={cls}>
      {items.map(renderItem)}
    </ul>
  )
}
