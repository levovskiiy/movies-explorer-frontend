import React, { useMemo, type FC, type HTMLAttributes } from 'react'
import { type Size } from '../../../types/types'
import { bem, classess } from '../../../utils/utils'
import './Paragraph.css'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Size
}

const Paragraph: FC<ParagraphProps> = ({ children, className, size = 'mb', ...props }) => {
  const cls = useMemo(() => {
    const [paragraph] = bem({
      block: 'paragraph',
      modifiers: { size }
    })

    return classess(paragraph, className)
  }, [className, size])

  return (
    <p {...props} className={cls}>{children}</p>
  )
}

export default Paragraph
