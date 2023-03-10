import React, { useEffect } from 'react'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Content from '../UI/Content/Content'
import { Wrapper } from 'components/UI'
import useUser from 'hooks/useUser'
import { UserActions } from 'context/user/actions'
import UserService from 'utils/UserService'

function Layout(): JSX.Element {
  const { state, dispatch } = useUser()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    UserService
      .checkToken()
      .then((user) => {
        dispatch({ type: UserActions.SIGNIN, payload: { ...user, isLoggedIn: true } })
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [location])

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
