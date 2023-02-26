import React, { useMemo, type FC, type HTMLAttributes } from 'react'
import { type Size } from '../../../types/types'
import { classess } from '../../../utils/utils'
import './Paragraph.css'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Size
}

const Paragraph: FC<ParagraphProps> = ({ children, size = 'mb', className = '', ...props }) => {
  const styles = ['paragraph', `paragraph_size_${size}`, className]

  const cls = useMemo(() => classess(...styles), [size])

  return (
    <p {...props} className={cls}>{children}</p>
  )
}

export default Paragraph
