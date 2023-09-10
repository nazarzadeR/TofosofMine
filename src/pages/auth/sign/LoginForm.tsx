import React from 'react'

import { Login, ResetForm } from './features/main-auth'
import OtherAuthTypes from './features/other-auth-types'
import useSignType, { LoginType } from './store/sign-type'

const components: Record<LoginType, React.FC<any>> = {
    MAIN: Login,
    RESET: ResetForm,
    OTHER: OtherAuthTypes,
}

const LoginForm: React.FC = () => {
    const { loginType } = useSignType()
    const Form = components[loginType]

    return <Form />
}

export default LoginForm
