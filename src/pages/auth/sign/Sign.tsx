import React from 'react'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import useSignType from './store/sign-type'

const Sign = () => {
    const { type } = useSignType()
    return (
        <div className='wrapper flex items-center justify-center'>
            {type ? <RegisterForm /> : <LoginForm />}
        </div>
    )
}

export default Sign
