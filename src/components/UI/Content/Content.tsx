import React, { type PropsWithChildren } from 'react'
import './Content.css'

function Content({ children }: PropsWithChildren): JSX.Element {
  return (
    <main className='content'>
      {children}
    </main>
  )
}

export default Content
