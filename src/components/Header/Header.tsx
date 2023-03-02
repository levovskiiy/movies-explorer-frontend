import React, { useEffect, useState, type FC } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { type Theme } from '../../types/types'
import { classname } from '../../utils/utils'
import NavTab from '../Main/NavTab/NavTab'
import Navigation from '../Navigation/Navigation'
import Container from '../UI/Container/Container'
import './Header.css'

interface HeaderProps {
  isLoggin: boolean
}

const Header: FC<HeaderProps> = ({ isLoggin }) => {
  const [theme, setTheme] = useState<Theme>('landing')
  const location = useLocation()
  const [logged] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setTheme('landing')
    } else if (location.pathname === '/login' || location.pathname === '/register') {
      setTheme('auth')
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
            logged ? <Navigation isLoggin={logged} /> : <NavTab />
          }
        </div>
      </Container>
    </header>
  )
}

export default Header
