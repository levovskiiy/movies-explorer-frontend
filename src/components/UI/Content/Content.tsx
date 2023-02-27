import React, { type ReactNode, type FC } from 'react'
import './Content.css'

interface ContentProps {
  children: ReactNode
}

const Content: FC<ContentProps> = ({ children }) => {
  return (
    <main className='content'>
      {children}
    </main>
  )
}

export default Content
