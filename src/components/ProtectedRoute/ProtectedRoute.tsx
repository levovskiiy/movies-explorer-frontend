import useUser from 'hooks/useUser'
import React, { type PropsWithChildren } from 'react'
import { Navigate, Outlet, Route, Routes, type RouteProps } from 'react-router-dom'

type ProtectedRouteProps = {
  redirect: string
} & RouteProps

function ProtectedRoute({ redirect, element, ...props }: ProtectedRouteProps) {
  const { state } = useUser()

  return <>
    {state.isLoggedIn ? element : <Navigate to={redirect} replace />}
  </>
}

export default ProtectedRoute
