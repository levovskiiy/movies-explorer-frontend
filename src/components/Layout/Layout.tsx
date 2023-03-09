import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Content from '../UI/Content/Content'
import { Wrapper } from 'components/UI'

function Layout(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Routes>
          {['/', 'movies', 'saved-movies', 'profile'].map(path => (
            <Route key={path} path={path} element={<Header />} />
          ))}
        </Routes>
        <Content>
          <Outlet />
        </Content>
        <Routes>
          {['/', 'movies', 'saved-movies'].map(path => (
            <Route key={path} path={path} element={<Footer />} />
          ))}
        </Routes>
      </Wrapper>
    </>
  )
}

export default Layout
