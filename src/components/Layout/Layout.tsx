import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Content from '../UI/Content/Content'

const Layout = () => {
  return (
    <>
      <Header isLoggin={false} />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  )
}

export default Layout
