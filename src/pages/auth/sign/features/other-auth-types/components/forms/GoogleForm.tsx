import React from 'react'

import { PageLoader } from '@/components'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import useOtherAuthType from '../../store/other-auth-types'

const GoogleForm = () => {
    const { setType } = useOtherAuthType()

    useGoogleOneTapLogin({
        onError() {
            setType('ALL')
        },
        onSuccess(credentialResponse) {
            console.log(credentialResponse)
        },
    })

    return <PageLoader />
}

export default GoogleForm
