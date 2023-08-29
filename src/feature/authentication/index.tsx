import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

import useAuth from '@/store/auth'
import { Roles } from '@/data/constants'
import PersistLoader from './PersistLoader'
import { checkPermissionHas } from './helpers'

type Props = TComponent<{
    only?: Roles[]
    except?: Roles[]
    everyone?: boolean
}>

const Auth: React.FC<Props> = (props) => {
    const location = useLocation()
    const { only, except, everyone = false, children } = props
    const {
        hasMeta,
        isRequirePersist,
        user: { role },
    } = useAuth()

    if (isRequirePersist()) {
        return <PersistLoader />
    }

    const allowed =
        everyone ||
        (only && checkPermissionHas(role, only)) ||
        (except && !checkPermissionHas(role, except)) ||
        false

    return allowed && hasMeta() ? (
        children ? (
            children
        ) : (
            <Outlet />
        )
    ) : hasMeta('id') ? (
        <Navigate to='/unauthorized' />
    ) : (
        <Navigate to='/auth' state={{ location }} />
    )
}

export default Auth
