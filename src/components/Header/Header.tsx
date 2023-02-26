import React, { type FC } from 'react'
import logo from '../../images/logo.svg'
import { blockModificators } from '../../utils/utils'
import NavTab from '../Main/NavTab/NavTab'
import Container from '../UI/Container/Container'
import './Header.css'

interface HeaderProps {
  isLoggin: boolean
}

const Header: FC<HeaderProps> = ({ isLoggin }) => {
  const theme = isLoggin ? '' : blockModificators('header', 'theme', 'landing')

  return (
    <header className={['header', theme].join(' ')}>
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
