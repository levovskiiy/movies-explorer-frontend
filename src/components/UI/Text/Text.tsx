import React, { type HTMLAttributes, type PropsWithChildren } from 'react'
import { classname } from 'utils/utils'
import './Text.css'

type TextProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

function Text({ children, className, ...props }: TextProps): JSX.Element {
  const { block } = classname('text', {}, [className])
  return (
    <p {...props} className={block}>{children}</p>
  )
}

export default Text
