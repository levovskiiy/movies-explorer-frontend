import React from 'react'
import logo from 'images/logo.svg'
import { classname } from 'utils/utils'
import BaseLink from '../BaseLink/BaseLink'

type LogoProps = {
  className?: string
}

function Logo({ className }: LogoProps) {
  const { block } = classname('logo', {}, [className])

  return (
    <BaseLink to='/' isRoute>
      <img src={logo} alt="Логотип" className={block} />
    </BaseLink>
  )
}

export default Logo
