import React from 'react'

import useSignType from './store/sign-type'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

const Sign = () => {
    const { type } = useSignType()
    return (
        <div className=' wrapper flex items-center justify-center'>
            {type ? <RegisterForm /> : <LoginForm />}
        </div>
    )
}

export default Sign
