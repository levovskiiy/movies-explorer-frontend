import React, { useEffect, useState, type FC } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { type Theme } from '../../types/types'
import { bem } from '../../utils/utils'
import NavTab from '../Main/NavTab/NavTab'
import Container from '../UI/Container/Container'
import './Header.css'

interface HeaderProps {
  isLoggin: boolean
}

const Header: FC<HeaderProps> = ({ isLoggin }) => {
  const [theme, setTheme] = useState<Theme>('landing')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setTheme('landing')
    } else {
      setTheme('app')
    }
  }, [location])

  const [block] = bem({
    block: 'header',
    modifiers: { theme }
  })

  return (
    <header className={block}>
      <Container>
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="Логотип" className="header__logo-image" />
          </div>
          <div className="header__navigation">
            <NavTab />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
