import React, { type PropsWithChildren } from 'react'
import './Wrapper.css'

function Wrapper({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper
