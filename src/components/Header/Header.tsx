import Logo from 'components/UI/Logo/Logo'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { type Theme } from '../../types/types'
import { classname } from '../../utils/utils'
import LendingNav from '../Main/LendingNav/LendingNav'
import Navigation from '../Navigation/Navigation'
import Container from '../UI/Container/Container'
import './Header.css'
import UserContext from 'context/user.context'

type HeaderProps = {
  isLoggin?: boolean
}

function Header({ isLoggin }: HeaderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('landing')
  const location = useLocation()
  const { state } = useContext(UserContext)

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
            <Logo className={styles.logoImage} />
          </div>
          {
            state?.isAunthorized ? <Navigation /> : <LendingNav />
          }
        </div>
      </Container>
    </header>
  )
}

export default Header
