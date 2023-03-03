import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { type Theme } from '../../types/types'
import { classname } from '../../utils/utils'
import LendingNav from '../Main/LendingNav/LendingNav'
import Navigation from '../Navigation/Navigation'
import Container from '../UI/Container/Container'
import './Header.css'

type HeaderProps = {
  isLoggin: boolean
}

function Header({ isLoggin }: HeaderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('landing')
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setTheme('landing')
    } else {
      setTheme('app')
    }
  }, [location])

  const { block, element } = classname('header', { theme })

  const styles = {
    container: element('container'),
    logo: element('logo'),
    logoImage: element('logo-image')
  }

  return (
    <header className={block}>
      <Container>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" className={styles.logoImage} />
          </div>
          {
            isLoggin ? <Navigation /> : <LendingNav />
          }
        </div>
      </Container>
    </header>
  )
}

export default Header
