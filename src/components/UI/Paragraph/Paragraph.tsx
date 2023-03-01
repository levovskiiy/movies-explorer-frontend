import React, { type FC, type HTMLAttributes } from 'react'
import { type Size } from '../../../types/types'
import { classname } from '../../../utils/utils'
import './Paragraph.css'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: Size
}

const Paragraph: FC<ParagraphProps> = ({ children, className, size = 'mb', ...props }) => {
  const { block } = classname('paragraph', { size }, [className])

  return (
    <p {...props} className={block}>{children}</p>
  )
}

export default Paragraph
