import React, { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Auth } from '@/feature'
import { Roles } from '@/data/constants'
import { SuspenseLoader } from '@/components'

const App = lazy(() => import('@/pages/app'))
const Sign = lazy(() => import('@/pages/sign'))
const Home = lazy(() => import('@/pages/home'))
const NotFound = lazy(() => import('@/pages/not-found'))
const Unauthorized = lazy(() => import('@/pages/unauthorized'))
const UnderConstruction = lazy(() => import('@/pages/under-construction'))

const AppRoutes = () => {
    const { ADMIN, USER, SUPER_USER } = Roles

    return (
        <Routes>
            <Route path='auth' element={<SuspenseLoader comp={<Sign />} />} />
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
