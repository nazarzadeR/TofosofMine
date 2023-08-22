import React, { useEffect } from 'react'

import useAuth from '@/store/auth'
import { PageLoader } from '@/components'

const PersistLoader = () => {
    const { persist } = useAuth()

    useEffect(() => {
        persist()
    }, [])

    return <PageLoader />
}

export default PersistLoader
