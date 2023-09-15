import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { SuspenseLoader } from '@modules/common'
import { Roles, Auth } from '@modules/authentication'

const App = lazy(() => import('@/pages/app'))
const Home = lazy(() => import('@/pages/home'))
const Sign = lazy(() => import('@/pages/auth/sign'))
const ResetPass = lazy(() => import('@/pages/auth/reset-pass'))
const NotFound = lazy(() => import('@/pages/services/not-found'))
const Unauthorized = lazy(() => import('@/pages/services/unauthorized'))
const UnderConstruction = lazy(
    () => import('@/pages/services/under-construction')
)

const AppRoutes = () => {
    const { ADMIN, USER, SUPER_USER } = Roles

    return (
        <Routes>
            <Route path='auth'>
                <Route index element={<SuspenseLoader comp={<Sign />} />} />
                <Route
                    path='reset/:resetKey'
                    element={<SuspenseLoader comp={<ResetPass />} />}
                />
            </Route>
            <Route path='/'>
                <Route index element={<Navigate to='app' />} />
                <Route
                    path='home'
                    element={<SuspenseLoader comp={<UnderConstruction />} />}
                />
            </Route>

            <Route path='app' element={<Auth everyone />}>
                <Route
                    index
                    element={<SuspenseLoader comp={<UnderConstruction />} />}
                />
            </Route>

            <Route
                path='unauthorized'
                element={<SuspenseLoader comp={<Unauthorized />} />}
            />
            <Route path='*' element={<SuspenseLoader comp={<NotFound />} />} />
        </Routes>
    )
}

export default AppRoutes
