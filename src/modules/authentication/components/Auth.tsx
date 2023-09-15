import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

import { Roles } from '../core/constants'
import { useAuthStore } from '../store'
import { checkPermissionHas } from '../util'
import PersistLoader from './PersistLoader'

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
    } = useAuthStore()

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
