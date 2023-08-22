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

const RoutesManager = () => {
    const { ADMIN, USER, SUPER_USER } = Roles

    return (
        <Routes>
            <Route path='login' element={<SuspenseLoader comp={<Sign />} />} />
            {/* <Route
                path='register'
                element={<SuspenseLoader comp={<Sign register />} />}
            /> */}
            <Route path='/'>
                <Route index element={<Navigate to='app' />} />
                <Route
                    path='home'
                    element={<SuspenseLoader comp={<Home />} />}
                />
            </Route>

            <Route path='app' element={<Auth everyone />}>
                <Route index element={<SuspenseLoader comp={<App />} />} />
            </Route>

            <Route
                path='unauthorized'
                element={<SuspenseLoader comp={<Unauthorized />} />}
            />
            <Route path='*' element={<SuspenseLoader comp={<NotFound />} />} />
        </Routes>
    )
}

export default RoutesManager
