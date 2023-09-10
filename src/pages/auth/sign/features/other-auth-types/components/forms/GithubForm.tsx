import React, { useEffect } from 'react'
import { PageLoader } from '@/components'
import { loginWithGithub } from '../../services/api'

const GithubForm = () => {
    useEffect(() => {
        loginWithGithub()
    }, [])

    return <PageLoader />
}

export default GithubForm
