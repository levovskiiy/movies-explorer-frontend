import React, { useMemo, type FC, type HTMLAttributes } from 'react'
import { classess } from '../../../utils/utils'

import './BaseLink.css'

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
}

const BaseLink: FC<LinkProps> = ({ children, href, className, ...props }) => {
  const styles = ['base-link', className]

  const cls = useMemo(() => classess(...styles), [styles])

  return (
    <a href={href} className={cls} {...props}>
      {children}
    </a>
  )
}

export default BaseLink
