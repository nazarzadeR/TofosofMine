import React, { useEffect } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'

import AllAuthCard from './components/AllAuthCard'
import { MagicForm, GithubForm, GoogleForm } from './components/forms'
import useOtherAuthType, { TOtherAuth } from './store/other-auth-types'

const components: Record<Exclude<TOtherAuth, 'ALL'>, React.FC<any>> = {
    MAGIC: MagicForm,
    GOOGLE: GoogleForm,
    GITHUB: GithubForm,
}

const OtherAuthTypes = () => {
    const { type, setType } = useOtherAuthType()
    const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID

    useEffect(() => () => setType('ALL'), [])

    if (type === 'ALL') {
        return <AllAuthCard />
    }

    const Form = components[type]
    return (
        <GoogleOAuthProvider clientId={clientID}>
            <Form />
        </GoogleOAuthProvider>
    )
}

export default OtherAuthTypes
