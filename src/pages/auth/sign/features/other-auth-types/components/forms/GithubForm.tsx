import React, { useEffect } from 'react'
import { PageLoader } from '@modules/common'
import { loginWithGithub } from '../../services/api'

const GithubForm = () => {
    useEffect(() => {
        loginWithGithub()
    }, [])

    return <PageLoader />
}

export default GithubForm
