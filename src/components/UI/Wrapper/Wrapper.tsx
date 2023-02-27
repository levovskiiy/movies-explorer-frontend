import React, { type ReactNode, type FC } from 'react'
import './Wrapper.css'

interface WrapperProps {
  children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper
