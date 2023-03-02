import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Content from '../UI/Content/Content'
import Wrapper from '../UI/Wrapper/Wrapper'

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header isLoggin={false} />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
